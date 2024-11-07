const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likesCount: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments',
    }
}, { timestamps: true });

const CommentsSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);
const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = { User, Post, Comments };

