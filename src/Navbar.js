import React,{useEffect,useState} from 'react'
import smile from './assets/smile.png'
import './Nav.css'

function Navbar(){
  
    const [show,handleShow]=useState(false)

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        });
        return ()=>{window.removeEventListener("scroll")}
    }, [])

return(
   
    <div className={`navi ${show && "nav__black"}`}>
        <img src={smile} alt="" className="row nav_logo" />
{/* 
        <img src="https://cdn.icon-icons.com/icons2/1368/PNG/512/-avatar_89781.png" alt="" className="nav_avatar" />
 */}    </div>
)

}


export default Navbar