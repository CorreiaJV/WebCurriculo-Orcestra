import React from 'react'
import  './css/Exp.css'
import  './css/Profile.css'
import  './css/Base.css'
import orc from '../assets/img/OrcestraCapacete.png'




const Exp=()=>{

    return(<section className ="BackColorExp"> 
    <div className ="Base">
        <h2 className="Title" id= "Experiencia" > Experiência </h2>
        <section className= "UnderlineContainer">
            <div className= "TitleUnderline"/>
        </section>
        <div className= "Row">
            <img c className =" Orc" src= {orc} alt="Orc"></img>
            <div className= "ContainerOrc">
                <h4 className = "Title">Orc'estra Gamificação</h4>
                <p className = "SubText">  &emsp;Trainee 1/2021- Atualmente </p>
            </div>
        </div>
        
    </div>
</section>)
    }
    
    export default Exp