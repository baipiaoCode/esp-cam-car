/* 导入库文件 */
const express = require('express');
const path = require('path');
const app = express();
const port = 80;


/* 设置需要使用的静态资源 */
app.use(express.static(path.join(__dirname, '')));

// 使用内置的中间件来解析 JSON 数据
// 使用了这个中间件后，就可以在请求体中直接获取 JSON 数据了，不然获取到客户端的数据是undefined
app.use(express.json());

// 添加子路由
// app.use('/api', require('./routes/api'));

/* 路由 */
// 登陆页
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok');
})


/* 启动服务器 */
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
