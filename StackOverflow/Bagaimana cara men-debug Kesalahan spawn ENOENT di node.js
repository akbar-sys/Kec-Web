Bagaimana cara men-debug “Kesalahan: spawn ENOENT” di node.js?
Ditanyakan 6 tahun, 5 bulan yang lalu
Aktif 26 hari yang lalu
Dilihat 484k kali

405


91
Ketika saya mendapatkan kesalahan berikut:
events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: spawn ENOENT
    at errnoException (child_process.js:1000:11)
    at Process.ChildProcess._handle.onexit (child_process.js:791:34)
Prosedur apa yang bisa saya ikuti untuk memperbaikinya?
Catatan penulis : Banyak masalah dengan kesalahan ini mendorong saya untuk memposting pertanyaan ini untuk referensi di masa mendatang.

Pertanyaan-pertanyaan Terkait:

menggunakan fungsi spawn dengan NODE_ENV=production
node.js child_process.spawn kesalahan ENOENT - hanya di bawah supervisord
menelurkan kesalahan node.js ENOENT
https://stackoverflow.com/questions/27603713/nodejs-spawn-enoent-error-on-travis-calling-global-npm-package
Node JS - child_process spawn('npm install') dalam tugas Grunt menghasilkan kesalahan ENOENT
Menjalankan tugas "mandor" Kesalahan fatal: spawn ENOENT
peristiwa kesalahan yang tidak tertangani di simpul js Kesalahan: spawn ENOENT di errnoException (child_process.js:975:11)
Node.js SpookyJS: kesalahan saat mengeksekusi hello.js
https://stackoverflow.com/questions/26572214/run-grunt-on-a-directory-nodewebkit
Jalankan file exe dengan Child Process NodeJS
Node: child_process.spawn tidak berfungsi di Java meskipun berada di jalur (ENOENT)
memunculkan kesalahan ENOENT dengan NodeJS (terkait PYTHON)
pengubahan ukuran gambar tidak berfungsi di node.js (partial.js) (ketergantungan yang tidak diinstal)
npm install error ENOENT (membangun masalah ketergantungan)
Tidak dapat menginstal node.js - modul Oracle di Windows 7 (masalah ketergantungan build)
Kesalahan menginstal tegukan menggunakan nodejs di windows (kasus aneh)
node.js
debug
penanganan kesalahan
proses anak
muncul
Bagikan
Mengikuti
diedit 23 Mei '17 pukul 11:33

komunitas ♦
1 11 lencana perak
tanya 29 Des '14 jam 12:22

bass
14.4k 6 6 lencana emas36 36 lencana perak4545 lencana perunggu
8
Dalam kasus saya, saya meneruskan seluruh perintah sebagai String seperti yang Anda lakukan execalih - alih meneruskan perintah sebagai argumen pertama dan opsi sebagai Array untuk argumen kedua. misalnya saya lakukan spawn( "adb logcat -c" )bukan spawn( "adb", [ "logcat", "-c" ] ). -  Joshua Pinter 2 April '20 pukul 15:49 
Tambahkan komentar
27 Jawaban

255

CATATAN: Kesalahan ini hampir selalu disebabkan karena perintah tidak ada, karena direktori kerja tidak ada, atau dari bug khusus windows.

Saya menemukan cara mudah tertentu untuk mendapatkan gagasan tentang akar penyebab:

Error: spawn ENOENT
Masalah dari kesalahan ini adalah, hanya ada sedikit informasi dalam pesan kesalahan untuk memberi tahu Anda di mana situs panggilan berada, yaitu executable/perintah mana yang tidak ditemukan, terutama ketika Anda memiliki basis kode yang besar di mana ada banyak panggilan spawn . Di sisi lain, jika kita tahu persis perintah yang menyebabkan kesalahan maka kita dapat mengikuti jawaban @laconbass untuk memperbaiki masalah.

Saya menemukan cara yang sangat mudah untuk menemukan perintah mana yang menyebabkan masalah daripada menambahkan pendengar acara di mana-mana dalam kode Anda seperti yang disarankan dalam jawaban @laconbass. Ide kuncinya adalah untuk membungkus panggilan spawn asli dengan pembungkus yang mencetak argumen yang dikirim ke panggilan spawn.

Berikut adalah fungsi pembungkus, letakkan di bagian atas index.jsatau apa pun skrip awal server Anda.

(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();
Kemudian pada saat Anda menjalankan aplikasi Anda, sebelum pesan pengecualian yang tidak tertangkap, Anda akan melihat sesuatu seperti itu:

spawn called
{ '0': 'hg',
  '1': [],
  '2':
   { cwd: '/* omitted */',
     env: { IP: '0.0.0.0' },
     args: [] } }
Dengan cara ini Anda dapat dengan mudah mengetahui perintah mana yang sebenarnya dijalankan dan kemudian Anda dapat mengetahui mengapa nodejs tidak dapat menemukan yang dapat dieksekusi untuk memperbaiki masalah.

Bagikan
Mengikuti
diedit 3 Sep '19 pada 0:04

kaburTew
2,860 22 22 lencana perak2323 lencana perunggu
dijawab 11 Jan '15 jam 2:40

Jiaji Zhou
2.559 2 2 lencana emas8 8 lencana perak22 lencana perunggu
3
Berikut ide lain: hanya mengubah spawn()ke exec()dan coba lagi. exec()akan memberi tahu Anda perintah apa yang coba dijalankannya. -  Adam Monsen 16 April '15 pada 5:08 
1
Penting: Pastikan untuk menempatkan kode di atas sedekat mungkin dengan awal file JS utama. Jika Anda memuat modul lain terlebih dahulu, mereka dapat menyembunyikan fungsi 'spawn' dan penggantian di sini tidak akan pernah dipanggil. -  Dan Nissenbaum 21 Juni '15 pada 0:47
2
Saya tidak beruntung menggunakan skrip. Ini tidak bekerja sama sekali. -  orang baru 3 Nov '16 jam 8:28
Jadi bagaimana Anda menggunakan metode ini dalam file kasar? Saya tidak yakin di mana harus meletakkan ini. -  Felix Hawa 7 Februari '17 pukul 4:04 
2
Ini bekerja dengan sempurna untuk saya. Saya baru saja meletakkan ini di bagian atas file gulpfile.js saya, dan bingo bango bongo, spawn logging! -  Yann Duran 3 Maret '17 pukul 7:12
Tampilkan 3 komentar lainnya

131

Langkah 1: Pastikan spawndipanggil dengan cara yang benar
Pertama, tinjau dokumen untuk child_process.spawn( command, args, options ) :

Meluncurkan proses baru dengan yang diberikan command, dengan argumen baris perintah di args. Jika dihilangkan, argsdefaultnya adalah Array kosong.

Argumen ketiga digunakan untuk menentukan opsi tambahan, yang defaultnya adalah:

{ cwd: undefined, env: process.env }

Gunakan envuntuk menentukan variabel lingkungan yang akan terlihat oleh proses baru, defaultnya adalah process.env.

Pastikan Anda tidak memasukkan argumen baris perintah apa pun commanddan seluruh spawnpanggilan valid . Lanjutkan ke langkah berikutnya.

Langkah 2: Identifikasi Pemancar Peristiwa yang memancarkan peristiwa kesalahan
Cari di kode sumber Anda untuk setiap panggilan ke spawn, atau child_process.spawn, yaitu

spawn('some-command', [ '--help' ]);
dan lampirkan di sana pendengar acara untuk acara 'kesalahan', sehingga Anda dapat melihat Pemancar Acara yang tepat yang melemparkannya sebagai 'Tidak Ditangani'. Setelah debugging, handler itu bisa dihapus.

spawn('some-command', [ '--help' ])
  .on('error', function( err ){ throw err })
;
Jalankan dan Anda akan mendapatkan jalur file dan nomor baris tempat pendengar 'kesalahan' Anda terdaftar. Sesuatu seperti:

/file/that/registers/the/error/listener.js:29
      throw err;
            ^
Error: spawn ENOENT
    at errnoException (child_process.js:1000:11)
    at Process.ChildProcess._handle.onexit (child_process.js:791:34)
Jika dua baris pertama diam

events.js:72
        throw er; // Unhandled 'error' event
lakukan langkah ini lagi sampai tidak. Anda harus mengidentifikasi pendengar yang mengeluarkan kesalahan sebelum melanjutkan ke langkah berikutnya.

Langkah 3: Pastikan variabel lingkungan $PATHdisetel
Ada dua skenario yang mungkin:

Anda mengandalkan spawnperilaku default , sehingga lingkungan proses anak akan sama dengan process.env.
Anda explicity melewati sebuah envobjek untuk spawndi optionsargumen.
Dalam kedua skenario, Anda harus memeriksa PATHkunci pada objek lingkungan yang akan digunakan oleh proses anak yang muncul.

Contoh untuk skenario 1

// inspect the PATH key on process.env
console.log( process.env.PATH );
spawn('some-command', ['--help']);
Contoh untuk skenario 2

var env = getEnvKeyValuePairsSomeHow();
// inspect the PATH key on the env object
console.log( env.PATH );
spawn('some-command', ['--help'], { env: env });
Tidak adanya PATH(yaitu, itu undefined) akan menyebabkan spawnuntuk memancarkan ENOENTkesalahan , karena tidak akan mungkin untuk menemukan apapun commandkecuali itu adalah jalur absolut ke file yang dapat dieksekusi.

Ketika PATHdiatur dengan benar, lanjutkan ke langkah berikutnya. Itu harus berupa direktori, atau daftar direktori. Kasus terakhir seperti biasa.

Langkah 4: Pastikan commandada di direktori yang ditentukan diPATH
Spawn dapat mengeluarkan ENOENTkesalahan jika nama file command(yaitu, 'some-command') tidak ada di setidaknya salah satu direktori yang ditentukan pada PATH.

Temukan tempat yang tepat dari command. Pada sebagian besar distribusi linux, ini dapat dilakukan dari terminal dengan whichperintah. Ini akan memberi tahu Anda jalur absolut ke file yang dapat dieksekusi (seperti di atas), atau memberi tahu apakah itu tidak ditemukan.

Contoh penggunaan which dan outputnya ketika sebuah perintah ditemukan

> which some-command
some-command is /usr/bin/some-command
Contoh penggunaan which dan outputnya ketika perintah tidak ditemukan

> which some-command
bash: type: some-command: not found
program yang tidak terinstal adalah penyebab paling umum untuk perintah yang tidak ditemukan . Lihat setiap dokumentasi perintah jika diperlukan dan instal.

Ketika perintah adalah file skrip sederhana, pastikan itu dapat diakses dari direktori di PATH. Jika tidak, pindahkan ke salah satu atau buat tautan ke sana.

Setelah Anda menentukan PATHtelah disetel dengan benar dan commanddapat diakses darinya, Anda harus dapat menelurkan proses anak Anda tanpa spawn ENOENTterlempar.

Bagikan
Mengikuti
diedit 19 Juli '17 pukul 15:43

Marcel Bro
4.356 3 3 lencana emas37 37 lencana perak6262 lencana perunggu
dijawab 29 Des '14 jam 12:22

bass
14.4k 6 6 lencana emas36 36 lencana perak4545 lencana perunggu
1
Ini sangat membantu saya men-debug Spawn ENOENT. Saya sudah mereferensikannya berkali-kali. Terima kasih! -  CodeManiak 9 Juli '15 pukul 22:13
41
Saya juga menemukan bahwa ENOENT akan dilempar jika Anda menentukan cwddalam opsi, tetapi direktori yang diberikan tidak ada. -  Daniel Imfeld 19 Nov '15 pukul 22:37
4
@DanielImfeld JUMLAH PENYELAMAT. Anda harus menulis jawaban yang mengatakan ini. -  HijauAsJade 29 Nov '15 jam 8:37
4
Saat Anda menggunakan spawn('some-command', ['--help'], { env: env });seperti yang dicontohkan oleh Langkah 3 dalam jawaban ini dan melewati lingkungan khusus, pastikan untuk menentukan PATH, misalnya: { env: { PATH: process.env.PATH } }. Opsi env tidak akan mewarisi variabel dari env Anda saat ini secara default. -  anti 11 Agustus '16 pukul 11:52
7
Saya dapat menyelesaikan masalah saya dengan meneruskan shell: trueke opsi spawn. -  Nickofthyme 24 Jan '19 pukul 23:20
Tampilkan 12 komentar lainnya

38

Seperti yang ditunjukkan oleh @DanielImfeld , ENOENT akan dilempar jika Anda menentukan "cwd" dalam opsi, tetapi direktori yang diberikan tidak ada.

Bagikan
Mengikuti
diedit 23 Mei '17 jam 12:03

komunitas ♦
1 11 lencana perak
dijawab 17 Jun '16 pada 14:44

Leeroy Brun
4.350 2 2 lencana emas14 14 lencana perak1111 lencana perunggu
1
jadi apakah ada cara untuk menjalankan perintah di direktori tertentu? -  Mitro 3 Okt '17 jam 9:41
Di Windows (7) sepertinya Anda juga perlu memasukkan huruf drive di cwdjalur: 'c:/...' dan bukan hanya '/...' –  museful 15 Januari '19 pukul 20:56
Tambahkan komentar