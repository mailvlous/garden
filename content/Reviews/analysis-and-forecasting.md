---
tags:
title: Analysis and Forecasting of Cryptocurrency Markets Using Bayesian and LSTM-Based Deep Learning Models
draft: false
published: 2026-10-18
---

> purpose for statistic and probabilistic assignment

### summary
this paper discuss about forecast/using data analysis for Bitcoin prices over 15-day collected from Yahoo Finance  horizon by using 2 predictive modelling predictions. The Bayesian model provided probabilistic insights. On the other hand, the LSTM model provided temporal dependencies.

#### bayesian state-space method

![image](/assets/image-20261018095446-978058ed.png)
Bagaimana kondisi harga berubah?  
Persamaan (1) memperlihatkan komponen-komponen pembentuk kondisi harga.  

![image](/assets/image-20261018095538-0fb5b487.png)
Distribusi normal  
Persamaan (2) menyatakan bahwa kondisi harga tersebut merupakan variabel acak dengan distribusi Normal.  

![image](/assets/image-20261018095737-19de1b2a.png)
Menghubungkan kondisi tersembunyi dan pengamatan aktual

Sampai persamaan (3), kita sudah punya dua komponen:
1. Transition model: bagaimana kondisi harga tersembunyi berubah dari hari ke hari.
2. Observation model: bagaimana kondisi tersembunyi tersebut berkaitan dengan harga yang diamati.

Tetapi kita belum mengetahui semua parameter model dengan pasti, misalnya koefisien fitur dan standar deviasi gangguan.  


Di sinilah peneliti menggunakan inferensi Bayesian.  
![image](/assets/image-20261018100342-32b0629a.png)

Menarik kesimpulan dengan memperbarui distribusi probabilitas menggunakan Teorema Bayes.

Inferensi bayesian:
Prior: Sebelum melihat data, kita memiliki asumsi awal mengenai probabilitas harga naik.  
Likelihood: Kita memperoleh bukti berupa data historis kenaikan dan penurunan harga.  
Posterior: Kita memperbarui distribusi probabilitas parameter berdasarkan data tersebut.  

Dalam Bayesian State-Space Model, peneliti tidak mengetahui secara pasti:
![image](/assets/image-20261018101105-0753618c.png)

#### LSTM
Long Short-Term Memory (LSTM) merupakan metode deep learning yang digunakan untuk mempelajari pola data deret waktu (time series). Dalam penelitian Biki et al. (2025), LSTM digunakan untuk memprediksi harga Bitcoin berdasarkan data historis selama 60 hari sebelumnya.

Model LSTM digunakan sebagai pembanding terhadap Bayesian State-Space Model. Berbeda dengan pendekatan Bayesian yang secara eksplisit menggunakan distribusi probabilitas untuk mengukur ketidakpastian, LSTM pada penelitian ini menghasilkan prediksi titik harga Bitcoin.

Konsep probabilitas pada implementasi LSTM terutama berkaitan dengan penggunaan dropout, yaitu mekanisme penonaktifan unit jaringan secara acak selama pelatihan untuk mengurangi overfitting.

#### Evaluation Metrics

evaluated by the two widely used regression metrics named Mean Squared Error(MSE) and Mean Absolute Error(MAE)
MSE calculates the average of the squared differences between predicted and actual values by giving a higher weight to the larger errors and makes it suitable for identifying models that produce consistently accurate forecasts.   
On the other hand, MAE can calculate the average absolute difference between the predicted and actual values and offers a more interpretable error metric comparatively less sensitive to outliers.  
Both of the metrics were computed separately for training and testing datasets to assess model accuracy and generalization capability. The evaluation approach was applied for both the Bayesian and LSTM models for comparative analysis. The scores are shown in the table.
