import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("9 - Crie um botão para remover uma carta do baralho", () => {
  it("Será validado se o botão `Excluir` é renderizado na tela apenas nas cartas adicionadas ao baralho", () => {
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

    userEvent.type(nameInput, 'Carta 1 - Uno de Escada');
    userEvent.type(descInput, 'Carro perfeito para realizar manutenções simples e transitar rapidamente em vias públicas');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    const deleteBtns = screen.getAllByTestId('delete-button');
    expect(deleteBtns).toHaveLength(1);
  });

  it("Será validado se ao adicionar uma carta e excluí-la em seguida, a carta não é renderizada", () => {
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

    userEvent.type(nameInput, 'Carta 1 - Bebedouro de Guarulhos');
    userEvent.type(descInput, 'Bebedouro simpático e com forte pressão na água, ideal para aeroportos');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    expect(screen.getByText("Carta 1 - Bebedouro de Guarulhos")).toBeInTheDocument();

    const deleteBtn = screen.getByTestId("delete-button");
    userEvent.click(deleteBtn);


    expect(screen.queryByText("Carta 1 - Bebedouro de Guarulhos")).not.toBeInTheDocument();
  });

  it("Será validado se ao adicionar duas cartas e excluir uma em seguida, a carta não é renderizada", () => {
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
    userEvent.type(nameInput, 'Carta 1 - Pombo da Cidade');
    userEvent.type(descInput, 'Um pombo por vezes injustiçado mas sempre de bem com a vida');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    // Segunda Carta
    userEvent.type(nameInput, 'Carta 2 - Pomba Branca');
    userEvent.type(descInput, 'Em muitas culturas considerada o simbolo de paz, mas nós sabemos sua verdadeira intenção');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    userEvent.click(saveBtn);

    const deleteBtn = screen.getAllByTestId("delete-button");
    expect(screen.getByText("Carta 1 - Pombo da Cidade")).toBeInTheDocument();
    userEvent.click(deleteBtn[0]);

    expect(screen.queryByText("Carta 1 - Pombo da Cidade")).not.toBeInTheDocument();
  });

  it("Será validado se ao excluir uma carta Super Trunfo, o checkbox no formulário é renderizado novamente", () => {
    render(<App />);

    let checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(nameInput, 'Carta 1 - Motorola V3');
    userEvent.type(descInput, 'Clássico celular, um dos mais vendidos nos anos 2000 e ainda tem o "Hello Motor"');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    userEvent.click(checkboxTrunfo);
    userEvent.click(saveBtn);

    expect(checkboxTrunfo).not.toBeInTheDocument();

    const deleteBtn = screen.getByTestId("delete-button");
    userEvent.click(deleteBtn);

    checkboxTrunfo = screen.getByTestId(/trunfo-input/i);
    expect(checkboxTrunfo).toBeInTheDocument();
  });
});