import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from './Banner'; // Corrigindo a importação do componente Banner

describe("Testando o Banner component", () => {
    test("Meu primeiro teste", () => {
        // Teste simples para verificar se a soma está correta
        expect(7 + 3).toEqual(10); // Corrigindo o método equal() para toEqual()
    });

    test('should render the image element with correct alt text', () => {
        // Renderiza o componente Banner
        render(<Banner />);
        
        // Verifica se há um elemento de imagem e se possui o atributo alt correto
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'O banner principal da minha aplicação');
    });
});
