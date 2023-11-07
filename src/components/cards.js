import React  from 'react'
import './cards.css'

import img from './HTML5.png'
import img1 from './python.png'
import img2 from './JavaScript-Logo.png'
import img3 from './reactJS.png'
import img4 from './wordpress.png'
import img5 from './css.png'

function cards() {
    return (
        <div>
            <body>
    <div class="container" >
        <div class="box" >
            <h2 class="skill">HTML5</h2>
            
            <div class="circle"> </div>
            <img src={img} class="skillType" alt="Html5"></img>
        </div> <div class="box">
            <h2 class="skill">CSS</h2>
            
            <div class="circle"> </div>
            <img src={img5} class="skillType" alt="CSS"></img>
        </div> {/*<div class="box">
            <h2 class="skill">Python</h2>
            
            <div class="circle"> </div>
            <img src={img1} class="skillType" alt="Python"></img>
        </div>*/} {/*<div class="box">
            <h2 class="skill">Javascript</h2>
            
            <div class="circle"> </div>
            <img src={img2} class="skillType" alt="Javascript"></img>
         </div>  {/*<div class="box">
            <h2 class="skill">ReactJS</h2>
            <div class="circle"> </div>
            <img src={img3} class="skillType" alt="ReactJS"></img>
        </div> */} <div class="box">
            <h2 class="skill">Wordpress</h2>
            <div class="circle"> </div>
            <img src={img4} class="skillType" alt="Wordpress"></img>
        </div>
    </div>
    </body>
        </div>
    )
}

export default cards
