import React from 'react'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Listcnn from './components/listcnn/listcnn'

export default function CNN() {
    return(
        <div>
            <div>
                <Header />
            </div>
           <div>
               <Listcnn />
               </div> 
               <div>
            <Footer />
        </div>
        </div>
    )
}