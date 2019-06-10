import Questions from '../schemas/questions-schema'
import { shuffleArray } from '../utils'

const create = async (req, res, next) => {
  try {
    let response = await Questions.create(req.body)
    return res.json(response)
  } catch (error) {
    next(error)
  }
}

const find = async (req, res, next) => {
  try {
    let response = await Questions.find()
    return res.json(response)
  } catch (error) {
    next(error)
  }
}

const mountQuestions = async (req, res, next) => {
  try {
    let response = await Questions.find().limit(20)
    return res.json(shuffleArray(response))
  } catch (error) {
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    let response = await Questions.deleteOne({ _id: req.params.id })
    return res.json(response)
  } catch (error) {
    next(error)
  }
}

export default { create, find, remove, mountQuestions }
