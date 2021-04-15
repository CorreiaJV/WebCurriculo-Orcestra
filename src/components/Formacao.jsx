import React from 'react'
import Formacao from './css/Formacao.css'
import base from './css/Base.css'
import foto from '../assets/img/foto.jpeg'

export default props =>
<div className= "BackColorForm" > 
<div className ="Base">
    <h2 className= "Title" id= "Form"> Formação </h2>
    <section className= "UnderlineContainer">
        <div className= "TitleUnderlineWhite"/>
    </section>
    <div className= "Container">
        <h4 className = "Title">Acadêmica</h4>
        <p className = "Text"> Ensino médio</p>
        <p className = "SubText">  &emsp;La Salle Núcleo Bandeirante 2016-2018</p>
        <p className = "Text"> Ensino Superior</p>
        <p className = "SubText">&emsp; Universidade de Brasília         
       </p>
       <p className="SubText"> &emsp; &emsp; &emsp; 
       Engenharia de Software 2/2019- Atualmente</p>
    </div>
    <div className= "Container">
        <h4 className = "Title">Certificações</h4>
        <p className = "Text"> Java 11 LTS</p>
        <p className = "SubText">  &emsp;Geek University - 32,5 horas</p>
        <p className = "Text"> Banco de Dados MySQL</p>
        <p className = "SubText">  &emsp;Hcode - 5 horas</p>
        <p className = "Text"> Fundamentos Web HTML, CSS & Javascript</p>
        <p className = "SubText">  &emsp;Yung Silva - 5 horas</p>
        <p className = "Text"> Inglês</p>
        <p className = "SubText">  &emsp;Wizard Núcleo Bandeirante- 2014-2019</p>
        <p className = "Text"> Test of English for International Communication(TOEIC)</p>
        
    </div>
    
</div>
</div>