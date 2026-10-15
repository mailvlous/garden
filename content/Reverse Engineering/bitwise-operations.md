---
tags:
  - bitwise
  - operation
  - reverse engineering
  - engineering
  - ctf
title: bitwise operations
draft: false
published: 2026-10-15
---

- Bit adalah satu digit biner, nilainya hanya 0 atau 1.
- Byte terdiri dari 8 bit.
- Binary (basis 2) menggunakan angka 0 dan 1.
- Decimal (basis 10) menggunakan angka 0–9.
- Hexadecimal (basis 16) menggunakan angka 0–9 dan A–F.

example:
| Decimal | Binary     | Hexadecimal |
| ------- | ---------- | ----------- |
| 13      | `00001101` | `0x0D`      |

##### hex to bin
0xA5  
A = 1010  
5 = 0101  
result = 10100101  

##### bin to hex
10110110

1011 = B  
0110 = 6  
result = 0xB6

##### and, &
```
int a = 12;
int b = 10;

int hasil = a & b;
```

12 = 1100  
10 = 1010  
hasil = 1000
