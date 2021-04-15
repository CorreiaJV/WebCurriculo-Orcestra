import React from 'react'
import hab from './css/Habilidades.css'
export default prop =>
<section className ="BackColor"> 
    <div className ="Base">
        <h2 className="Title" id= "Habilidade"> Habilidades </h2>
        <section className= "UnderlineContainer">
            <div className= "TitleUnderline"/>
        </section>
        <section className="skills">
            <div className="ContainerHab">                
            <ul style= {{listStyleType: 'none'}}>
                <li><span style= {{width: "70%"}}>Flutter</span></li>
                <li><span style={{width: "50%"}}>HTML & CSS</span></li>
                <li><span style={{width: "60%"}}>Java</span></li>
                <li><span style={{width: "35%"}}>Linguagem C</span></li>
                <li><span style={{width: "20%"}}>MySQL</span></li>                
            </ul>
            </div>            
        </section>
        <div className= "SpacerBtn">
            <a className ="btnGit" href = "https://github.com/CorreiaJV" target="_blank">
                 Git/Github</a>
        </div>
    </div>
</section>