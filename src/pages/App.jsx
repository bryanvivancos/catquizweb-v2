import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import Inicio from '../pages/Inicio';
import Productos from '../pages/Productos';
import Colecciones from '../pages/Colecciones';
import Regalos from '../pages/Regalos';

function App() {
    return (
        <div className='layout'>
            <BrowserRouter>
                <header>
                    <Heading />
                </header>  
                <Routes>
                    <Route path='/' element= {<Inicio/>}/>
                    <Route path='/colecciones' element= {<Colecciones/>}/>
                    <Route path='/productos' element= {<Productos/>}/>
                    <Route path='/regalos' element= {<Regalos/>}/>
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