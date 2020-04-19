import React, { useState } from "react"

const NewBlog = ({ createBlog }) => {
  const [title, setTitle] = useState([])
  const [url, setUrl] = useState([])
  const [author, setAuthor] = useState([])

  const addNewBlog = async (event) => {
    event.preventDefault()
    const newBlogObj = { title,url,author }
    createBlog(newBlogObj)
    setTitle("")
    setUrl("")
    setAuthor("")
  }


  return (
    <form onSubmit={addNewBlog}>
      <div>
      title
        <input  className = "title_input"
          type="text"
          value={title}
          name="title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author
        <input className = "author_input"
          type="text"
          value={author}
          name="author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url
        <input  className = "url_input"
          type="text"
          value={url}
          name="url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button id="NewBlogButton" type="submit">create</button>
    </form>
  )
}

export default NewBlog