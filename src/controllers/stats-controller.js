import Answers from '../schemas/answers-schema'
import Questions from '../schemas/questions-schema'

const findStats = async (req, res, next) => {
  try {
    let obj = {}
    obj.totalAnswers = await Answers.find().count()
    let result = await Answers.aggregate([{ $group: { total: { $sum: '$total' }, _id: 1 } }])
    obj.media = (obj.totalAnswers / result[0].total)
    obj.totalQuestions = await Questions.find().count()
    return res.json(obj)
  } catch (error) {
    next(error)
  }
}

export default { findStats }
