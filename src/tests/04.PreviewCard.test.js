import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("4 - Crie o preview da carta que está sendo criada pelo formulário", () => {
  it("Será validado se é renderizado no preview da carta o valor digitado no input Nome do formulário", () => {
    render(<App />);
    const nameInput = screen.getByTestId(/name-input/i);
    userEvent.type(nameInput, 'Carta 1 - Escavadeira Dupla');
    const namePreview = screen.getByTestId('name-card');
    expect(namePreview).toHaveTextContent('Carta 1 - Escavadeira Dupla');
  });

  it("Será validado se é renderizado no preview da carta o valor digitado no input Descrição do formulário", () => {
    render(<App />);
    const descInput = screen.getByTestId(/description-input/i);
    userEvent.type(descInput, 'Uma simples escavadeira');
    const descPreview = screen.getByTestId('description-card');
    expect(descPreview).toHaveTextContent('Uma simples escavadeira');
  });

  it("Será validado se é renderizado no preview da carta o valor digitado no input referente ao atributo 1 no formulário", () => {
    render(<App />);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    userEvent.type(attr1Input, '90');
    const attr1Preview = screen.getByTestId(/attr1-card/i)
    expect(attr1Preview).toHaveTextContent('90')
  });

  it("Será validado se é renderizado no preview da carta o valor digitado no input referente ao atributo 2 no formulário", () => {
    render(<App />);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    userEvent.type(attr2Input, '90');
    const attr2Preview = screen.getByTestId(/attr2-card/i)
    expect(attr2Preview).toHaveTextContent('90')
  });

  it("Será validado se é renderizado no preview da carta o valor digitado no input referente ao atributo 3 no formulário", () => {
    render(<App />);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    userEvent.type(attr3Input, '30');
    const attr3Preview = screen.getByTestId(/attr3-card/i)
    expect(attr3Preview).toHaveTextContent('30')
  });

  it("Será validado se é renderizado no preview da carta o `data-testid='trunfo-card'` se o checkbox Super Trunfo for selecionado", () => {
    render(<App />);
    const trunfoInput = screen.getByTestId(/trunfo-input/i);
    userEvent.click(trunfoInput);
    const trunfoPreview = screen.getByTestId(/trunfo-card/i)
    expect(trunfoPreview).toBeInTheDocument();
  });
})