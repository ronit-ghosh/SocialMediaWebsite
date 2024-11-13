const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId
 
const User = new Schema({
    email:String,
    password:String,
    username:String,

})

const UserInfo = new Schema({
    email:String,
    username:String,
    followers:[{type:ObjectId,ref:'users'}],
    following:[{type:ObjectId,ref:'users'}]
})

const UserModel = mongoose.model('users',User)
const UserInfoModel = mongoose.model('userInfo',UserInfo)
module.exports = {
    UserModel,
    UserInfoModel
}
