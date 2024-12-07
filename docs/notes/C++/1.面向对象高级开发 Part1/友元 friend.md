---
title: 友元 friend
createTime: 2024/12/07 23:43:30
permalink: /cpp/lgxu8t9f/
---


## 4.1 友元

![img](https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160906644.png)

友元：friend，修饰在函数定义之前，**表示这个函数可以直接拿该类对象的private数据**

<!--more-->

```cpp
 inline complex&
 __doapl(complex* ths, const complex& r)
 {
     ths->re += r.re;  //直接拿private的数据，不需要函数
     ths->im += r.im;
     return *ths;
 }
```

- 如上面所示，声明为friend之后，函数可以直接取到re和im，如果不被声明为friend，**只能通过调用real和imag函数来得到，效率较低**

## 4.2 相同 class 的 object 互为 friends

![img](https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/202307160907920.png)

```cpp
 {
     complex c1(2, 1);
     complex c2;
     c2.func(c1);
 }
```

相同class的不同对象互为友元，即可以直接取另一個 object 的 private data