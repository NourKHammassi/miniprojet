import React from 'react'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Newbbc from './components/newbbc/newbbc'

export default function ARTICLEBBC() {
    return(
        <div>
            <div>
                <Header />
            </div>
           <div>
               <Newbbc />
               </div> 
               <div>
            <Footer />
        </div>
        </div>
    )
}