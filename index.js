const express = require('express');  // express 모듈 가져오는 것
const app = express(); // function을 통해서 새로운 express 앱을 만든다
const port = 5000;  // back server port <- 아무 숫자나 ok
const bodyParser = require('body-parser'); // 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 하는 것
const { User } = require('./models/User');

const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
const { mongoURI } = require('./config/key');
mongoose.connect(config.mongoURI, {
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false  // 에러 방지
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));



app.get('/', (req, res) => res.send('Hello World! hihi')); // root directory에 오면 hello world가 출력되게 해준다

// 회원가입
app.post('/register', (req, res) => {
    // 회원 가입 시 필요한 정보들을 client에서 가져와 데이터 베이스에 넣는다
    const user = new User(req.body);
    //req.body <- 이렇게 쓸 수 있는 이유가 body-parser

    user.save((err, userInfo) => {
        if (err) return res.json({success : false, err})
        return res.status(200).json({
            success : true
        })
    });
    // .save() <- mongoDB에서 오는 메소드
    // status(200) <- 성공
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // port 5000에서 실행되도록 한다



// SSH = Secure Shell