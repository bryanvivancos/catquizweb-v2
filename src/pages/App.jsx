import React from 'react';
import '../styles/App.css'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

function App() {
    return (
        <div className='layout'>
            <header>
                <Heading />
            </header>  
            <main>
                <Hero/>
            </main>
            <footer>
                <Footer />
            </footer>      
        </div>
    )
}

export default App