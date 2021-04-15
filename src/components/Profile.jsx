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
                <span className= "TextPerf">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo alias doloribus ducimus. Quaerat alias quos odio omnis, voluptatum unde quidem porro quia autem velit repellat rem reprehenderit impedit architecto nostrum.</span> 
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