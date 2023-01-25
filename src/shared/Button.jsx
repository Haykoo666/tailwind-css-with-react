import React from 'react'

const Button = ({text, media = "", classes = ""}) => {
  return (
    <>
      <button className={`btn ${media} ${classes} hover:text-black transition duration-300`}>
        <a href="#">
          {text}
        </a>
      </button>
    </>
  )
}

export default Button