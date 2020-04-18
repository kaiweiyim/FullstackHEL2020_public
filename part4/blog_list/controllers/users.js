const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.password === undefined){
    return response.status(400).json({error:'missing password'})
  } else if (body.username === undefined){
    return response.status(400).json({error:'missing username' })
  } else if (body.password.length <= 2){
    return response.status(400).json({error:'password must be at least 3 characters'})
  } else if (body.username.length <= 2){
    return response.status(400).json({error:'username must be at least 3 characters'})
  }
    else {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })

    try {
      const savedUser = await user.save()
      return (response.json(savedUser))
    }
    catch (ValidationError){
      response.status(400).json({error:'Username already exists.'})
    }
  }

})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs',{author:1,title:1})
    response.json(users.map(u => u.toJSON()))
  })

module.exports = usersRouter