import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  test: {
    type: String
  }
})

const Test = mongoose.model('Test', TestSchema, 'users')

export default Test