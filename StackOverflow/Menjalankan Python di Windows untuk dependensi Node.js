Menjalankan Python di Windows untuk dependensi Node.js
Ditanyakan 8 tahun, 3 bulan yang lalu
Aktif 17 hari yang lalu
Dilihat 376k kali

242


69
Saya masuk ke basis kode Node.js yang mengharuskan saya mengunduh beberapa dependensi melalui NPM, yaitu jQuery.

Dalam mencoba menjalankan npm install jquery, saya terus mendapatkan kesalahan ini:

Your environment has been set up for using Node.js 0.8.21 (x64) and NPM

C:\Users\Matt Cashatt>npm install jquery
npm http GET https://registry.npmjs.org/jquery
npm http 304 https://registry.npmjs.org/jquery
npm http GET https://registry.npmjs.org/jsdom
npm http GET https://registry.npmjs.org/xmlhttprequest
npm http GET https://registry.npmjs.org/htmlparser/1.7.6
npm http GET https://registry.npmjs.org/location/0.0.1
npm http GET https://registry.npmjs.org/navigator
npm http GET https://registry.npmjs.org/contextify
npm http 304 https://registry.npmjs.org/htmlparser/1.7.6
npm http 304 https://registry.npmjs.org/xmlhttprequest
npm http 304 https://registry.npmjs.org/location/0.0.1
npm http 304 https://registry.npmjs.org/navigator
npm http 304 https://registry.npmjs.org/jsdom
npm http 304 https://registry.npmjs.org/contextify
npm http GET https://registry.npmjs.org/bindings
npm http GET https://registry.npmjs.org/cssom
npm http GET https://registry.npmjs.org/cssstyle
npm http GET https://registry.npmjs.org/request
npm http 304 https://registry.npmjs.org/bindings

> contextify@0.1.4 install C:\Users\Matt Cashatt\node_modules\jquery\node_module
s\contextify
> node-gyp rebuild


C:\Users\Matt Cashatt\node_modules\jquery\node_modules\contextify>node "C:\Progr
am Files\nodejs\node_modules\npm\bin\node-gyp-bin\\..\..\node_modules\node-gyp\b
in\node-gyp.js" rebuild
npm http 304 https://registry.npmjs.org/cssstyle
npm http 304 https://registry.npmjs.org/cssom
npm http 304 https://registry.npmjs.org/request
gyp ERR! configure error
gyp ERR! stack Error: Can't find Python executable "python", you can set the PYT
HON env variable.
gyp ERR! stack     at failNoPython (C:\Program Files\nodejs\node_modules\npm\nod
e_modules\node-gyp\lib\configure.js:113:14)
gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\node
-gyp\lib\configure.js:82:11
gyp ERR! stack     at Object.oncomplete (fs.js:297:15)
gyp ERR! System Windows_NT 6.1.7601
gyp ERR! command "node" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modu
les\\node-gyp\\bin\\node-gyp.js" "rebuild"
gyp ERR! cwd C:\Users\Matt Cashatt\node_modules\jquery\node_modules\contextify
gyp ERR! node -v v0.8.21
gyp ERR! node-gyp -v v0.8.4
gyp ERR! not ok
npm ERR! error rolling back Error: ENOTEMPTY, rmdir 'C:\Users\Matt Cashatt\node_
modules\jquery\node_modules\jsdom\node_modules\request\tests'
npm ERR! error rolling back  jquery@1.8.3 { [Error: ENOTEMPTY, rmdir 'C:\Users\M
att Cashatt\node_modules\jquery\node_modules\jsdom\node_modules\request\tests']
npm ERR! error rolling back   errno: 53,
npm ERR! error rolling back   code: 'ENOTEMPTY',
npm ERR! error rolling back   path: 'C:\\Users\\Matt Cashatt\\node_modules\\jque
ry\\node_modules\\jsdom\\node_modules\\request\\tests' }
npm ERR! contextify@0.1.4 install: `node-gyp rebuild`
npm ERR! `cmd "/c" "node-gyp rebuild"` failed with 1
npm ERR!
npm ERR! Failed at the contextify@0.1.4 install script.
npm ERR! This is most likely a problem with the contextify package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     node-gyp rebuild
npm ERR! You can get their info via:
npm ERR!     npm owner ls contextify
npm ERR! There is likely additional logging output above.

npm ERR! System Windows_NT 6.1.7601
npm ERR! command "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nod
ejs\\node_modules\\npm\\bin\\npm-cli.js" "install" "jquery"
npm ERR! cwd C:\Users\Matt Cashatt
npm ERR! node -v v0.8.21
npm ERR! npm -v 1.2.11
npm ERR! code ELIFECYCLE
npm ERR! Error: ENOENT, lstat 'C:\Users\Matt Cashatt\node_modules\jquery\node_mo
dules\jsdom\node_modules\request\tests\test-pipes.js'
npm ERR! If you need help, you may report this log at:
npm ERR!     <http://github.com/isaacs/npm/issues>
npm ERR! or email it to:
npm ERR!     <npm-@googlegroups.com>

npm ERR! System Windows_NT 6.1.7601
npm ERR! command "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nod
ejs\\node_modules\\npm\\bin\\npm-cli.js" "install" "jquery"
npm ERR! cwd C:\Users\Matt Cashatt
npm ERR! node -v v0.8.21
npm ERR! npm -v 1.2.11
npm ERR! path C:\Users\Matt Cashatt\node_modules\jquery\node_modules\jsdom\node_
modules\request\tests\test-pipes.js
npm ERR! fstream_path C:\Users\Matt Cashatt\node_modules\jquery\node_modules\jsd
om\node_modules\request\tests\test-pipes.js
npm ERR! fstream_type File
npm ERR! fstream_class FileWriter
npm ERR! code ENOENT
npm ERR! errno 34
npm ERR! fstream_stack C:\Program Files\nodejs\node_modules\npm\node_modules\fst
ream\lib\writer.js:284:26
npm ERR! fstream_stack Object.oncomplete (fs.js:297:15)
npm ERR!
npm ERR! Additional logging details can be found in:
npm ERR!     C:\Users\Matt Cashatt\npm-debug.log
npm ERR! not ok code 0

C:\Users\Matt Cashatt>
Sepertinya kegagalan ini disebabkan oleh instalasi Python yang hilang. Yah, saya telah menginstal Python, mengatur variabel, dan mem-boot ulang dan masih kesalahan.

Adakah petunjuk tentang apa yang saya lewatkan?

ular piton
jendela
node.js
npm
Bagikan
Perbaiki pertanyaan ini
Mengikuti
diedit 28 Feb 13 jam 2:47

josh3736
124k 26 26 lencana emas203 203 lencana perak248248 lencana perunggu
ditanyakan 28 Februari '13 pada 1:48

Matt Cashatt
20.9k 24 24 lencana emas73 73 lencana perak105105 lencana perunggu
1
Bisakah Anda menempelkan teks sebagai teks, bukan gambar? Selain sulit dibaca (terutama karena font bitmap yang sudah beresolusi rendah diperkecil), font ini tidak dapat disalin. -  abarnert 28 Februari '13 pukul 1:55
1
Lebih penting lagi: Bagaimana Anda mengatur variabel lingkungan sebelum mem-boot ulang? Jika Anda baru saja melakukannya PYTHON=C:\Python27\Python.exedi jendela cmd Anda dan reboot, pengaturannya hilang. -  abarnert 28 Februari '13 pada 1:56
7
Juga, versi Python mana yang Anda instal? Setidaknya versi waf dan gyp yang lebih lama membutuhkan 2.x tetapi tidak mengatakan apa-apa tentang itu, dan akan memberikan semua jenis kesalahan misterius jika Anda menginstal 3.x sebagai gantinya. -  abarnert 28 Februari '13 pukul 1:57
Terima kasih atas komentar Anda. Saya telah memposting kesalahan dalam format teks. Saya menggunakan v2.7 –  Matt Cashatt 28 Februari '13 pada 1:58
Oke, tapi tolong jawab pertanyaan "yang lebih penting", karena itu, seperti yang tersirat dalam teks, penting. Anda mungkin juga ingin menguji ini sendiri: Di cmd.exejendela, sebelum mencoba npmperintah, apakah salah satu pythonatau %PYTHON%memulai juru bahasa Python? Jika tidak, Anda belum mengaturnya dengan benar. -  abarnert 28 Februari '13 pada 1:58 
Tampilkan 4 komentar lainnya
23 Jawaban

137

Masalah Anda adalah Anda tidak mengatur variabel lingkungan.

Kesalahan dengan jelas mengatakan ini:

gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.
Dan dalam komentar Anda, Anda mengatakan Anda melakukan ini:

set PYTHONPATH=%PYTHONPATH%;C:\My_python_lib
Itu bagus, tapi itu tidak mengatur PYTHONvariabel, itu mengatur PYTHONPATHvariabel.

Sementara itu, hanya menggunakan setperintah hanya mempengaruhi cmdsesi saat ini . Jika Anda reboot setelah itu, seperti yang Anda katakan, Anda akan berakhir dengan cmdsesi baru yang tidak memiliki variabel yang ditetapkan di dalamnya.

Ada beberapa cara untuk mengatur variabel lingkungan secara permanen — yang paling mudah adalah di System Control Panel di XP, yang tentu saja berbeda di Vista, berbeda lagi di 7, dan berbeda lagi di 8, tetapi Anda bisa mencarinya di google.

Atau, lakukan saja yang setbenar sebelum npmperintah, tanpa me-reboot di antaranya.

Anda dapat menguji apakah Anda telah melakukan hal yang benar dengan melakukan hal yang sama persis seperti yang coba dilakukan skrip konfigurasi: Sebelum menjalankan npm, coba jalankan %PYTHON%. Jika Anda melakukannya dengan benar, Anda akan mendapatkan juru bahasa Python (yang dapat segera Anda hentikan). Jika Anda mendapatkan kesalahan, Anda belum melakukannya dengan benar.

Ada dua masalah dengan ini:

set PYTHON=%PYTHON%;D:\Python
Pertama, Anda menyetel PYTHONke ;D:\Python. Titik koma tambahan itu baik-baik saja untuk daftar jalur yang dipisahkan titik koma, seperti PATHatau PYTHONPATH, tetapi tidak untuk satu nilai seperti PYTHON. Dan juga, menambahkan nilai baru ke nilai yang ada adalah apa yang Anda inginkan saat Anda ingin menambahkan jalur lain ke daftar jalur, tetapi tidak untuk satu nilai. Jadi, Anda hanya ingin set PYTHON=D:\Python.

Kedua, D:\Pythonbukan jalur ke juru bahasa Python Anda. Ini seperti D:\Python\Python.exe, atau D:\Python\bin\Python.exe. Temukan jalur yang benar, pastikan itu berfungsi sendiri (mis., ketik D:\Python\bin\Python.exedan pastikan Anda mendapatkan juru bahasa Python), lalu atur variabel dan gunakan.

Begitu:

set PYTHON=D:\Python\bin\Python.exe
Atau, jika Anda ingin membuatnya permanen, lakukan hal yang sama di Control Panel.

Bagikan
Perbaiki jawaban ini
Mengikuti
diedit 13 Februari '14 pukul 20:23
dijawab 28 Februari '13 jam 2:00

abarnert
314k 35 35 lencana emas509 509 lencana perak597597 lencana perunggu
1
Oke, jadi saya mendapatkan ini: Microsoft Windows [Versi 6.1.7601] Hak Cipta (c) 2009 Microsoft Corporation. Seluruh hak cipta. C:\Users\Matt Cashatt>set PYTHON=%PYTHON%;D:\Python C:\Users\Matt Cashatt>%PYTHON% '%PYTHON%' tidak dikenali sebagai perintah internal atau eksternal, program yang dapat dioperasikan, atau file batch . C:\Users\Matt Cashatt> –  Matt Cashatt 28 Februari '13 pada 2:05
1
Juga, Ddrive adalah tempat saya memiliki Python jika Anda bertanya-tanya. Terima kasih lagi atas bantuan Anda. -  Matt Cashatt 28 Februari '13 pada 2:07
Bekerja seperti pesona, terima kasih! Untuk yang lain: Saya harus menjalankan setperintah di jendela perintah NPM untuk beberapa alasan dan kemudian menjalankan mpm install jqueryperintah tepat setelah itu. Jika saya melakukannya secara terpisah, itu tidak berhasil karena suatu alasan. -  Matt Cashatt 28 Februari '13 pada 3:05
@MatthewPatrickCashatt: Seperti yang saya jelaskan, setperintah hanya mempengaruhi cmdjendela saat ini , jadi Anda harus melakukannya sebelum berjalan npmdi jendela yang sama. Jika Anda ingin mengatur variabel lingkungan lebih permanen, itu ada di Panel Kontrol Sistem, atau yang setara untuk versi Windows Anda. -  abarnert Feb 28 '13 jam 18:21
3
@abarnert adalah jawaban aktual untuk pertanyaan ini kemudian atur PYTHON=D:\Python\bin\Python.exe - akan sangat membantu jika Anda memberikan cara yang benar serta menjelaskan cara yang salah –  mencapai4thelaser 10 Februari '14 pukul 10:34
Tampilkan 2 komentar lainnya

484

Jika Anda belum menginstal python bersama dengan semua dependensi node-gyp, cukup buka Powershell atau Git Bash dengan hak administrator dan jalankan:

npm install --global --production windows-build-tools
dan kemudian untuk menginstal paket:

npm install --global node-gyp
setelah diinstal, Anda akan memiliki semua dependensi node-gyp yang diunduh, tetapi Anda masih memerlukan variabel lingkungan. Validasi Python memang ditemukan di folder yang benar:

C:\Users\ben\.windows-build-tools\python27\python.exe 
* Catatan - ini menggunakan python 2.7 bukan 3.x karena tidak didukung*

Jika tidak mengerang, lanjutkan dan buat variabel lingkungan (pengguna) Anda:

setx PYTHON "%USERPROFILE%\.windows-build-tools\python27\python.exe"
restart cmd, dan verifikasi variabel yang ada melalui set PYTHONmana harus mengembalikan variabel ( $env:PYTHONjika menggunakan Powershell)

Terakhir daftar ulang npm install <module>

Bagikan
Perbaiki jawaban ini
Mengikuti
diedit 3 Maret pukul 4:58

Chris Halcrow
21.6k 11 11 lencana emas115 115 lencana perak145145 lencana perunggu
dijawab 22 Sep '16 pada 20:43

benscabbia
14.9k 12 12 lencana emas42 42 lencana perak5757 lencana perunggu
1
Saya memiliki beberapa kesalahan izin, tetapi berhasil menginstal python secara manual dari: C:\Users[me]\.windows-build-tools\python.msi . Dalam instalasi adalah pilihan untuk menambahkannya ke jalan. (Mulai ulang cmd/PS ) dan berhasil –  d.raev 12 Agustus '17 pukul 9:46
Saya mendapatkan kesalahan kunci dh terlalu kecil: openssk\ssl\s3_clnt,c:3641 –  pengguna1428716 13 Sep '17 pukul 6:58
17
Menginstal windows-build-tools diperlukan PowerShell dijalankan sebagai Admin di Windows 10. Ini berarti perintah setx menjadisetx PYTHON $env:USERPROFILE\.windows-build-tools\python27\python.exe –  bae 30 Okt '17 pukul 23:43
Saya memang harus menjalankan perintah ini di Prompt perintah yang ditinggikan, tetapi tampaknya berhasil. Menginstal Python 3.x secara manual dan mengatur variabel lingkungan PYTHON untuk menunjuk ke sana tidak berhasil. Saya menganggap kesalahan saya terkait dengan perbedaan dalam versi python? Terima kasih terlepas! -  JeffryHouser 6 Juni '18 pukul 15:47
Tambahkan komentar

21

Bagi saya setelah menginstal windows-build-tools dengan komentar di bawah ini

npm --add-python-to-path='true' --debug install --global windows-build-tools
menjalankan kode di bawah ini

npm config set python "%USERPROFILE%\.windows-build-tools\python27\python.exe"
telah bekerja.

Bagikan
Perbaiki jawaban ini
Mengikuti
dijawab 6 Des '18 jam 13:02

Serhat Ozo
720 7 7 lencana perak1212 lencana perunggu
Saya juga membutuhkan kedua langkah di atas. Saya juga akan menambahkan bahwa, bagi saya, (Windows 10 Pro 1803, node v10.15.3, npm v6.9.0) ketika saya menjalankan langkah pertama, langkah 'npm install windows-build-tools', instalasi itu sepertinya tidak pernah selesai, sepertinya terus berulang (mengumpankan kembali jalur output yang sama ke konsol). Setelah menonton loop yang tampak tak berujung ini selama beberapa menit, saya memilih untuk menggunakan Ctrl+C untuk "mengakhiri pekerjaan batch". Semuanya bekerja sebagaimana dimaksud, mengganggu loop tampaknya tidak menjadi masalah. -  Pengguna StackOverflow Apr 8 '19 jam 6:06
Tambahkan komentar