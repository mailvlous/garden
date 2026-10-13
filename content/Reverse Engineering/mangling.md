---
tags:
  - mangling
  - reverse engineering
  - engineering
  - ctf
title: mangling
draft: false
published: 2026-10-13
---

mangling is a general term for data transformation, not encryption by itself. In reverse engineering, you need to identify the transformations and undo them in reverse order to recover the original input.

#### example 1

```
bVar1 = local_16[2];
local_16[2] = local_16[4];
local_16[4] = bVar1;
```
or
```
bVar1 = local_16[2];
local_16[2] = local_16[4];
local_16[4] = bVar1;
```



#### example 2

```
local_16 = 0;
local_12 = 0;
puts("Ready to receive your license key!\n");
read(0,&local_16,5);
uVar1 = local_16;
uVar2 = local_16._1_1_;
local_16._0_2_ = CONCAT11(local_16._2_1_,(undefined1)local_16);
local_16._3_1_ = SUB41(uVar1,3);
local_16._0_3_ = CONCAT12(uVar2,(undefined2)local_16);
puts("Checking the received license key!\n");
iVar3 = memcmp(&local_16,s_jwcfd_00104010,5);
  if (iVar3 == 0) {
    FUN_001012a9();
                    /* WARNING: Subroutine does not return */
    exit(0);
  }
  puts("Wrong! No flag for you!");
                    /* WARNING: Subroutine does not return */
  exit(1);
```

or 

```
uVar1 = local_16;
uVar2 = local_16._1_1_;

local_16._0_2_ = CONCAT11(local_16._2_1_,(undefined1)local_16);
local_16._3_1_ = SUB41(uVar1,3);
local_16._0_3_ = CONCAT12(uVar2,(undefined2)local_16);
```
ghidra notation:

| Expression       | Meaning                                        |
| ---------------- | ---------------------------------------------- |
| `local_16._1_1_` | Read 1 byte starting at offset 1               |
| `local_16._2_1_` | Read 1 byte starting at offset 2               |
| `local_16._0_2_` | Write 2 bytes starting at offset 0             |
| `CONCAT11(a,b)`  | Combine two 1-byte values into 2 bytes         |
| `CONCAT12(a,b)`  | Combine 1 byte and 2 bytes into 3 bytes        |
| `SUB41(a,3)`     | Extract 1 byte at offset 3 from a 4-byte value |

in c:
```
uint8_t input[] = "jcwfd";

uint8_t original[4] = {
    input[0], input[1], input[2], input[3]
};

// uVar2 = local_16._1_1_
uint8_t temp = input[1];

// CONCAT11(local_16._2_1_, (undefined1)local_16)
input[1] = input[2];

// SUB41(uVar1, 3)
input[3] = original[3];

// CONCAT12(uVar2, (undefined2)local_16)
input[2] = temp;
```
