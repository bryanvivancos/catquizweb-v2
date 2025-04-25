import React from 'react';
import '../styles/App.css';
import ProductGrid from '../components/templates/ProductGrid';

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