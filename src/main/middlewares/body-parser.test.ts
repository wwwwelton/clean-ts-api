import app from '@/main/config/app'
import request from 'supertest'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_parses', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parses')
      .send({ name: 'Rodrigo' })
      .expect({ name: 'Rodrigo' })
  })
})
