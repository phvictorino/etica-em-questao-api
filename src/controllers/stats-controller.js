import Answers from '../schemas/answers-schema'
import Questions from '../schemas/questions-schema'

const findStats = async (req, res, next) => {
  try {
    let obj = {}
    obj.totalAnswers = await Answers.find().count()
    let result = await Answers.aggregate([{ $group: { total: { $sum: '$total' }, _id: 1 } }])
    console.log(result)
    obj.media = (result[0].total / obj.totalAnswers)
    obj.totalQuestions = await Questions.find().count()
    console.log(obj)
    return res.json(obj)
  } catch (error) {
    next(error)
  }
}

export default { findStats }
