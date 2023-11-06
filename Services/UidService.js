//const uidMap = new Map();
const jwt = require('jsonwebtoken')
const secretkey = 'ShortURL:$1090'

function setUid(uid) {
    //uidMap.set(id,uid) 
  return  jwt.sign({
        id: uid._id,
        email: uid.Email,
        password:uid.Password,
        name: uid.Name,
    },secretkey)
}
function getUid(token) {
    if(!token) return null;
    try{
    return jwt.verify(token,secretkey);
    } catch(e) {
        return null;
    }
}

module.exports = {
    setUid, getUid
}
