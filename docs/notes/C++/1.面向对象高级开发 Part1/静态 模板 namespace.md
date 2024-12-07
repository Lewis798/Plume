---
title: 静态 模板 namespace
createTime: 2024/12/07 23:43:30
permalink: /cpp/e5mjctfx/
---

## 8.1 static

对于**非静态**的函数和数据：

非静态的成员函数通过`this`指针来处理不同的数据（一份函数--->多个对象）

<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-02/image-20230731154446361.png" style="zoom: 50%;" />

<!--more-->

<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731154548833.png" alt="image-20230731154548833" style="zoom: 67%;" />



对于**静态**的函数和数据：

==静态函数没有`this`==，不能处理一般的数据，只能处理静态的数据



例1：

```cpp
class Account
{
public:
	static double m_rate;  //静态变量的声明
	static void set_rate(const double& x) { m_rate = x; } //静态函数
};
double Account::m_rate = 0; //静态变量的定义 一定要有

int main()
{
    //调用静态函数法1——by class name
	Account::set_rate(5.0);
    //调用静态函数法2——by object
	Account a;
	a.set_rate(7.0); //静态函数与a无关/无this
}

```

例2：设计模式 `Singleton`（单体）

<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731163117925.png" alt="image-20230731163117925" style="zoom:67%;" />

- 构造函数放在private中，外界无法调用
- 设计了`getInstance`<u>静态函数</u>，来生成并返回唯一的一份



## 8.2 template

### 8.2.1 class template 类模板

<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731164807992.png" style="zoom:67%;" />

- `T`来代替某种类型
- 使用时`classname<type1> xxx`，编译器会把`T`全部替换为`type1`



### 8.2.2 function template 函数模板

<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731164908165.png" alt="image-20230731164908165" style="zoom: 33%;" />

比较函数——任何类型都可以进行比较；`T`来代替某种类型

应用时，不需要写某种类型——编译器自己会推导

## 8.3 namespace

对东西进行一个包装（不一定要一次性全写在一起，可分开包装在一起）

```cpp
namespace name
{
...    
}
```

1. 用法一：using directive

   ```cpp
   #include <iostream>
   using namespace std; //直接把包装全打开
   int main()
   {
   	cin << ...;
   	cout << ...;
   	return 0;
   }
   ```

2. 用法二：using declaration

   ```cpp
   #include <iostream>
   using std::cout; //只打开一条
   int main()
   {
   	std::cin << ...; //没打开要写全名
   	cout << ...;
   	return 0;
   }
   ```

3. 用法三：都写全名

   ```cpp
   #include <iostream>
   int main()
   {
   	std::cin << ; 
   	std::cout << ...;
   	return 0;
   }
   ```

