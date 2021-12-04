import React from 'react'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

export default function Accueil() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Main />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
