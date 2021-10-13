var express = require('express');
var userDAO = require('../model/userDAO');
 
function signUp(req, res, next) {
    var parameters = {
        "wid": req.session.wid,
        "wName" : req.session.wName,
        "wImage" : req.session.wImage,
        "wEmail": req.session.wEmail
    }

    userDAO.insert_userInfo(parameters).then(function (db_data){
        console.log(db_data)
        console.log("회원가입 성공");
        res.redirect('/')
    }).catch(err=>res.send("<script>alert('err')</script>"));

}

function updateUser(req, res, next) {

    var parameters = {
        "wid": req.session.wid,
        "wName" : req.session.wName,
        "wImage" : req.session.wImage,
        "wEmail": req.session.wEmail
    }

    userDAO.update_userInfo(parameters).then(function (db_data){
        console.log(db_data)
        console.log("업데이트 성공");
        res.redirect('/')
      }).catch(err=>res.send("<script>alert('err')</script>"));

}

function findUser(req, res, next) {
    var parameters = {
        "wid": req.session.wid
    }

    userDAO.select_userFind(parameters).then(function (db_data){
        if(db_data.length == 0){
            console.log('존재하지 않는 회원입니다. 회원가입 라우터로 이동합니다.');
            res.send('<script>location.href ="/auth/signUpUser"</script>')
        } else {
            console.log('이미 존재하는 회원입니다.')
            res.send('<script>location.href ="/auth/UpdateUser"</script>')
        }
    }).catch(err=>res.send("<script>alert('err')</script>"));

}

function insertBodyUserInfo(req, res, next) {
    var parameters = {
        "wid": req.body.uid,
        "wName" : req.body.realname, // 카카오 이름
        "wImage" : req.body.uthumbnailImageUrl,
        "wEmail": req.body.uemail
    }

    var successData = {
        message : "1"
    }

    console.log("name: " + req.body.realname)

    var sendJsonData = JSON.parse(JSON.stringify(successData))

    userDAO.insert_userInfo(parameters).then(function (db_data){
        console.log(db_data)
        res.json(sendJsonData)
    }).catch(err=>res.send("<script>alert('err')</script>"));
}

function selectRegularDate(req, res, next){
    var parameters = {
        "wid": req.body.wid
    }
    userDAO.select_RegularDate(parameters).then(function(db_data){
        var data = {
            message : "응답상태 성공였습니다",
            result : db_data
          }
          var jtest = JSON.stringify(data)
          var jsonOb = JSON.parse(jtest)
    
          res.send(jsonOb)
    }).catch(err=>res.send("<script>alert('err')</script>"));

}

function updateBodyUserInfo(req, res, next){
    var parameters = {
        "wName" : req.body.unickname,
        "wImage" : req.body.uthumbnailImageUrl,
        "wEmail": req.body.uemail
    }

    var successData = {
        message : "1"
    }

    var sendJsonData = JSON.parse(JSON.stringify(successData))

    userDAO.update_userInfo(parameters).then(function (db_data){
        console.log(db_data)
        console.log("업데이트 성공");
        res.json(sendJsonData)
    }).catch(err=>res.send("<script>alert('err')</script>"));

}

function findBodyUserInfo(req, res, next){
    var parameters = {
        "wid": req.body.uid,
    }

    var successData = {
        message : "1"
    }

    var signUpData = {
        message : "0"
    }
    var sendJsonData = JSON.parse(JSON.stringify(successData))
    var sendJsonData1 = JSON.parse(JSON.stringify(signUpData))

    userDAO.select_userFind(parameters).then(function (db_data){
        console.log(db_data)
        if(db_data.length == 0) {
            console.log('존재하지 않는 회원입니다.')
            res.json(sendJsonData1)
        }else{
            console.log('이미 존재하는 회원입니다.')
            res.json(sendJsonData)
        }
    }).catch(err=>res.send("<script>alert('err')</script>"));

}

function verificationUserInfo(req, res, next) {
    console.log("응답받은 파라메타" + req.body)

    var parameters = {
        "wid": req.body.uid,
        "wName" : req.body.unickname,
        "wImage" : req.body.uthumbnailImageUrl,
        "wEmail": req.body.uemail
    }

    var successData = {
        message : "1"
    }

    var signUpData = {
        message : "0"
    }


    var sendJsonData = JSON.parse(JSON.stringify(successData))
    var sendJsonData1 = JSON.parse(JSON.stringify(signUpData))

    userDAO.select_userFind(parameters).then(function (db_data){
        console.log(db_data)

        if(db_data.length == 0){
            console.log('존재하지 않는 회원입니다. 회원가입을 진행합니다.')
            userDAO.insert_userInfo(parameters).then(function (db_data){
                console.log(db_data)
                res.json(sendJsonData1)
            }).catch(err=>res.send("<script>alert('err')</script>"));
        }else{
            console.log('이미 존재하는 회원입니다.')
            userDAO.update_userInfo(parameters).then(function (db_data){
                console.log(db_data)
                console.log("업데이트 성공");
                res.json(sendJsonData)
            }).catch(err=>res.send("<script>alert('err')</script>"));
        }
    }).catch(err=>res.send("<script>alert('err')</script>"));
}


module.exports = {
    signUp,
    findUser,
    updateUser,
    verificationUserInfo,
    findBodyUserInfo,
    insertBodyUserInfo,
    updateBodyUserInfo,
    selectRegularDate
}