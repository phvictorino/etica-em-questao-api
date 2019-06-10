import { Schema, model } from 'mongoose'

const schema = new Schema({
  total: { type: Number, required: true }
}, { timestamps: true })

export default model('Answers', schema)
