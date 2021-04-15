import React from 'react'
import './css/contato.css'
import  './css/Base.css'


import { FaLinkedin} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { GoMail } from "react-icons/go";
import { FaWhatsapp} from "react-icons/fa";


    const Contato=()=>{

        return(<section className ="BackColorBlack"> 
        <div className ="BaseWhite">
            <h2 className="TitleContato" id= "Contato"> Contato </h2>
            <section className= "UnderlineContainer">
                <div className= "TitleUnderlineContato"/>
            </section>
            <section className= "ContainerCont">
                <div>
                    <div className= "RowContato">
                    <FaLinkedin className = "Icon" />         
                            <a className = "TextContato" href = "https://www.linkedin.com/in/jv-correia/ " target= "blank">
                                https://www.linkedin.com/in/jv-correia/</a> 
                    </div>
                    <div className= "RowContato">
                        <FaInstagram  className="Icon"/>         
                        <a className = "TextContato" href = "https://www.instagram.com/correia.jv/ " target= "blank">
                            @correia.jv</a> 
                    </div>
                    <div className= "RowContato">
                        <GoMail className= "Icon"/>         
                            <h4 className = "TextContato">correia.jv16@gmail.com</h4> 
                    </div>
                    <div className= "RowContato">
                        <FaWhatsapp className= "Icon"/>         
                            <h4 className = "TextContato">(61) 99946-8480</h4>
                            
                    </div>         
                </div>            
            </section>
            <section className= "UnderlineContainer">
                <div className= "TitleUnderlineContato"/>
            </section>
            
        </div>
        </section>)
        }
        
        export default Contato