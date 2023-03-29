import React from 'react'

const Footer = () => {
  let footerStyle = {
    paddingTop: "6.5px",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "7.5vh"
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center'>Copyright &copy; MyTodosList.com</p>
      </footer>
  )
}

export default Footer
