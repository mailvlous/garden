---
tags:
  - digital image processing
  - college
  - semester 5
title: Week 4, part 2
draft: false
published: 2026-10-11
---

### Histogram ccitra

representasi dari distribusi data numerik  
angka matriks dihitung secara frekuensinya  

Pada citra grayscale 8-bit, nilai intensitas piksel berada dalam rentang 0–255.  
- 0 = Hitam
- 255 = Putih
- 1–254 = Berbagai tingkat keabuan

terang ke kanan, gelap ke kiri

![image](/assets/image-20261011091743-eb76e3ff.png)
![image](/assets/image-20261011091759-2e5f7608.png)
![image](/assets/image-20261011092014-c97de890.png)

histogram menunjukkan distribusi intensitas, bukan posisi piksel. Dua gambar berbeda dapat memiliki histogram yang sama.

Pada citra RGB, histogram dapat dihitung secara terpisah untuk tiga channel:

#### intensitas citra keseluruhan

mean  

![image](/assets/image-20261011093224-4ea102e0.png)
![image](/assets/image-20261011093245-13b199a2.png)
![image](/assets/image-20261011093302-f0c49dee.png)

standar deviasi  

standar deviasi digunakan untuk mengukur seberapa tersebar intensitas piksel dari rata-ratanya.  
![image](/assets/image-20261011093627-1ac3cb01.png)

- Rata-rata (\(\mu\)) -> mengukur kecerahan rata-rata.  
- Varians (\(\sigma^2\)) → mengukur penyebaran intensitas.  
- Standar deviasi (\(\sigma\)) → salah satu ukuran kontras citra.  

Semakin besar standar deviasi, semakin besar variasi intensitas piksel pada citra.

![image](/assets/image-20261011094300-3590da4f.png)

dua citra dengan rata-rata sama belum tentu mempunyai kontras yang sama.  
![image](/assets/image-20261011094855-75ac3221.png)
Karena kontras berkaitan dengan perbedaan intensitas.

Standar deviasi mengukur seberapa jauh intensitas-intensitas tersebut menyimpang dari rata-ratanya.  

Varians mengukur hal yang sama dalam bentuk kuadrat.  

Standar deviasi merupakan akar varians, sehingga lebih mudah ditafsirkan dalam satuan intensitas piksel.  

Standar deviasi adalah ukuran kontras global secara statistik. Ia tidak selalu menggambarkan kontras lokal atau ketajaman tepi objek.  

dynamic range rendah, Perbedaan piksel paling gelap dan paling terang kecil.  
dynamic range tinggi, Perbedaan piksel paling gelap dan paling terang besar.  

![image](/assets/image-20261011095448-7ca46978.png)

#### Histogram equalization

salah satu teknik untuk memperbaiki citra yang memiliki kontras rendah. Ide dasarnya adalah semua pixel harus didistribbusikan secara merata keseluruh renang nilai yang ada


histogram equalization dapat membantu citra dengan dynamic range rendah, dengan menyebarkan nilai intensitas agar kontras meningkat.
![image](/assets/image-20261011100225-2dd461d1.png)
![image](/assets/image-20261011100236-f014dbae.png)
![image](/assets/image-20261011100253-d493bf37.png)
CDF (Cumulative Distribution Function) merupakan penjumlahan probabilitas dari intensitas terendah sampai intensitas yang sedang dihitung.
![image](/assets/image-20261011100403-31584aae.png)

fungsi MATLAB yang mengubah citra jadi halus tanpa HDR: low-pass filter, terutama Gaussian Filter.Bilateral Filter:
imgaussfilt()  

#### Histogram Equalization pada Citra Berwarna (RGB)

Pada citra grayscale, histogram equalization dilakukan terhadap satu channel intensitas.
Sedangkan pada citra berwarna (RGB), terdapat tiga channel:
- R (Red): Intensitas merah (0–255).
- G (Green): Intensitas hijau (0–255).
- B (Blue): Intensitas biru (0–255).

![image](/assets/image-20261011101501-b01a49f1.png)

Mengapa equalization RGB dapat mengubah warna?  
Misalnya terdapat piksel:

RGB=(100,150,200)

Apabila masing-masing channel diproses dengan pemetaan histogram berbeda, perbandingan R:G:B bisa berubah. Akibatnya, warna asli piksel juga dapat berubah. 

Solusinya, konversi ke HSV

![image](/assets/image-20261011101604-9d930da0.png)

Dengan HSV, kita dapat meningkatkan kontras pada komponen V tanpa secara langsung mengubah Hue dan Saturation.  
Perlu dicatat bahwa V merupakan nilai maksimum channel RGB, bukan ukuran luminans atau persepsi kecerahan yang sempurna.  


#### Histogram specification

bertujuan mengubah distribusi intensitas citra agar mendekati distribusi histogram target tertentu.
