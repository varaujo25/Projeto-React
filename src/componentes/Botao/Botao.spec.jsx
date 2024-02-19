import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Botao from '.';

describe('Testing the Botão component', () => {
  test('renders button with correct class and children', () => {
    // Defina o texto do botão
    const buttonText = 'Clique aqui';

    // Renderize o componente Botao com o texto definido
    render(<Botao>{buttonText}</Botao>);

    // Obtenha o elemento do botão pelo texto
    const buttonElement = screen.getByText(buttonText);
    
    // Verifique se o botão foi renderizado corretamente
    expect(buttonElement).toBeInTheDocument();

    // Verifique se o botão possui a classe 'botao'
    expect(buttonElement).toHaveClass('botao');
  });
});
