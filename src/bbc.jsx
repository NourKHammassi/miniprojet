import React from 'react'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Listbbc from './components/listbbc/listbbc'

export default function BBC() {
    return(
        <div>
            <div>
                <Header />
            </div>
           <div>
               <Listbbc />
               </div> 
               <div>
            <Footer />
        </div>
        </div>
    )
}