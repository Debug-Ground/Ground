/*
    * 카카오 로그인 인증 부
    *
    * @author 김민수
    * @version 1.0.0
    * @see 김득회, 이규환
    * 작성일 2021-08-09
*/

const express = require('express');
const router = express.Router();
const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy;
var userController = require('../controller/userController')

/*
    * @brief : 카카오 서버로 검증 부분
    * @date: 2021-08-09
    * @done(null, userInfo) : 카카오 서버로 부터 콜백 호출 받음, 첫번째 인자는 오류 값 부분이므로 null, 두번째는 전달한 정보(유저 정보)
    * clientID : 카카오 RESTful API 키 (나중에 득회껄로 바꿔야 함)
    * callbackURL : 카카오 디벨로퍼에서 설정한 Redirect URI
*/
passport.use('kakao', new KakaoStrategy({
    clientID: '3d5a0b62ceb1d002077ad980748700d4',
    callbackURL: '/auth/kakao/callback',
}, async (accessToken, refreshToken, profile, done) => {
    return done(null, profile._json);
}))

passport.serializeUser(function (user, done) {
    console.log('passport session save: ', user.id);
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log('passport session get id: ', id);
  done(null, id);
});


//웹
router.get('/updateUser', userController.updateUser)
router.get('/signUpUser',userController.signUp)
router.get('/findUser',userController.findUser)


//안드로이드
router.post('/findBodyUserInfo',userController.findBodyUserInfo)
router.post('/insertBodyUserInfo',userController.insertBodyUserInfo)
router.post('/updateBodyUserInfo',userController.updateBodyUserInfo)

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
}), (req, res) => {
    req.session.wid = req.user.id
    req.session.wName = req.user.properties.nickname
    req.session.wImage = req.user.properties.profile_image
    req.session.wEmail = req.user.kakao_account.email
    res.redirect('/auth/findUser')
});

router.get('/logout', (req,res)=> {
    req.logout();
    req.session.destroy(()=> {
        res.cookie('connect.sid', '', {maxAge:0});
        res.redirect('/')
    });
});

module.exports = router;