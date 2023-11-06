const UserModel = require('../Models/User');
const { getUid, setUid } = require('../Services/UidService')
//const {v4 : uuidv4} = require('uuid');
async function handleUserSignup(req, res) {
    const { Name, Email, Password } = req.body;
    console.log('body=', req.body);
    await UserModel.create({
        Name: Name, Email: Email, Password: Password
    });
    res.render('Login');
}

function handleSignupPage(req,res) {
    let token = req.cookies?.uid;
    let user = getUid(token);
    if(user) return res.redirect('/SSR');
    return res.render('SignUp',{});
}

async function handleLogin(req, res) {
    const { Email, Password } = req.body;
    const user = await UserModel.findOne({
        Email: Email,
        Password: Password
    });
    if (!user) return res.redirect('/');
    //let uid = uuidv4()
    //setUid(uid,user);
    let token = setUid(user);
    res.cookie('uid', token)
    res.redirect('/SSR');
}
function LoginCheck(req, res) {

    let token = req?.cookies?.uid;
    if (!token) return res.render('Login', {});
    let user = getUid(token);
    if (!user) return res.render('Login', {});
    return res.redirect('/SSR');
}

function LogoutUser(req, res) {

    res.clearCookie('uid');
    return res.redirect('/');
}
function HandleProfile(req, res) {
    let token = req?.cookies?.uid;
    if(!token) return res.redirect('/')
    let user = getUid(token);
    if(!user) return res.redirect('/')
    return res.render('Profile',{Email:user.email,Password:user.password,Name:user.name});
}

async function HandleSaveProfile(req,res) {
    let token = req?.cookies?.uid;
    let user = getUid(token);
    let userid= user.id;
    const {Name, Email, Password} = req.body;
    await UserModel.updateOne({
        _id:userid
    },{
        Name: Name,Email:Email, Password: Password
    })
    let updatedUser = { _id: userid,
        Email: Email,
        Password:Password,
        Name: Name,}
    token = setUid(updatedUser)
    res.cookie('uid', token)
    return res.redirect('/SSR')
}

module.exports = {
    handleUserSignup, handleLogin, LoginCheck, LogoutUser,HandleProfile,HandleSaveProfile,handleSignupPage
}
