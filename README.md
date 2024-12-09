# esp-cam-car
## 材料：
1. 小车底盘（淘宝可买，大概29块钱）。
2. esp32-cam 开发板（大概38块钱）。
3. 2个L298n电机驱动器。
4. 一个5V电池组。

## 目标：
1. 可以在局域网内查看esp32-cam视频流，将摄像头画面显示在浏览器页面上。
2. 通过发送http请求可以控制小车的运动轨迹，如：前进后退、左转右转。
3. 将esp32-cam的视频与控制小车的按钮结合在同一个html页面上，便于在控制小车的时候可以有小车的视角。

## 使用方法：
1. 在终端中依次输入:
    1. npm install express 安装express包。
    2. npm install -i nodemon 全局安装nodemon包。（nodemon可以监视文件变化并自动重启node程序，用于调试代码）
    3. npm install -i pm2 全局安装pm2包。（pm2可以管理node程序，如：自动重启、日志管理、负载均衡等）
2. 在终端中输入：pm2 start app.js 以启动web程序。
  
