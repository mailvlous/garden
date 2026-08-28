---
title: Sequence and Series
draft: false
tags:
  - college
  - computer science
  - fourth semester
  - calculus 2
---


# Some of test

Sip, kita simpan dulu Deret Taylor dan Maclaurin. Mari kita fokus menyusun "senjata" untuk menghadapi soal-soal konvergen dan divergen.

Agar lebih mudah dipahami secara visual, ini adalah alur berpikir yang biasa digunakan untuk memilih uji yang tepat:

Berikut adalah *cheat sheet* lengkap dari semua uji kekonvergenan deret yang sudah kita bahas, disusun berdasarkan kapan kamu harus menggunakannya.

## 1. Uji Awal (Langkah Pertama)

Selalu gunakan uji ini di awal kalau suku deretnya terlihat tidak menuju nol.

* **Uji Suku ke-$n$ (Divergence Test)**
* **Bentuk:** $\sum a_n$
* **Aturan:** Cari $L = \lim_{n \to \infty} a_n$.
* **Hasil:** Jika $L \neq 0$, deret **Divergen**. Jika $L = 0$, uji **gagal/tidak ada kesimpulan** (kamu harus pakai uji lain).



## 2. Deret Khusus (Bentuk Baku)

Jika deretnya cocok dengan bentuk ini, kamu bisa langsung tentukan nasibnya tanpa panjang lebar.

### Deret Geometri
* **Bentuk:** $\sum a r^n$ (angka konstan dipangkatkan $n$)
* **Hasil:** **Konvergen** jika $|r| < 1$. **Divergen** jika $|r| \geq 1$.


### Deret-$p$
* **Bentuk:** $\sum \frac{1}{n^p}$ ($n$ dipangkatkan angka konstan)
* **Hasil:** **Konvergen** jika $p > 1$. **Divergen** jika $p \leq 1$.


### Deret Teleskopik
* **Bentuk:** Suku-sukunya berupa selisih (misal pecahan parsial) yang jika dijabarkan akan saling mencoret.
* **Cara:** Cari rumus jumlah sebagian $S_n$, lalu hitung $\lim_{n \to \infty} S_n$. Jika limitnya ada, ia konvergen ke nilai tersebut.



## 3. Uji untuk Deret Suku Positif (Pecahan, Polinomial, Logaritma)

Gunakan ini jika deret tidak memiliki tanda negatif dan bentuknya mirip-mirip deret-$p$ atau bisa diintegralkan.

### Uji Integral
* **Kondisi:** Fungsi $f(x)$ dari deret harus positif, kontinu, dan monoton turun.
* **Aturan:** Hitung integral tak wajar $\int_1^\infty f(x) \, dx$.
* **Hasil:** Deret dan integral memiliki nasib yang sama (sama-sama konvergen atau sama-sama divergen).


### Uji Banding (Direct Comparison Test)
* **Kondisi:** Bandingkan $a_n$ dengan deret baku $b_n$ (biasanya deret-$p$ atau geometri) yang lebih besar atau lebih kecil.
* **Hasil:** * Jika deret yang **lebih besar** konvergen $\Rightarrow$ deret kecil **Konvergen**.
* Jika deret yang **lebih kecil** divergen $\Rightarrow$ deret besar **Divergen**.




### Uji Banding Limit (Limit Comparison Test)
* **Kondisi:** Digunakan jika Uji Banding sulit dicari pertidaksamaannya.
* **Aturan:** Cari limit rasio kedua deret: $L = \lim_{n \to \infty} \frac{a_n}{b_n}$.
* **Hasil:** Jika $0 < L < \infty$ (angka positif berhingga), maka kedua deret bernasib sama (sama-sama konvergen atau divergen).



## 4. Uji Tingkat Lanjut (Untuk Faktorial dan Eksponensial)

Ini adalah "senjata berat". Sangat ampuh kalau kamu melihat ada $n!$ (faktorial), konstanta pangkat $n$ (seperti $2^n$), atau variabel di pangkat dan basis.

### Uji Hasil Bagi (Ratio Test)
* **Ciri khas:** Ada faktorial atau eksponensial campuran.
* **Aturan:** Cari $L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|$.
* **Hasil:** $L < 1$ (**Konvergen Mutlak**), $L > 1$ (**Divergen**), $L = 1$ (Uji **Gagal**).


### Uji Akar (Root Test)
* **Ciri khas:** Seluruh suku deret dipangkatkan $n$, misal $(...)^n$.
* **Aturan:** Cari $L = \lim_{n \to \infty} \sqrt[n]{|a_n|}$.
* **Hasil:** Aturannya sama persis dengan Uji Hasil Bagi.



## 5. Uji Deret Ganti Tanda (Ada minus plus)

Gunakan jika deret berayun antara positif dan negatif (biasanya ada $(-1)^n$).

### Uji Deret Ganti Tanda (Alternating Series Test)
* **Bentuk:** $\sum (-1)^n b_n$ di mana $b_n > 0$.
* **Hasil:** Deret **Konvergen** jika memenuhi DUA syarat:
1. Suku-sukunya mengecil ($b_{n+1} \leq b_n$).
2. $\lim_{n \to \infty} b_n = 0$.




### Kekonvergenan Mutlak vs Bersyarat
* Cek bentuk mutlaknya $\sum |a_n|$ (hilangkan tanda $(-1)^n$).
* Jika mutlaknya konvergen $\Rightarrow$ deret asli **Konvergen Mutlak**.
* Jika mutlaknya divergen, TAPI deret aslinya konvergen (lolos Uji Deret Ganti Tanda di atas) $\Rightarrow$ deret asli **Konvergen Bersyarat**.



---

Apakah kamu mau aku berikan satu soal acak, lalu kita coba tentukan bersama uji mana dari *cheat sheet* ini yang paling cocok dipakai untuk menyelesaikannya?


# With Example


## 1. Uji Suku ke-$n$ (Divergence Test)

* **Ciri:** Pangkat $n$ di pembilang sama atau lebih besar dari penyebut, atau bentuk limitnya jelas tidak menuju nol.
* **Contoh:** $\sum_{n=1}^{\infty} \frac{3n}{n+5}$
* **Alasan:** $\lim_{n \to \infty} \frac{3n}{n+5} = 3$. Karena $3 \neq 0$, deret ini pasti **Divergen**.

## 2. Deret Geometri

* **Ciri:** Ada konstanta yang dipangkatkan $n$. Tidak ada $n$ yang berdiri sendiri tanpa menjadi pangkat.
* **Contoh:** $\sum_{n=1}^{\infty} 5 \left(\frac{2}{3}\right)^n$
* **Alasan:** Rasio $r = \frac{2}{3}$. Karena $|r| < 1$, deret ini **Konvergen**.

## 3. Deret-$p$

* **Ciri:** Berbentuk pecahan dengan $n$ di bagian penyebut yang dipangkatkan angka konstan.
* **Contoh:** $\sum_{n=1}^{\infty} \frac{1}{n^3}$ dan $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n}}$
* **Alasan:** Pada $\frac{1}{n^3}$, $p=3 > 1$ (**Konvergen**). Pada $\frac{1}{\sqrt{n}} = \frac{1}{n^{1/2}}$, $p=\frac{1}{2} \leq 1$ (**Divergen**).

## 4. Deret Teleskopik

* **Ciri:** Suku-sukunya bisa dipecah menjadi pengurangan dua pecahan yang mirip berurutan (biasanya pakai pecahan parsial).
* **Contoh:** $\sum_{n=1}^{\infty} \left( \frac{1}{n} - \frac{1}{n+1} \right)$
* **Alasan:** Jika dijabarkan menjadi $(1 - \frac{1}{2}) + (\frac{1}{2} - \frac{1}{3}) + (\frac{1}{3} - \frac{1}{4}) + \dots$, suku tengahnya saling menghilangkan (coret), hanya menyisakan angka $1$ di awal. Deret **Konvergen**.

## 5. Uji Integral

* **Ciri:** Kamu melihat fungsi yang kalau diubah ke $f(x)$ punya "pasangan" turunan untuk substitusi integral. Sering kali ada elemen logaritma natural ($\ln n$) atau invers trigonometri.
* **Contoh:** $\sum_{n=2}^{\infty} \frac{1}{n \ln n}$
* **Alasan:** Kalau diintegralkan $\int \frac{1}{x \ln x} dx$, kita bisa pakai substitusi $u = \ln x$ dan $du = \frac{1}{x} dx$.

## 6. Uji Banding & Banding Limit (Comparison Tests)

* **Ciri:** Bentuknya mirip polinomial atas-bawah (rasional) atau campuran akar, tapi agak "kotor" karena ada tambahan konstanta.
### Contoh Uji Banding (DCT): $\sum_{n=1}^{\infty} \frac{1}{n^2 + 5}$
* *Alasan:* Cukup bandingkan dengan deret-$p$ yang lebih sederhana: $\frac{1}{n^2 + 5} < \frac{1}{n^2}$. Karena $\frac{1}{n^2}$ konvergen, deret ini juga **Konvergen**.


### Contoh Uji Banding Limit (LCT): $\sum_{n=1}^{\infty} \frac{3n+5}{\sqrt{n^4+1}}$
* *Alasan:* Agak susah membuktikan lebih besar/kecil. Ambil pangkat tertinggi atas dan bawah: $\frac{n}{\sqrt{n^4}} = \frac{n}{n^2} = \frac{1}{n}$. Karena $\sum \frac{1}{n}$ divergen, deret aslinya kemungkinan besar **Divergen**.



## 7. Uji Hasil Bagi (Ratio Test)

* **Ciri Paling Kuat:** Ada tanda seru alias **faktorial** ($n!$) atau campuran antara eksponensial dan polinomial.
* **Contoh:** $\sum_{n=1}^{\infty} \frac{2^n}{n!}$
* **Alasan:** Faktorial sangat mudah disederhanakan jika dibagi dengan suku berikutnya ($\frac{a_{n+1}}{a_n}$), sehingga $n!$ akan saling coret dengan $(n+1)!$.

## 8. Uji Akar (Root Test)

* **Ciri Paling Kuat:** Seluruh bagian suku (atas dan bawah) dibungkus oleh pangkat $n$.
* **Contoh:** $\sum_{n=1}^{\infty} \left( \frac{2n+1}{3n-5} \right)^n$
* **Alasan:** Dengan mengakarkan pangkat $n$ ($\sqrt[n]{a_n}$), pangkat $n$ di luar kurung akan hilang seketika, dan kamu tinggal mencari limit bagian dalamnya: $\lim_{n \to \infty} \frac{2n+1}{3n-5} = \frac{2}{3} < 1$ (**Konvergen Mutlak**).

## 9. Uji Deret Ganti Tanda (Alternating Series)

* **Ciri:** Selalu ada elemen $(-1)^n$, $(-1)^{n-1}$, atau $(-1)^{n+1}$ yang membuat tanda berayun plus, minus, plus, minus.
* **Contoh:** $\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$ (Deret Harmonik Ganti Tanda)
* **Alasan:** Tanda minusnya diabaikan dulu, lalu kita cek $\frac{1}{n}$. Karena sukunya makin mengecil ($\frac{1}{n+1} \leq \frac{1}{n}$) dan limitnya $\lim_{n \to \infty} \frac{1}{n} = 0$, deret ini **Konvergen**.

---

Apakah kamu ingin kita membedah satu contoh soal perhitungan komplit (dari awal sampai akhir) menggunakan salah satu uji di atas?