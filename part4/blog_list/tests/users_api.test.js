const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcryptjs')
const User = require('../models/user')


describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })
    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {

    const newUser = {
      username: 'Testron',
      name: 'Testaaja',
      password: 'salasana',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)


  })

  test('creation with duplicate username', async () => {

    const newUser = {
      username: 'Testron',
      name: 'Testaaja',
      password: 'salasana',
    }

    await api
      .post('/api/users')
      .send(newUser)

    const response = await api.post('/api/users').send(newUser)
    expect(response.status).toBe(400)
    expect(response.body.error).toEqual('Username already exists.')
  })

  test('creation with short username', async () => {

    const newUser = {
      username: 'Te',
      name: 'Testaaja',
      password: 'salasana',
    }

    const response = await api.post('/api/users').send(newUser)
    expect(response.status).toBe(400)
    expect(response.body.error).toEqual('username must be at least 3 characters')

  })

  test('creation with short password', async () => {

    const newUser = {
      username: 'Testaa',
      name: 'Testaaja',
      password: 'sa',
    }

    const response = await api.post('/api/users').send(newUser)
    expect(response.status).toBe(400)
    expect(response.body.error).toEqual('password must be at least 3 characters')
  })


})

afterAll(() => {
    mongoose.connection.close()
  })