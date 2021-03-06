# Vue.js
## 框架与库之间的区别
* 框架：完整的技术解决方案，对项目的侵入性大，想换很难
* 库：提供某一小功能，对项目侵入性小，容易切换
* 库为兼容，框架为DOM与数据
***
## Vue.js有一个宗旨：减少不必要的DOM操作
***
首先在html页面中引用vue.js文件

```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
***
## 作为一个MVVC框架:分为M（model），V（View），VM（ViewModel)
* M：保存的是每个页面中的独立数据
* VM：调度者，分割了M和V。每当V层想要获取保存的数据的时候，都要有VM做中间的处理
* V项目中的HTML结构
![MVVM存储数据](images/MVVM存取数据.png)
举个例子：

```
var vm = new Vue({  //创建一个Vue实例
    el: '#app',  //表示Vue实例要控制的区域
    data: {  //存放el中要用到的数据
        msg: '欢迎学习Vue'  //用Vue指令可以把数据渲染到页面上
    }
})
```

以上代码中，data就是MVVM中的M，new出来的对象就是VM，html页面就是V
***
## 指令
* `v-cloak`能够解决插值表达式闪烁问题。在样式中添加`[v-cloak]{display:none;}`，这样在没渲染完全时就不会显示有v-cloak的元素，就不会出现"`{{msg}}`"
* `v-text`没有闪烁问题。与插值表达式不同，插值表达式可以在前后添加任意html值，而`v-text`只能用msg覆盖掉元素内的所有值
* `v-html`可以将数据编译为html。如：`<h1>H1</h1>`会返回输出H1。
* `v-bind`是vue中用于绑定属性的指令。

  ```
    <input type="button" value="button" v-bind:title="mytitle">
  ```
  `v-bind`将mytitle值绑到title属性中，这里mytitle可看作为变量，可以进行变量操作。  
  如`v-bind:title="mytitle+'123'"`会输出"mytitle"与"123"加起来的值。（简写形式`:title`直接用`:`代替`v-bind:`）
* `v-on`提供事件绑定机制，缩写是`@`。

  ```
    v-on:click="show"
  ```
  在Vue对象的`methods`中定义方法事件。（`methods`中定义了实例对象所有可用的方法）。


  ## 事件修饰符  
  * 可以通过事件后加`.stop`阻止冒泡（只阻止自己身上冒泡行为触发，并不会真正阻止冒泡）。如：`@click.stop="btn"`

  * `.prevent`阻止默认行为
  * `.capture`实现捕获触发事件的机制
  * `.self`只有点击当前元素的时候才能触发事件处理元素
  * `.once`只触发一次

## 数据，方法
在VM实例中，如果想要获取`data`上的数据，或者想要调用`methods`中的方法，通过this来访问，this就表示我们new出来的实例对象。


## `v-model`
* `v-bind`只能实现数据的单向的数据绑定,从M自动绑定到V，无法实现数据的双向绑定。
* `v-model`指令，可以实现表单元素和model中数据的双向绑定。
* 注意：`v-model`只能运用在表单元素中。

## `v-for`
1. 迭代数组

    ```
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    ```
    

3. 迭代对象数组

    ```
    <ul>
      <li v-for="(item, i) in list">索引: {{ i }} --- 姓名: {{ item.name }} --- 年龄: {{ item.age }}</li>
    </ul>
    ```

2. 迭代对象中的属性
  
    ```
    <div v-for="(val, key, i) in userInfo">{{ val }}---{{ key }}---{{ i }}</div>
    ```

4. 迭代数字

    ```
    <p v-for="count in 10">{{ count }}</p>
    ```

    注意：in后面可以放普通数组，对象数组，对象，数字。如果v-for迭代数字的话，从1开始迭代。

* `v-for`循环中key属性的使用
  * 注意：v-for循环的时候，key属性只能使用number或者string
  * 注意：key在使用的时候，必须使用v-bind属性绑定的形式，指定key的值

## `v-if`和`v-show`
  * 特点：
    * v-if每次都会重新创建和删除元素
    * v-show不会进行DOM的创建和删除操作，只是切换了元素的display:none样式
  * 消耗
    * v-if有较高的切换性能消耗
    * v-show有较高的初始渲染消耗
  * 使用场景
    * 如果元素涉及到频繁的切换，最好不要用v-if
    * 如果元素永远不会被显示出来被用户看到，推荐使用v-if