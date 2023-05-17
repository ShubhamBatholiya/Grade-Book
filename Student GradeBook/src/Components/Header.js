import React from 'react'
import Header1 from './Header1'
import './CSS/header.css'
function Header() {
    return (
        <>
            <div className="accordion">
                <span className="target-fix" id="accordion"></span>

                <div>
                    <span className="target-fix" id="accordion1"></span>

                    <a href="#accordion1" id="open-accordion1" title="open">Student GradeBook</a>

                    <a href="#accordion" id="close-accordion1" title="close">Student GradeBook</a>

                    <div className="accordion-content">
                        <p><Header1 /></p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
