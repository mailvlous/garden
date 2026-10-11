---
tags:
  - digital image processing
  - image
  - college
  - semester 5
title: Week 4, part 1
draft: false
published: 2026-10-11
---

### Operasi dasar citra digital
Kategori operasi citra:
- operasi titik, tergantung pada nilai input(aritmatika dan logika)
- operasi local, (konvolusi dan morfologi)
- operasi global, (otsu treshholding)

#### Operasi aritmatika
- penambahan +50 cahaya pada suatu citra
- dimana setiap px ditambah nilainya
- pengurangan juga sama

0-255, gabisa kurang atau lebih dari 255

##### Penjumlahan

Fungsi: Meningkatkan intensitas atau kecerahan citra.  
Nilai di atas 255 perlu ditangani, misalnya dengan saturation (dibatasi menjadi 255).

##### Pengurangan

Fungsi: Mendeteksi perbedaan antara dua citra, misalnya perubahan objek pada dua frame.  
Nilai negatif dibatasi menjadi 0 jika menggunakan saturation.

##### Perkalian

Fungsi: Memodifikasi intensitas, melakukan masking, atau mengatur kontras.

##### Pembagian

Fungsi: Normalisasi intensitas dan koreksi pencahayaan.

#### max and min

Max, Mengambil nilai intensitas piksel yang paling besar dari dua citra.  
Kegunaan:
- Mempertahankan piksel yang lebih terang.
- Menggabungkan bagian terang dari dua citra.
- Menonjolkan objek terang dibandingkan latar gelap.

Min, Mengambil nilai intensitas piksel yang paling kecil dari dua citra.
Kegunaan:
- Mempertahankan piksel yang lebih gelap.
- Menggabungkan bagian gelap dari dua citra.
- Menonjolkan objek gelap dibandingkan latar terang.


#### Inverse citra
adalah operasi pengolahan citra digital yang membalik nilai intensitas setiap piksel sehingga bagian terang menjadi gelap dan bagian gelap menjadi terang.

Untuk citra grayscale 8-bit (0–255):  
result = 255 - pixel  

![image](/assets/image-20261011082820-9821c015.png)

1. Membuat citra negatif, seperti negatif fotografi.
2. Memperjelas detail tertentu, terutama pada citra yang dominan gelap.
3. Membalik foreground dan background, misalnya tulisan hitam menjadi putih.
4. Membantu analisis citra medis, apabila representasi negatif membuat struktur lebih mudah diamati.


#### Operasi logika

- NOT → Membalik seluruh bit.
- AND → Menghasilkan 1 jika kedua bit bernilai 1.
- OR → Menghasilkan 1 jika minimal salah satu bit bernilai 1.
- XOR → Menghasilkan 1 jika kedua bit berbeda.

![image](/assets/image-20261011083355-f2655233.png)
