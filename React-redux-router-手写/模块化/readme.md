## 模块化的发展历程
1. 函数时期
浏览器脚本
```js
    function fn() {

    }
```

2. 命名空间
模块化的思路雏形初显
```js
    var student = {
        name: 'xizhou',
        running() {

        }
    }
```

3. 闭包的出现
```js
    (function(global) {
        var name = 'xizhou'

        function getname() {
            
        }

        global.student = { name, getName }
    })(window)
```

```js
    module: {
        exports: {

        }
    }

    (function(module, exports) {
        var name = 'xizhou'

        function getname() {
            
        }

        module.exports = { name, getName }
    })(module, module.exports)
```

cjs 本质：值的拷贝，在浏览器里面是不适用的


## AMD
## CMD