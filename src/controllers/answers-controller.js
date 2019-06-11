import Answers from '../schemas/answers-schema'

const create = async (req, res, next) => {
  try {
    let response = await Answers.create(req.body)
    return res.json(response)
  } catch (error) {
    next(error)
  }
}

const findOne = async (req, res, next) => {
  try {
    let response = await Answers.findOne({ _id: req.params.id })
    return res.json(response)
  } catch (error) {
    next(error)
  }
}

export default { create, findOne }
