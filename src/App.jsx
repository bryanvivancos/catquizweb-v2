import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
    return (
        <div className='layout'>
            <header>
                <Navbar />
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