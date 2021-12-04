import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';



export default function Header() {
    return(
        <div className="prop" >
          <nav  class="navbar navbar-light bg-light">
            <form >
           <Link className='navBarLink' to ='/'><button class="btn btn-outline-success me-2" type="button">Accueil</button></Link>
           <Link className='navBarLink' to ='/bbc'><button class="btn btn-outline-success me-2" type="button">BBC</button></Link>
           <Link className='navBarLink' to ='/cnn'><button class="btn btn-outline-success me-2" type="button">CNN</button></Link>
           <Link className='navBarLink4' to ='/'><button class="btn btn-outline-success me-2" type="button">Contact</button></Link>


            </form>

        </nav>
        </div>
    )
}
