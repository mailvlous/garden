---
title: Week 5
draft: false
tags:
  - digital image processing
  - image
  - college
  - filter
  - highpass
  - lowpass
  - bandpass
  - convolution
  - spatial
published: '2026-10-05T00:00:00.000Z'
---
konvolusi

Konvolusi adalah operasi yang menghitung nilai piksel output berdasarkan piksel-piksel di sekitarnya menggunakan sebuah kernel.
![Screenshot 2026 10 05 081549](/assets/screenshot-2026-10-05-081549-20261011135211-71280e2f.png)
![Screenshot 2026 10 05 082722](/assets/screenshot-2026-10-05-082722-20261011135223-fa27f78d.png)
![Screenshot 2026 10 05 082736](/assets/screenshot-2026-10-05-082736-20261011135232-b8aa3b82.png)
![Screenshot 2026 10 05 082747](/assets/screenshot-2026-10-05-082747-20261011135241-d383d1fb.png)
![Screenshot 2026 10 05 083630](/assets/screenshot-2026-10-05-083630-20261011135248-a1d17fdb.png)

kernel/matriks 3x3

Secara matematis, konvolusi membalik kernel 180° sebelum menghitung. Untuk kernel rata-rata yang simetris, hasilnya tetap sama. Dalam banyak praktik PCD, operasi tanpa pembalikan disebut korelasi.  

jenis operasi konvolusi
- valid, Kernel hanya dihitung ketika seluruh elemennya berada di dalam citra. Output mengecil.
- same, Padding ditambahkan agar ukuran output sama dengan input.
- full, Kernel boleh bergeser hingga hanya sebagian tumpang tindih dengan citra. Output membesar.

citraa frekuensi rendah
citraa frekuensi tinggi

filter spasial
![Screenshot 2026 10 05 085711](/assets/screenshot-2026-10-05-085711-20261011142302-32838d6c.png)

jenis filter
- lowpass filter, frekuensi rendah: blur, smoothing, meredam detail halus
- highpass fiter, frekuensi tinggi: menonjolkan tepi dan detail
- bandpass filter, rentang frekuensi tertentu:	memilih detail pada skala tertentu

Contoh kernel
**Lowpass (mean filter)**

Lowpass mempertahankan frekuensi rendah dan melemahkan frekuensi tinggi.

Kenapa disebut penghalusan?  
Karena nilai piksel output merupakan gabungan berbobot dari piksel-piksel tetangga. Perbedaan intensitas yang tajam cenderung berkurang.

Semua bobot positif dan berjumlah 1, sehingga menghitung rata-rata intensitas.  
![image](/assets/image-20261011143644-75304243.png)

**Highpass (Laplacian)**

Highpass melemahkan frekuensi rendah dan mempertahankan frekuensi tinggi.  

Jumlah koefisien = 0.  
Artinya, jika semua piksel memiliki nilai yang sama, output akan 0 pada daerah tersebut.  
Namun, saat ada perbedaan intensitas yang tajam, hasilnya bisa besar.  
Karena itu, highpass sering dipakai untuk mendeteksi tepi, tetapi juga dapat memperkuat noise.  

Jumlah bobot = 0. Area yang intensitasnya seragam menghasilkan respons nol, sedangkan perubahan intensitas menghasilkan respons besar.  

![image](/assets/image-20261011144059-ef17043f.png)

**Bandpass**  

Bandpass hanya mempertahankan rentang frekuensi tertentu, bukan semua frekuensi rendah atau semua frekuensi tinggi.  

Biasanya dibentuk dengan mengurangi dua hasil penghalusan yang memiliki skala berbeda, misalnya Difference of Gaussians (DoG):
![image](/assets/image-20261011144934-2c254421.png)


![image](/assets/image-20261011150744-f7b20d63.png)
![image](/assets/image-20261011151206-1cb6fbc9.png)
Perbedaannya:
- Highpass Laplacian: menghasilkan respons yang menonjolkan perubahan intensitas dan menghilangkan komponen konstan.
- Sharpening: mempertahankan citra dasar sekaligus memperkuat detail dan tepinya.


**Filter linear**

Filter linear menghitung piksel output melalui penjumlahan berbobot dari nilai-nilai piksel input.

Contohnya:
- Mean filter
- Gaussian filter
- Sobel filter
- Laplacian filter

**Filter nonlinear**

Filter nonlinear tidak menggunakan penjumlahan berbobot secara linear. Salah satu contohnya adalah memilih nilai berdasarkan urutan.  
Contoh paling umum: Median filter.


![image](/assets/image-20261011181751-de8be296.png)

