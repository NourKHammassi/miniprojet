import React from 'react'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Newcnn from './components/newcnn/newcnn'

export default function ARTICLECNN() {
    return(
        <div>
            <div>
                <Header />
            </div>
           <div>
                <Newcnn />      
        </div> 
        <div>
            <Footer />
        </div>
        </div>
    )
}