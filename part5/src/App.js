import React, { useState, useEffect } from "react"
import Blog from "./components/Blog"
import LogoutButton from "./components/LogoutButton"
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import Togglable from "./components/Togglable"
import NewBlog from "./components/NewBlog"
import blogService from "./services/blogs"
import loginService from "./services/login"


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)

  const loggedBlogappUser = "loggedBlogappUser"
  const blogFormRef = React.createRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [user,errorMessage])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(loggedBlogappUser)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])



  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        loggedBlogappUser, JSON.stringify(user)
      )
      setUser(user)
      setUsername("")
      setPassword("")
      blogService.setToken(user.token)

    } catch (exception) {
      setErrorMessage("Wrong username or password")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const createBlog= async (blogObject) => {
    try {
      await blogService.create(blogObject)
      setErrorMessage(`${blogObject.title} added`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }catch{
      setErrorMessage("Invalid blog")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const likeBlog=async (blogObject) => {
    try {
      await blogService.update(blogObject.id,blogObject.data)
      setErrorMessage(`${blogObject.data.title} liked`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }catch{
      setErrorMessage("Failed to like blog")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

  }

  const removeBlog=(blogObject) => {
    const result = window.confirm(`Remove blog ${blogObject.title}`)
    if (result){
      try {
        blogService.deleteBlog(blogObject.id)
        setErrorMessage(`${blogObject.title} deleted`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }catch{
        setErrorMessage("Failed to remove blog")
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }


  }


  const onClickLogOut = (event) => {
    event.preventDefault()
    window.localStorage.removeItem(loggedBlogappUser)
    setUsername("")
    setPassword("")
    setUser(null)
    blogService.setToken("")

  }

  return (
    <div>
      <h1>blogs</h1>
      <Notification message = {errorMessage}></Notification>
      {user === null
        ?
        <div>
          <h2>Log in to application</h2>
          <LoginForm handleLogin ={handleLogin} username = {username}
            setUsername = {setUsername} password = {password} setPassword = {setPassword}/>
        </div>

        :
        <div>
          <p>{user.name} logged in <LogoutButton onClickLogOut = {onClickLogOut}/> </p>
          <h2>create new</h2>
          <Togglable buttonLabel="new blog" ref = {blogFormRef}>
            <NewBlog createBlog = {createBlog}/>
          </Togglable>

        </div>
      }

      {user !== null
        ? blogs.sort((a,b) => (a.likes > b.likes)?-1:1).map(blog =>
          <Blog key={blog.id} blog={blog} likeBlog={likeBlog} removeBlog={removeBlog} user = {user}/>
        ).sort((a,b) => (a.likes > b.likes)?-1:1)
        : <p></p>
      }
    </div>
  )
}

export default App