---
tags:
  - reverse engineering
  - ctf
  - engineering
title: function, frame, stack
draft: false
published: 2026-10-11
---

modules can really be helpful for reverse engineering process(read man/docs page)  

#### functions
initially, function can be reverse-engineerd in isolation. Later, you can build up an understanding of how they fit together

function are represented as a graph  
each block is a set of instructions that will execute one after the other

#### the stack

the stack is a region of memory used to store local variables and call context

elf sections:
- .data: used for preinitialized global writable data(such as global arrays with initial values)
- .rodata: read only data(such as string constants)
- .bss: used for uninitialized global writable data(such as global arrays without initial values)  

##### the stack grows backwards

when you push to the stack, rsp is decreased by 8.  
when you pop to the stack, rsp is increased by 8.  
consider:
```
push 0x41; push 0x42; push 0x43
```
![image](/assets/image-20261010235444-16bae23a.png)

##### stack: initial layput:

The stack starts out storing (among some other things) the environment variables and the program arguments. For example:
```
$ env
USER=yans
HOME=/home/yans
PWD=/home/yans
$ ./program hello world
hello world
```

![image](/assets/image-20261010235622-a58d3e67.png)

##### stack, calling a function

when a function is called, the address that the called funciton should return to implicityly pushed onto the stack  
this return address is implicitly popped when the function return

##### the stack, function frame setup

every function sets up its stack frame, it has:  
- stack pointer(rsp): point to the leftmost side of the stackframe
- baase pointer(rbp): point to the rightmost side of the stackframe.

1. save off the callers base pointer
2. set the current staack pointer as base pointer
3. "allocate" space on the stack(substract from the stack pointer)
