import React from 'react';
import './Banner.Module.css';
import Menu from './Menu';

const Banner = () => {
    return(
        <div>  
            <Menu />    
            
            <header className="banner">
                <img src="/imagens/Banner.jpeg" alt="Banner principal da minha aplicação"/>
            </header>
        </div>
    )
}

export default Banner;
