const {getUid} = require('../Services/UidService')

function userAuth(req,res,next) {
     let uid = req?.cookies?.uid;

     if(!uid) console.log('errrror')//res.redirect('/');
     let isvaliduser = getUid(uid);
     
     if(!isvaliduser) res.redirect('/');

    var userid = isvaliduser.id
     console.log('user iddddd==',userid);
     req.userid = userid;
    next();
}

module.exports = userAuth
