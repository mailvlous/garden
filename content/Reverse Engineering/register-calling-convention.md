---
tags:
  - register
  - calling convention
  - assembly
  - reverse engineering
  - ctf
  - engineering
title: register, calling convention
draft: false
published: 2026-10-12
---

- RAX	Perhitungan dan nilai return fungsi
- RBX	Penyimpanan nilai sementara
- RCX	Counter, argumen, atau nilai sementara
- RDX	Argumen, operasi aritmatika, atau nilai sementara
- RSI	Argumen fungsi atau alamat data
- RDI	Argumen fungsi atau alamat data
- RSP	Alamat posisi teratas stack
- RBP	Referensi stack frame, jika digunakan sebagai frame pointer
- R8–R15	Register umum tambahan
- RIP	Alamat instruksi yang akan dieksekusi berikutnya

Argumen 1 → RDI  
Argumen 2 → RSI  
Argumen 3 → RDX  
Argumen 4 → RCX  
Argumen 5 → R8  
Argumen 6 → R9  

Return value → RAX
