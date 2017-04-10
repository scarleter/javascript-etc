# javascript-etc
A repository for javascript execrise
## 自建fn函數，輸入n得出數組為n的數組，該數組的值為2-32
> * 構建過程中發現了一下問題：function串錯，多次修改之後range名字換了不知道，遞歸返回不了數據是因為自己沒有在所有分支上加上return，
> * 同時後來發現當n 大於 range的範圍的時候，會報錯，所以要判斷n應該小於等於range[1]-range[0]
> * 修改n判斷，加入n為undefined的情況

## 使用canvas将image转成base64编码
轉自[https://segmentfault.com/q/1010000000651225](https://segmentfault.com/q/1010000000651225)
> 要实现这个功能，要使用canvas来做，Canvas里面提供了一个toDataURL的接口，可以用这个接口获得图片的base64

> 所以思路是：
> * 获得canvas对象
> * 加载图片到canvas对象里面
> * 从canvas对象中获取base64数据

## google.visualization.linechart.html
It is a demo to show how to draw linechart and format the `hAxis`, `vAxis` and `tooltip`.Especially when you want to get something like '00:00' on the point of the line.