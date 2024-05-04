# 如果要在单页面应用中完成组件的切换，需要实现下面的两个功能：

- 1. 根据不同的页面地址，展示不同的组件（核心）
- 2. 完成无刷新的地址切换

如果实现了以上两个功能的插件，称之为路由


# path-to-regexp
第三方库：path-to-regexp，用于将一个字符串转为正则（路径正则，path regexp）

**创建一个match对象**

# history対象

该对象提供了一些方法，用于控制或监听地址的变化。
该对象**不是**window.history，而是一个抽离的对象，它提供统一的API接口，封装了具体的实现

- createBrowserHistory      产生的控制浏览器真实地址的 history 对象
- createHashHistory         产生的控制浏览器hash的history对象
- createMemoryHistory       产生的控制内存中地址数组的对象

history 对象的共同特点：维护了一个地址栈


# 第三方库 history

**以下三个函数，虽然名称和参数不同，但返回的对象结构（history）完全一致**

## createBrowserHistory
创建一个使用浏览器History Api的history对象

## createHashHistory
创建一个使用浏览器hash的history对象

## createMemoryHistory
創建一个使用内存中的地址桟的history対象 