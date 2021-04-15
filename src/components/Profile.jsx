import React from 'react'
import  './css/Profile.css'
import foto from '../assets/img/foto.jpeg'
import  './css/Base.css'


const Profile=()=>{

    return(<section className ="BackColor" id= "Profile"> 
    <div className ="Base">
        <h2 className="Title" > Perfil </h2>
        <section className= "UnderlineContainer">
            <div className= "TitleUnderline"/>
        </section>
        <div className= "Column">
            <div className= "Container">
                <h4 className = "TitlePerf">Sobre mim</h4>
                <span className= "TextPerf">Sou apaixonado por tecnologia e 
                desenvolvimento, sigo  meu caminho profissional alinhado a essa paixão. <br/> 
                Atualmente, estou me dedicando ao front-end estudando React Js para web e 
                Flutter para mobile.</span> 
            </div>
            <div> <img src= {foto} className ="FotoPerf" alt=""></img> </div>
            <div className= "Container"> 
                <h4 className = "TitlePerf" >Detalhes</h4>
                
                    <h6 className= "TitlePerf">Nome</h6>
                    <p className = "TextPerf">João Victor Correia <br/>de Oliveira</p>
                    <h6 className= "TitlePerf">Idade</h6>
                    <p className = "TextPerf">19 anos</p>
                    <h6 className= "TitlePerf">Endereço</h6>
                    <p className = "TextPerf">Núcleo Bandeirante- DF</p>
                
            
                
            </div>
        </div>
    </div>
</section>)
    }
    
    export default Profile