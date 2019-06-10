import { Schema, model } from 'mongoose'

const schema = new Schema({
  question: { type: String, required: true },
  options: [{
    description: { type: String },
    value: { type: Number }
  }]
}, { timestamps: true })

export default model('Questions', schema)
