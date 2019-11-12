import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  author: string;
  place: string;
  description: string;
  hashtags: string;
  image: string;
  likes: number;
  }

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

export default mongoose.model<IPost>('Post', PostSchema);