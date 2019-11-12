import mongoose, { Schema } from 'mongoose';

const PostSchema: Schema = new mongoose.Schema({
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0
  }
},
{
  timestamps: true
});

export default mongoose.model('Post', PostSchema);