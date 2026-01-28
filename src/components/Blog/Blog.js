import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>
          </div>

          <div className='content grid'>
            {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.abstract} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog