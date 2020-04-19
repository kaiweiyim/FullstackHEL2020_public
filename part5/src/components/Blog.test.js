import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Blog from "./Blog"

describe("<Blog />",() => {
  let component
  let blog
  let user
  let likeBlog
  let removeBlog

  beforeEach(() => {
    user = { name : "name1", username : "username1" , id : "123" }

    blog = {
      title : "test",
      author : "Tester",
      likes : 0,
      url : "some_url",
      user : user
    }

    likeBlog = jest.fn()
    removeBlog = jest.fn()

    component = render(
      <Blog blog={blog} likeBlog={likeBlog} removeBlog = {removeBlog} user ={user} />
    )
  })


  test("renders title and author", () => {

    expect(component.container).toHaveTextContent(
      `${blog.title} ${blog.author} view`
    )
  })

  test("renders url and likes", () => {

    const viewButton = component.getByText("view")

    fireEvent.click(viewButton)
    const div = component.container.querySelector(".hiddendiv")
    expect(div).toHaveTextContent(
      `${blog.url}likes ${blog.likes}like${blog.user.name}remove`
    )
  })

  test("renders like button", () => {
    const viewButton = component.getByText("view")

    fireEvent.click(viewButton)

    const likeButton = component.getByText("like")
    fireEvent.click(likeButton)
    fireEvent.click(likeButton)

    expect(likeBlog.mock.calls).toHaveLength(2)
  })

})


