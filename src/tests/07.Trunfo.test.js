import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("7 - Crie a validação do Super Trunfo", () => {
  it("Será validado se o checkbox do Super Trunfo é redenderizado ao carregar a página", () => {
    render(<App />);
    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    expect(checkboxTrunfo).toBeInTheDocument();
  });

  it("Será validado se o texto 'Você já tem um Super Trunfo em seu baralho' é renderizado caso já exista uma carta Super Trunfo no baralho", () => {
    render(<App />);
    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(nameInput, 'Carta 1 - Escavadeira Dupla');
    userEvent.type(descInput, 'Uma simples escavadeira');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    const expectedMsg = screen.getByText(/Você já tem um Super Trunfo em seu baralho/i);
    expect(expectedMsg).toBeInTheDocument();
    expect(checkboxTrunfo).not.toBeInTheDocument();
  });
});