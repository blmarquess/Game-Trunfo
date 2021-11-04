import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("8 - Exiba a lista de cartas que estão salvas no estado", () => {
  it("Será validado se a carta é renderizada na página ao salvá-la", () => {
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
    
    userEvent.type(nameInput, 'Carta 1 - Chinelo de Prego');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(descInput, 'Um chinelo lendário para pessoas guerreiras');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);


    expect(nameInput).toHaveValue('');

    expect(screen.getByText(/Carta 1 - Chinelo de Prego/i)).toBeInTheDocument();
    expect(screen.getByText(/Um chinelo lendário para pessoas guerreiras/i)).toBeInTheDocument();
  });

  it("Será validado se a lista é atualizada automaticamente quando uma carta é adicionada", () => {
    render(<App />);
    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    
    // Primeira Carta
    
    userEvent.type(nameInput, 'Carta 1 - Apontador com cestinha');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(descInput, 'Um apontador sustentável que recolhe os restos do lápis em sua cesta');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    expect(nameInput).toHaveTextContent('');


    // Segunda Carta

    userEvent.type(nameInput, 'Carta 2 - Apontador Elétrico');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(descInput, 'Apontador ideal para membros da casa Sonserina');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(saveBtn);


    expect(screen.getByText(/Carta 1 - Apontador com cestinha/i)).toBeInTheDocument();
    expect(screen.getByText(/Um apontador sustentável que recolhe os restos do lápis em sua cesta/i)).toBeInTheDocument();

    expect(screen.getByText(/Carta 2 - Apontador Elétrico/i)).toBeInTheDocument();
    expect(screen.getByText(/Apontador ideal para membros da casa Sonserina/i)).toBeInTheDocument();
  });
});