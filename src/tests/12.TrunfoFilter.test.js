import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("12 - Crie o filtro de Super Trunfo", () => {
  it("Será validado se somente a carta de super trunfo é exibida quando esse filtro é selecionado", () => {
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

    // Primeira Carta
    userEvent.type(nameInput, 'Carta 1 - Chinelo de Prego');
    userEvent.type(descInput, 'Um chinelo lendário para pessoas guerreiras');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Segunda Carta
    userEvent.type(nameInput, 'Carta 2 - Havaiana de Pau');
    userEvent.type(descInput, 'Havaiana rústica e com conforto duvidável');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(saveBtn);

    // Terceira Carta
    userEvent.type(nameInput, 'Carta 3 - Havaiana do Brasil');
    userEvent.type(descInput, 'Havaiana clássica e cultural, combina com qualquer vestimenta');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(saveBtn);

    const trunfoFilterBtn = screen.getByTestId("trunfo-filter");
    userEvent.click(trunfoFilterBtn);

    expect(screen.getByText("Carta 1 - Chinelo de Prego")).toBeInTheDocument();
    expect(screen.queryByText("Carta 2 - Havaiana de Pau")).not.toBeInTheDocument();
    expect(screen.queryByText("Carta 3 - Havaiana do Brasil")).not.toBeInTheDocument();
  });
});