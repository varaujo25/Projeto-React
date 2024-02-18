import React from 'react';
import Menu from '.';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("Testing the Menu component", () => {
    test('should render the correct links', () => {
        // Renderizando o componente Menu dentro do BrowserRouter para simular o roteamento
        render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );
      
        // Obtendo todos os elementos de link (âncora)
        const links = screen.getAllByRole('link');
        
        // Verificando se existem 3 links
        expect(links).toHaveLength(3);
    
        // Mapeando os destinos dos links
        const linkDestinations = links.map(link => link.getAttribute('href'));
        
        // Verificando se os destinos dos links são os esperados
        expect(linkDestinations).toEqual(['/', '/formulario', '/sobre']);
    });
});
