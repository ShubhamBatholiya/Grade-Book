/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import './CSS/header.css'
import img from './professor.jpeg'
import icon from './exam.png'

function Header1() {
  const [openPopup, setOpenPopup] = useState(false);

  const openThePopup = () => {
    setOpenPopup(true);
    document.body.style.overflowY = "hidden"
  }
  const closeThePopup = () => {
    setOpenPopup(false);
    document.body.style.overflowY = "scroll"
  }

  function Popup() {
    return (
      <>
        <div className='popup-container'>
          <div className="popup">
            <div className='popupHeader'>
              <h1>Professor Details</h1>
              <span className='closeIcon' onClick={closeThePopup}> &times; </span>
            </div>
            <hr />
            <div className='img-container'>
              <img src={img} alt="" className='professor-image' />
            </div>
            <div className='professor-info'>
              <span>Name : Sandeep Kaur</span>
              <span>UMS ID : 23614</span>
              <span>Department : School of CSE</span>
              <span>Contact : 9644962826</span>
              <span>Email-id : sandeepkaur@gmail.com</span>
              <span>Linkedin : <a href="https://www.linkedin.com/in/sandeep-kaur-a4297761/">Connect Here</a></span>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='title'>
        <img src={icon} alt="" />
        <h1>Student GradeBook</h1>
      </div>

      <div className='header-information'>
        <div className='grid-container'>
          <span>Institute : Lovely Professional University</span>
          <span>Department : School of Computer Science</span>
          <span>Section : K19EF</span>
          <span>Group : 2</span>
          <span>Course Title : Front-End Development</span>
          <span>Project Title : Student Grading System</span>
          <div className='professor-name-div'>
            <img src={img} alt="image" onClick={openThePopup} />
            <span>Professor : Sandeep Kaur</span>
          </div>
          <span>Semester : 8 Th</span>

        </div>
      </div>
      {openPopup && <Popup />}
    </>
  )
}

export default Header1
