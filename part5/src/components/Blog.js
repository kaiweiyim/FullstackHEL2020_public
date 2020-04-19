import React, { useState } from "react"
const Blog = ({ blog,likeBlog,removeBlog,user }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)

  const buttonLabel = { text: visible ? "hide" : "view" }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleLike=() => {
    const blogObject = { data:{
      user:blog.user.id,
      likes:blog.likes+1,
      author:blog.author,
      title:blog.title,
      url:blog.url
    },
    id:blog.id
    }
    likeBlog(blogObject)

  }

  const handleRemove=() => {
    const blogObject ={ id:blog.id,title:blog.title }
    removeBlog(blogObject)
  }
  return(
    <div  style={blogStyle} className = 'Blog'>
      <p>{blog.title} {blog.author} <button id ="viewDetails" onClick={toggleVisibility}>{buttonLabel.text}</button> </p>
      {visible
        ?<div className = "hiddendiv">
          <p className= "url_para">{blog.url}</p>
          <p className= "likes_para">likes {blog.likes}
            <button id="likebutton" onClick = {handleLike}>like</button>
          </p>
          <p>{blog.user.name}</p>
          {user.username === blog.user.username
            ?<button id="deleteblog" onClick = {handleRemove}>remove</button>
            :<></>
          }
        </div>
        : <p></p>
      }
    </div>
  )

}



export default Blog
