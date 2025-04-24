import React from 'react';
import '../styles/App.css'
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import ProductGrid from '../components/templates/ProductGrid'

function Productos() {
    return (
        <div className='layout'>
                <main>
                    <ProductGrid/>
                </main>
        </div>
    )
}

export default Productos