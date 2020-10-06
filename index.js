const express = require('express');  // express 모듈 가져오는 것
const app = express(); // function을 통해서 새로운 express 앱을 만든다
const port = 5000;  // back server port <- 아무 숫자나 ok

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:1234@bolierplate.g2jki.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false  // 에러 방지
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));



app.get('/', (req, res) => res.send('Hello World!')); // root directory에 오면 hello world가 출력되게 해준다

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // port 5000에서 실행되도록 한다