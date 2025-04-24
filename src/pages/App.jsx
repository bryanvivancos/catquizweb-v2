import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Productos from '../pages/Productos';
import Inicio from '../pages/Inicio';

function App() {
    return (
        <div className='layout'>
            <BrowserRouter>
                <header>
                    <Heading />
                </header>  
                <Routes>
                    <Route path='/inicio' element= {<Inicio/>}/>
                    <Route path='/colecciones' element= {<p>Not found</p>}/>
                    <Route path='/productos' element= {<Productos/>}/>
                    <Route path='/regalos' element= {<p>Not found</p>}/>
                    <Route path="*" element={<p>Not found</p>} />
                </Routes>
{/* 
                <main>
                    <Hero/>
                </main> */}
                <footer>
                    <Footer />
                </footer>      
            </BrowserRouter> 
        </div>
    )
}

export default App