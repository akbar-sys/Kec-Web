Gagal menginstal paket Cryptography Python dengan PIP dan setup.py
Ditanyakan 7 tahun, 3 bulan yang lalu
Aktif 1 bulan yang lalu
Dilihat 359k kali

279


90
Ketika saya mencoba menginstal paket Cryptography untuk Python melalui salah satu pip install cryptographyatau dengan mengunduh paket dari situs mereka dan menjalankan python setup.py, saya mendapatkan kesalahan berikut:

D:\Anaconda\Scripts\pip-script.py run on 02/27/14 16:13:17
Downloading/unpacking cryptography
  Getting page https://pypi.python.org/simple/cryptography/
  URLs to search for versions for cryptography:
  * https://pypi.python.org/simple/cryptography/
  Analyzing links from page https://pypi.python.org/simple/cryptography/
    Skipping https://pypi.python.org/packages/cp26/c/cryptography/cryptography-0.2-cp26-none-win32.whl#md5=13e5c4b19520e7dc6f07c6502b3f74e2 (from https://pypi.python.org/simple/cryptography/) because it is not compatible with this Python
    Skipping https://pypi.python.org/packages/cp26/c/cryptography/cryptography-0.2.1-cp26-none-win32.whl#md5=00e733648ee5cdb9e58876238b1328f8 (from https://pypi.python.org/simple/cryptography/) because it is not compatible with this Python
    Skipping https://pypi.python.org/packages/cp27/c/cryptography/cryptography-0.2-cp27-none-win32.whl#md5=013ccafa6a5a3ea92c73f2c1c4879406 (from https://pypi.python.org/simple/cryptography/) because it is not compatible with this Python
    Skipping https://pypi.python.org/packages/cp27/c/cryptography/cryptography-0.2.1-cp27-none-win32.whl#md5=127d6a5dc687250721f892d55720a06c (from https://pypi.python.org/simple/cryptography/) because it is not compatible with this Python
    Skipping https://pypi.python.org/packages/cp32/c/cryptography/cryptography-0.2-cp32-none-win32.whl#md5=051424a36e91039807b72f112333ded3 (from https://pypi.python.org/simple/cryptography/) because it is not compatible with this Python
    Skipping https://pypi.python.org/packages/cp32/c/cryptography/cryptography-0.2.1-cp32-none-win32.whl#md5=53f6f57db8e952d64283baaa14cbde3d (from https://pypi.python.org/simple/cryptography/) because it is not compatible with this Python
    Skipping https://pypi.python.org/packages/cp33/c/cryptography/cryptography-0.2-cp33-none-win32.whl#md5=302812c1c1a035cf9ba3292f8dbf3f9e (from https://pypi.python.org/simple/cryptography/) because it is not compatible with this Python
    Skipping https://pypi.python.org/packages/cp33/c/cryptography/cryptography-0.2.1-cp33-none-win32.whl#md5=81acca90caf8a45f2ca73f3f9859fae4 (from https://pypi.python.org/simple/cryptography/) because it is not compatible with this Python
    Found link https://pypi.python.org/packages/source/c/cryptography/cryptography-0.1.tar.gz#md5=bdc1c5fe069deca7467b71a0cc538f17 (from https://pypi.python.org/simple/cryptography/), version: 0.1
    Found link https://pypi.python.org/packages/source/c/cryptography/cryptography-0.2.1.tar.gz#md5=872fc04268dadc66a0305ae5ab1c123b (from https://pypi.python.org/simple/cryptography/), version: 0.2.1
    Found link https://pypi.python.org/packages/source/c/cryptography/cryptography-0.2.tar.gz#md5=8a3d21e837a21e1b7634ee1f22b06bb6 (from https://pypi.python.org/simple/cryptography/), version: 0.2
  Using version 0.2.1 (newest of versions: 0.2.1, 0.2, 0.1)
  Downloading from URL https://pypi.python.org/packages/source/c/cryptography/cryptography-0.2.1.tar.gz#md5=872fc04268dadc66a0305ae5ab1c123b (from https://pypi.python.org/simple/cryptography/)
  Running setup.py (path:c:\users\paco\appdata\local\temp\pip_build_Paco\cryptography\setup.py) egg_info for package cryptography
    In file included from c/_cffi_backend.c:7:0:
    c/misc_win32.h:225:23: error: two or more data types in declaration specifiers
    c/misc_win32.h:225:1: warning: useless type name in empty declaration [enabled by default]
    c/_cffi_backend.c: In function 'convert_array_from_object':
    c/_cffi_backend.c:1105:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1105:26: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c:1130:30: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1130:30: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c:1150:30: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1150:30: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function 'convert_struct_from_object':
    c/_cffi_backend.c:1183:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1183:26: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c:1196:30: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1196:30: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function 'cdata_repr':
    c/_cffi_backend.c:1583:13: warning: unknown conversion type character 'L' in format [-Wformat]
    c/_cffi_backend.c:1583:13: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c:1595:9: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1595:9: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function 'cdataowning_repr':
    c/_cffi_backend.c:1647:30: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1647:30: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function '_cdata_get_indexed_ptr':
    c/_cffi_backend.c:1820:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1820:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1820:26: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function '_cdata_getslicearg':
    c/_cffi_backend.c:1872:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1872:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1872:26: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function 'cdata_ass_slice':
    c/_cffi_backend.c:1951:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1951:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1951:26: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c:1969:30: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1969:30: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1969:30: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c:1983:22: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:1983:22: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function 'cdata_call':
    c/_cffi_backend.c:2367:30: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:2367:30: warning: format '%s' expects argument of type 'char *', but argument 3 has type 'Py_ssize_t' [-Wformat]
    c/_cffi_backend.c:2367:30: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function 'cast_to_integer_or_char':
    c/_cffi_backend.c:2916:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:2916:26: warning: format '%s' expects argument of type 'char *', but argument 3 has type 'Py_ssize_t' [-Wformat]
    c/_cffi_backend.c:2916:26: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c:2928:26: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:2928:26: warning: format '%s' expects argument of type 'char *', but argument 3 has type 'Py_ssize_t' [-Wformat]
    c/_cffi_backend.c:2928:26: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function 'new_array_type':
    c/_cffi_backend.c:3480:9: warning: unknown conversion type character 'l' in format [-Wformat]
    c/_cffi_backend.c:3480:9: warning: too many arguments for format [-Wformat-extra-args]
    c/_cffi_backend.c: In function 'b_complete_struct_or_union':
    c/_cffi_backend.c:3878:22: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:3878:22: warning: unknown conversion type character 'z' in format [-Wformat]
    c/_cffi_backend.c:3878:22: warning: too many arguments for format [-Wformat-extra-args]
    Traceback (most recent call last):
      File "<string>", line 17, in <module>
      File "c:\users\paco\appdata\local\temp\pip_build_Paco\cryptography\setup.py", line 113, in <module>
        "build": cffi_build,
      File "D:\Anaconda\lib\distutils\core.py", line 112, in setup
        _setup_distribution = dist = klass(attrs)
      File "build\bdist.win-amd64\egg\setuptools\dist.py", line 239, in __init__
      File "build\bdist.win-amd64\egg\setuptools\dist.py", line 264, in fetch_build_eggs
      File "build\bdist.win-amd64\egg\pkg_resources.py", line 580, in resolve
        dist = best[req.key] = env.best_match(req, ws, installer)
      File "build\bdist.win-amd64\egg\pkg_resources.py", line 818, in best_match
        return self.obtain(req, installer) # try and download/install
      File "build\bdist.win-amd64\egg\pkg_resources.py", line 830, in obtain
        return installer(requirement)
      File "build\bdist.win-amd64\egg\setuptools\dist.py", line 314, in fetch_build_egg
      File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 593, in easy_install

      File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 623, in install_item

      File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 809, in install_eggs

      File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 1015, in build_and_install

      File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 1003, in run_setup

    distutils.errors.DistutilsError: Setup script exited with error: command 'gcc' failed with exit status 1
    Complete output from command python setup.py egg_info:
    In file included from c/_cffi_backend.c:7:0:

c/misc_win32.h:225:23: error: two or more data types in declaration specifiers

c/misc_win32.h:225:1: warning: useless type name in empty declaration [enabled by default]

c/_cffi_backend.c: In function 'convert_array_from_object':

c/_cffi_backend.c:1105:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1105:26: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c:1130:30: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1130:30: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c:1150:30: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1150:30: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function 'convert_struct_from_object':

c/_cffi_backend.c:1183:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1183:26: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c:1196:30: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1196:30: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function 'cdata_repr':

c/_cffi_backend.c:1583:13: warning: unknown conversion type character 'L' in format [-Wformat]

c/_cffi_backend.c:1583:13: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c:1595:9: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1595:9: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function 'cdataowning_repr':

c/_cffi_backend.c:1647:30: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1647:30: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function '_cdata_get_indexed_ptr':

c/_cffi_backend.c:1820:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1820:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1820:26: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function '_cdata_getslicearg':

c/_cffi_backend.c:1872:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1872:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1872:26: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function 'cdata_ass_slice':

c/_cffi_backend.c:1951:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1951:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1951:26: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c:1969:30: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1969:30: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1969:30: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c:1983:22: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:1983:22: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function 'cdata_call':

c/_cffi_backend.c:2367:30: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:2367:30: warning: format '%s' expects argument of type 'char *', but argument 3 has type 'Py_ssize_t' [-Wformat]

c/_cffi_backend.c:2367:30: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function 'cast_to_integer_or_char':

c/_cffi_backend.c:2916:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:2916:26: warning: format '%s' expects argument of type 'char *', but argument 3 has type 'Py_ssize_t' [-Wformat]

c/_cffi_backend.c:2916:26: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c:2928:26: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:2928:26: warning: format '%s' expects argument of type 'char *', but argument 3 has type 'Py_ssize_t' [-Wformat]

c/_cffi_backend.c:2928:26: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function 'new_array_type':

c/_cffi_backend.c:3480:9: warning: unknown conversion type character 'l' in format [-Wformat]

c/_cffi_backend.c:3480:9: warning: too many arguments for format [-Wformat-extra-args]

c/_cffi_backend.c: In function 'b_complete_struct_or_union':

c/_cffi_backend.c:3878:22: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:3878:22: warning: unknown conversion type character 'z' in format [-Wformat]

c/_cffi_backend.c:3878:22: warning: too many arguments for format [-Wformat-extra-args]

Traceback (most recent call last):

  File "<string>", line 17, in <module>

  File "c:\users\paco\appdata\local\temp\pip_build_Paco\cryptography\setup.py", line 113, in <module>

    "build": cffi_build,

  File "D:\Anaconda\lib\distutils\core.py", line 112, in setup

    _setup_distribution = dist = klass(attrs)

  File "build\bdist.win-amd64\egg\setuptools\dist.py", line 239, in __init__

  File "build\bdist.win-amd64\egg\setuptools\dist.py", line 264, in fetch_build_eggs

  File "build\bdist.win-amd64\egg\pkg_resources.py", line 580, in resolve

    dist = best[req.key] = env.best_match(req, ws, installer)

  File "build\bdist.win-amd64\egg\pkg_resources.py", line 818, in best_match

    return self.obtain(req, installer) # try and download/install

  File "build\bdist.win-amd64\egg\pkg_resources.py", line 830, in obtain

    return installer(requirement)

  File "build\bdist.win-amd64\egg\setuptools\dist.py", line 314, in fetch_build_egg

  File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 593, in easy_install



  File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 623, in install_item



  File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 809, in install_eggs



  File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 1015, in build_and_install



  File "build\bdist.win-amd64\egg\setuptools\command\easy_install.py", line 1003, in run_setup



distutils.errors.DistutilsError: Setup script exited with error: command 'gcc' failed with exit status 1

----------------------------------------
Cleaning up...
  Removing temporary dir c:\users\paco\appdata\local\temp\pip_build_Paco...
Command python setup.py egg_info failed with error code 1 in c:\users\paco\appdata\local\temp\pip_build_Paco\cryptography
Exception information:
Traceback (most recent call last):
  File "D:\Anaconda\lib\site-packages\pip-1.5.4-py2.7.egg\pip\basecommand.py", line 122, in main
    status = self.run(options, args)
  File "D:\Anaconda\lib\site-packages\pip-1.5.4-py2.7.egg\pip\commands\install.py", line 278, in run
    requirement_set.prepare_files(finder, force_root_egg_info=self.bundle, bundle=self.bundle)
  File "D:\Anaconda\lib\site-packages\pip-1.5.4-py2.7.egg\pip\req.py", line 1229, in prepare_files
    req_to_install.run_egg_info()
  File "D:\Anaconda\lib\site-packages\pip-1.5.4-py2.7.egg\pip\req.py", line 325, in run_egg_info
    command_desc='python setup.py egg_info')
  File "D:\Anaconda\lib\site-packages\pip-1.5.4-py2.7.egg\pip\util.py", line 697, in call_subprocess
    % (command_desc, proc.returncode, cwd))
InstallationError: Command python setup.py egg_info failed with error code 1 in c:\users\paco\appdata\local\temp\pip_build_Paco\cryptography
Saya menemukan posting kesalahan egg_info lainnya ( di sini dan di sini ) tetapi solusi yang disediakan di sana tidak akan menyelesaikan masalah saya. Juga, saya dapat menginstal paket lain melalui PIP.

PIP versi 1.5.4 setuptools versi 2.2

ular piton
kriptografi
pip
Bagikan
Mengikuti
diedit 23 Mei '17 pukul 12:34

komunitas ♦
1 11 lencana perak
tanya 27 Februari '14 jam 15:50

lavender
2,791 2 2 lencana emas10 10 lencana perak33 lencana perunggu
2
POINTER UNTUK SEMUA ORANG - kriptografi sekarang mengirimkan roda prebuild untuk sebagian besar OS, jadi pip installkriptografi` harus bekerja di luar kotak. -  legorooj 1 Februari '20 pukul 3:11
Tambahkan komentar
27 Jawaban

445

Saya memiliki masalah serupa, dan ternyata saya hanya kehilangan ketergantungan (libssl-dev, untuk saya). Seperti yang dirujuk dalam https://cryptography.io/en/latest/installation/ , pastikan semua dependensi terpenuhi:

Di Windows
Jika Anda menggunakan Windows, Anda harus memastikan bahwa Anda telah menginstal OpenSSL. Ada binari pra-kompilasi yang tersedia. Jika instalasi Anda berada di lokasi yang tidak biasa, atur variabel lingkungan LIB dan INCLUDE untuk menyertakan lokasi yang sesuai. Sebagai contoh:

C:\> \path\to\vcvarsall.bat x86_amd64
C:\> set LIB=C:\OpenSSL-1.0.1f-64bit\lib;%LIB%
C:\> set INCLUDE=C:\OpenSSL-1.0.1f-64bit\include;%INCLUDE%
C:\> pip install cryptography
Membangun kriptografi di Linux
kriptografi harus dibangun dengan sangat mudah di Linux asalkan Anda memiliki kompiler C, header untuk Python (jika Anda tidak menggunakan pypy), dan header untuk pustaka OpenSSL dan libffi yang tersedia di sistem Anda.

Untuk Debian dan Ubuntu , perintah berikut akan memastikan bahwa dependensi yang diperlukan telah diinstal:

sudo apt-get install build-essential libssl-dev libffi-dev python-dev
Untuk Fedora dan RHEL-derivatives , perintah berikut akan memastikan bahwa dependensi yang diperlukan telah diinstal:

sudo yum install gcc libffi-devel python-devel OpenSSL-devel
Anda sekarang harus dapat membangun dan menginstal kriptografi dengan yang biasa.

pip install cryptography
Bagikan
Mengikuti
diedit 20 Juni '20 pada 9:12

komunitas ♦
1 11 lencana perak
dijawab 05 Mar '14 pada 21:47

jsonm
4,451 1 1 lencana emas8 8 lencana perak33 lencana perunggu
1
Terima kasih, bekerja dengan sempurna! Memiliki VS2010 saya harus: SET VS90COMNTOOLS=%VS100COMNTOOLS% dan menambahkan akhiran "mt" ke nama lib –  Maciek 11 Agustus '14 jam 9:30 
// , Saya dapat mengonfirmasi bahwa ini berfungsi pada mesin CEntOS 6.3 dengan Python 3.3 dengan kesalahan serupa dengan yang diposting di pertanyaan awal. -  Nathan Basanese 03 Sep '15 pukul 23:44
4
Tampaknya libffi-devpaket itu adalah kuncinya. Saya tidak perlu mengonfigurasi apa pun lagi, tetapi nama paket itu tidak muncul di log kesalahan :-/ Terima kasih. -  m3nda 10 Desember '15 pukul 6:06 
11
Jangan lupa ganti python-devdengan python3-devjika Anda menggunakan python3 –  dua 28 Februari '17 pukul 1:45
1
FWIW Saya menjalankan Debian 9 dan harus melakukan apt-get install libssl1.0-dev sebelum saya berhenti mendapatkan kesalahan selama pip install kriptografi –  Mike Pennington Feb 11 '19 pada 1:34
Tampilkan 5 komentar lainnya

125

Ini adalah versi ringkas dari informasi yang ditemukan di halaman dokumen instalasi kriptografi . Konsultasikan halaman itu untuk detail terbaru.

Karena pertanyaan SO ini terus muncul, saya juga akan memberikan tanggapan di sini (saya adalah salah satu pengembang pyca/cryptography). Inilah yang Anda butuhkan untuk menginstal pyca/cryptography dengan andal di 3 platform utama.

Harap dicatat dalam semua kasus ini, sangat disarankan agar Anda menginstal ke virtualenv dan bukan ke ruang paket global. Ini tidak khusus untuk kriptografi melainkan saran umum untuk menjaga agar instalasi Python Anda dapat diandalkan. Ruang paket global di OS yang disediakan Python dimiliki oleh sistem dan menginstal sesuatu melalui pip ke dalamnya meminta masalah.

jendela

Tingkatkan ke pip terbaru dan adil pip install cryptography

kriptografi dan cffi keduanya dikirimkan sebagai roda yang terhubung secara statis.

macOS (OSX)

Tingkatkan ke pip terbaru dan adil pip install cryptography

kriptografi dan cffi keduanya dikirimkan sebagai roda yang terhubung secara statis. Ini akan bekerja untuk pyenv Python, sistem Python, homebrew Python, dll. Selama Anda menggunakan pip terbaru, Anda bahkan tidak memerlukan kompiler.

Linux

Pengguna dengan pip terbaru yang berjalan pada distribusi berbasis glibc (hampir semuanya kecuali Alpine Linux) dan pada x86/x86-64/aarch64 tidak lagi memerlukan kompiler atau header karena Anda akan mendapatkan roda yang telah dikompilasi secara otomatis. Jadi, hal pertama yang harus Anda coba adalah mengupgrade pip Anda!

Jika Anda tidak kompatibel dengan banyak linux maka inilah yang perlu Anda lakukan:

Anda memerlukan kompiler C, kompiler Rust , libffi + header pengembangannya, dan openssl + header pengembangannya.

Distribusi turunan Debian atau Ubuntu

apt-get install build-essential libssl-dev libffi-dev python-dev diikuti oleh

pip install cryptography

Distribusi turunan Red Hat

yum install gcc openssl-devel libffi-devel python-devel diikuti oleh

pip install cryptography

Perhatikan bahwa pada kriptografi versi 3.4 sekarang memerlukan kompiler Rust pada waktu pembuatan ( bukan pada waktu proses ) sehingga Anda juga memerlukan Rust >= 1.41.0. Periksa karat distribusi Anda atau instal melalui rustup

Bagikan
Mengikuti
diedit 19 Februari pukul 3:28
dijawab 13 Jun '16 pada 4:21

Paul Kehrer
11.3k 4 4 lencana emas31 31 lencana perak4747 lencana perunggu
2
Saya telah melakukan ini, tetapi saya masih mendapatkan kesalahan ini: "Gagal membangun roda untuk kriptografi" Diikuti oleh banyak keluaran (terlalu banyak untuk dikomentari). -  RolandiXor 3 Nov '16 pukul 17:46
4
Respons MacOSX bekerja seperti pesona di MacOS Sierra 10.12. Saya telah memutakhirkan pip saya ke versi terbaru saat ini, 9.0.1. -  João Santos 15 Nov '16 pukul 12:07
4
Tingkatkan ke pip terbaru (8.1.2 per Juni 2016) dan hanya pip install kriptografi yang berfungsi! -  Timotius Dalton 22 Des '16 pukul 14:39
Saya harus memperbarui secara manual saya pipyang sudah tua, maka solusi OSX berfungsi seperti pesona. ( pip 9.0.1, MacOS Sierra) -  benyaminz 28 Februari '17 pukul 2:11
1
tidak berfungsi di windows10 saya, mendapatkan kesalahan build tidak dapat membuka file include: 'openssl/opensslv.h' –  Totte Karlsson 19 Juni '18 pukul 18:35 
Tampilkan 9 komentar lainnya

45

Bagi Anda yang menjalankan OS X, inilah yang berhasil bagi saya:

brew install openssl
env ARCHFLAGS="-arch x86_64" LDFLAGS="-L/usr/local/opt/openssl/lib" CFLAGS="-I/usr/local/opt/openssl/include"
pip install cryptography
(Menjalankan 10.9 Mavericks)

Anda mungkin juga ingin mencoba menggabungkan flag dan perintah pip ke yang berikut sesuai komentar di bawah:

brew install openssl
env ARCHFLAGS="-arch x86_64" LDFLAGS="-L/usr/local/opt/openssl/lib" CFLAGS="-I/usr/local/opt/openssl/include" pip install cryptography
Bagikan
Mengikuti
diedit 28 Jan '16 pada 4:44
dijawab 25 Jul '14 jam 18:05

Nick Woodhams
10.6k 10 10 lencana emas47 47 lencana perak5151 lencana perunggu
1
CFLAGS="-I/usr/include" pip install cryptographydari reaperhulk bekerja untuk saya di Mavericks. -  jjr4826 29 Mei '15 pukul 11:36 
Perintah ini dalam jawaban tidak benar: baris kedua dan ketiga harus digabungkan (gunakan garis miring terbalik). Kemudian bekerja dengan sempurna, baru saja diuji di El Capitan. Komentar di atas ini juga tidak benar. Pengaturan lain dalam jawaban diperlukan, atau Anda akan mendapatkan keluhan nanti. -  Christian Timer 27 Jan '16 pada 18:48 
1
Seperti biasa @nathancahill HEHE –  Nick Woodhams 30 Juni '16 pukul 10:01
1
Saya harus menggunakan exportnot env, tetapi sebaliknya berfungsi. -  Richard 6 Okt '16 pukul 11:03
$ ARCHFLAGS="-arch x86_64" LDFLAGS="-L/usr/local/opt/openssl/lib" CFLAGS="-I/usr/local/opt/openssl/include" pip install cryptographybekerja untuk saya macOS 10.12dengan Python3.7(dalam virtualenv) ketika membutuhkan cryptographyuntuk menginstal ansible. -  jalanb 22 Januari '18 pukul 22:18
Tambahkan komentar