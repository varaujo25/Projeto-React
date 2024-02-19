import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CampoCep from '.';

describe("Testing the CampoCep component", () => {
    test('renders CampoCep component with labels', () => {
        // Renderiza o componente CampoCep com as props fornecidas
        const { getByLabelText } = render(
            <CampoCep
                label="CEP"
                labelEndereco="Endereço"
                aoPreencherEndereco={() => {}}
            />
        );
      
        // Obtém os elementos de label pelo texto do rótulo
        const cepLabel = getByLabelText(/CEP/i);
        const enderecoLabel = getByLabelText(/Endereço/i);
      
        // Verifica se os elementos de label estão presentes no documento
        expect(cepLabel).toBeInTheDocument();
        expect(enderecoLabel).toBeInTheDocument();
    });
});
