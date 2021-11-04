import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("10 - Crie o filtro pelo nome da carta", () => {
  it("Será validado se o campo de filtro por nome renderiza na tela", () => {
    render(<App />)
    const filterNameInput = screen.getByTestId(/name-filter/i);
    expect(filterNameInput).toBeInTheDocument();
  });

  it("Será validado apenas as cartas correspondentes aparecem após o filtro",  () => {
    render(<App />)
    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    // Primeira carta
    userEvent.type(nameInput, 'Carta 1 - Bebedouro de Guarulhos');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(descInput, 'Bebedouro simpático e com forte pressão na água, ideal para aeroportos');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    expect(nameInput).toHaveValue('');


    // Segunda carta
    userEvent.type(nameInput, 'Carta 2 - Bebedouro de Bebedouro');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(descInput, 'Quando um bebedouro está na cidade de Bebedouro, ele se sente em casa');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);


    // Terceira carta
    userEvent.type(nameInput, 'Carta 3 - Fonte natural');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(descInput, 'A água em seu estado natural, na natureza');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    const filterNameInput = screen.getByTestId(/name-filter/i);
    userEvent.type(filterNameInput, "Bebedouro");

    expect(screen.getByText("Carta 1 - Bebedouro de Guarulhos")).toBeInTheDocument();
    expect(screen.getByText("Carta 2 - Bebedouro de Bebedouro")).toBeInTheDocument();
    expect(screen.queryByText("Carta 3 - Fonte natural")).not.toBeInTheDocument();
  });

  it("Será validado se não renderiza nenhuma carta se não houver nome correspondente", () => {
    render(<App />)
    const checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(nameInput, 'Carta 1 - Bebedouro de Guarulhos');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(descInput, 'Bebedouro simpático e com forte pressão na água, ideal para aeroportos');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    const filterNameInput = screen.getByTestId(/name-filter/i);
    userEvent.type(filterNameInput, "Escavadeira");
    
    expect(screen.queryByText("Carta 1 - Bebedouro de Guarulhos")).not.toBeInTheDocument();
  });
});