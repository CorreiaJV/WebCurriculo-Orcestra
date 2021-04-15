import React,{useState,useEffect} from 'react'
import Navc from './css/NavBar.css'


const NavBar = () => {

    const [step,setStep] = useState(null);
    const[color,setColor]= useState( 0 );
    const teste = () => { 
        if (window.scrollY > 2700) {
            setColor(5)
            console.log(window.scrollY)
          }
          else if (window.scrollY > 2300) {
            setColor(4)
            console.log(window.scrollY)

          }else if (window.scrollY > 1500) {
            setColor(3)
            console.log(window.scrollY)
          }else if (window.scrollY > 1020) {
            setColor(2)
            console.log(window.scrollY)
          }else if (window.scrollY > 400) {
            setColor(1)
            console.log(window.scrollY)
          }
          
          
          else {
            setColor( false)
        console.log(window.scrollY) 
        }
        }
        console.log(window.scrollY)
    
    useEffect(() => {
        window.addEventListener('scroll', teste);
    }, []);



    return ( 
        <section className= "NavContainer">
            <nav className= "NavSty">
                <a href = "#Profile" className = {color==1? "NavItem2" :"NavItem"}> Perfil</a>
                <a href = "#Form" className={color==2? "NavItem2" :"NavItem"}>Formação</a>
                <a href = "#Experiencia" className= {color==3? "NavItem2" :"NavItem"}>Experiência</a>
                <a href = "#Habilidade" className= {color==4? "NavItem2" :"NavItem"}>Habilidade</a>
                <a href = "#Contato" className= {color==5? "NavItem2" :"NavItem"}>Contato</a>

            </nav>
        </section>
    )
    
    }

export default NavBar