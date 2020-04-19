import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import NewBlog from "./NewBlog"

test("<NewBlog /> updates parent state and calls onSubmit", () => {
  const createBlog = jest.fn()

  const component = render(
    <NewBlog createBlog={createBlog} />
  )

  const title_input = component.container.querySelector(".title_input")
  const author_input = component.container.querySelector(".author_input")
  const url_input = component.container.querySelector(".url_input")
  const form = component.container.querySelector("form")

  fireEvent.change(title_input, {
    target: { value: "testing of forms could be easier" }
  })

  fireEvent.change(author_input, {
    target: { value: "Me" }
  })
  fireEvent.change(url_input, {
    target: { value: "worldcom" }
  })
  fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(1)
  expect(createBlog.mock.calls[0][0].title).toBe("testing of forms could be easier" )
  expect(createBlog.mock.calls[0][0].author).toBe("Me" )
  expect(createBlog.mock.calls[0][0].url).toBe("worldcom" )
})