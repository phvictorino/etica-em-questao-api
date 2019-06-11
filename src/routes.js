import { Router } from 'express'
import questions from './controllers/questions-controller'
import answers from './controllers/answers-controller'

const router = Router()

router.get('/questions/answer', questions.mountQuestions)
router.get('/questions', questions.find)
router.post('/questions', questions.create)
router.get('/answers/:id', answers.findOne)
router.post('/answers', answers.create)
router.delete('/questions/:id', questions.remove)

// eslint-disable-next-line no-unused-vars
router.use((error, req, res, next) => {
  return res.status(500).json({ message: error.message })
})

export default router
