const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const Blog = require('../models/blog')


const initialBlogs = [{"title": "A",
"author": "A",
"url": "A",
"likes": 1
},
{"title": "C",
"author": "C",
"url": "C",
"likes": 20
}
]

const getToken = async (username1) =>{
  const newUser = {
    username: username1,
    name: 'Testaaja1',
    password: 'salasana'
  }

  await api.post('/api/users').send(newUser)
  const loginInfo = {username : username1, password:'salasana'}
  const res = await api.post('/api/login').send(loginInfo)
  const token = res.body.token
  return (token)
}


beforeEach(async () => {
  await Blog.deleteMany({})

  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()

  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()

})




test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('two blogs', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlogs.length)
  })
  

test('id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })



test('add blog', async () => {

    const token = await getToken("Testaaja1")

    const newBlog = {"title": "B",
    "author": "B",
    "url": "B",
    "likes": 2
    }
    await api
    .post('/api/blogs')
    .set('authorization','bearer '+token)
    .send(newBlog)
    .expect(200)
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlogs.length+1)
  })

test('add blog, no token', async () => {
  const newBlog = {"title": "B",
  "author": "B",
  "url": "B",
  "likes": 2
  }
  await api
  .post('/api/blogs')
  .send(newBlog)
  .expect(401)
})


test('missing likes', async () => {

  const token = await getToken("Testaaja1")

    const newBlog = {"title": "B",
    "author": "B",
    "url": "B"
    }

    await api
    .post('/api/blogs')
    .set('authorization','bearer '+token)
    .send(newBlog)
    .expect(200)
    const response = await api.get('/api/blogs')
    expect(response.body[2].likes).toBeDefined()
    expect(response.body[2].likes).toBe(0)
  })


test('missing title and url', async () => {
  const token = await getToken("Testaaja1")
    const newBlog = {"title": "B",
    "likes":0
    }

    await api
    .post('/api/blogs')
    .set('authorization','bearer '+token)
    .send(newBlog)
    .expect(400)
  })


test('delete blog', async () => {
  const token = await getToken("Testaaja1")
  const newBlog = {"title": "B",
  "author": "B",
  "url": "B",
  "likes": 2
  }
  
  const res = await api.post("/api/blogs").set('authorization','bearer '+token).send(newBlog)

  await api
  .delete("/api/blogs/"+res.body.id)
  .set('authorization','bearer '+token)
  .expect(204)

  })

test('delete blog, wrong user', async () => {
  let token = await getToken("Testaaja1")
  const newBlog = {"title": "B",
  "author": "B",
  "url": "B",
  "likes": 2
  }
  const res = await api.post("/api/blogs").set('authorization','bearer '+token).send(newBlog)

  let token2 = await getToken("Testaaja2")
  await api
  .delete("/api/blogs/"+res.body.id)
  .set('authorization','bearer '+token2)
  .expect(401)

  })


test('update blog', async () => {
  const token = await getToken("Testaaja1")
    const response = await api.get('/api/blogs')
    const id = response.body[0].id

    const newBlog = {"title": "Z",
    "author": "Z",
    "url": "Z",
    "likes": 1000,
    }

    await api
    .put('/api/blogs/'+id)
    .set('authorization','bearer '+token)
    .send(newBlog)
    .expect(200)

  })



afterAll(() => {
  mongoose.connection.close()
})