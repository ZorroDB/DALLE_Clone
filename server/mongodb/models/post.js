import mongoose, { mongo } from "mongoose";

const Post = new mongoose.Schema({
    name: { typeof: String, required: true },
    prompt: { typeof: String, required: true },
    photo: { typeof: String, required: true },
});

const PostSchema = mongoose.model('Post', Post);

