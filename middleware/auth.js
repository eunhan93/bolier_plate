const { User } = require('../models/User');

let auth = (req, res, next) => {
    // 인증 처리
    // 쿠키에서 토큰 가져옴 => 복호화 => 유저 인증

    // 쿠키에서 토큰 찾기
    let token = req.cookies.x_auth;

    //복호화
    User.find


}

module.exports = { auth };