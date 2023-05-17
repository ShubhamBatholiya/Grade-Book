/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./CSS/reset.css"

function Resetbtn() {
    return (
        <>
            <div class="container">
                <a href="#" class="button">
                    <div class="plate"></div>
                    <div class="plate"></div>
                    <div class="plate"></div>
                    <div class="plate"></div>
                    <div class="plate"></div>
                    <div class="button__wrapper">
                        <span class="button__text">ENTRY</span>
                    </div>
                    <div class="button__box">
                        <div class="inner inner__top"></div>
                        <div class="inner inner__front"></div>
                        <div class="inner inner__bottom"></div>
                        <div class="inner inner__back"></div>
                        <div class="inner inner__left"></div>
                        <div class="inner inner__right"></div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Resetbtn
