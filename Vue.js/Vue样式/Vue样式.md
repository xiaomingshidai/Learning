## Vue样式
四种方法:
1. 直接绑定一个数组

    ```
    <h1 :class="['red', 'thin']">这是一个h1标题</h1>
    ```

2. 数组中使用三元表达式

    ```
    <h1 :class="['red', 'thin', isactive?'active':'']">这是一个h1标题</h1>
    ```

3. 数组中嵌套对象
    
    ```
    <h1 :class="['red', 'thin', {'active': isactive}]">这是一个h1标题</h1>
    ```

4. 直接使用对象

    ```
    <h1 :class="{red: 'true', italic: 'true', active: 'false}, thin: 'false">这是一个h1标签</h1>
    ```

## 使用内联样式
1. 直接在元素上通过`:style`的形式,书写样式对象

    ```
    <h1 :style="{color: 'red', 'font-size': '50px'}">这是一个h1标题</h1>
    ```

2. 将样式对象,定义到`data`中,并直接引用到`:style`中
    * 在data上定义样式:

        ```
        data: {
            h1StyleObj: {
                color: 'red',
                'font-size': '40px',
                'font-weight': '200'
            }
        }
        ```
    * 在元素中,通过属性绑定的形式,将样式对象应用到元素中

        ```
        <h1 :style="h1StyleObj">这是一个h1标题</h1>
        ```

3. 在`:style`中通过数组,引用多个`data`上的样式对象
    * 在data上定义样式

        ```
        data: {
            h1StyleObj1: {
                color: 'red',
                'font-size': '40px',
                'font-weight': '200'
            }
            h1StyleObj2: {
                'font-style': 'italic'
            }
        }
        ```

    * 在元素中,通过属性绑定的样式,将样式对象应用到元素中

        ```
        <h1 :style="[h1StyleObj1, h1StyleObj2]">这是一个h1标题</h1>
        ```