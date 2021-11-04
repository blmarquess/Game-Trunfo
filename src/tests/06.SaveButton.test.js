import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("6 - Crie a função do botão salvar", () => {
  it("Será validado se os campos do formulário `Nome`, `Descrição` e `Imagem` são limpos após clicar em `salvar`", () => {
    render(<App />);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(nameInput, 'Carta 1 - Tryunfo');
    userEvent.type(descInput, 'Considerado por fontes anônimas porém confiáveis um dos melhores projetos já criados');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    
    expect(saveBtn).toBeEnabled();
    userEvent.click(saveBtn);

    expect(nameInput).toHaveValue('');
    expect(descInput).toHaveValue('');
    expect(imgInput).toHaveValue('');
  });

  it("Será validado se o os três campos de atributos tem o valor `0` após clicar em `salvar`", () => {
    render(<App />);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(nameInput, 'Carta 1 - Tryunfo');
    userEvent.type(descInput, 'Considerado por fontes anônimas porém confiáveis um dos melhores projetos já criados');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "normal");
    
    expect(saveBtn).toBeEnabled();
    userEvent.click(saveBtn);

    expect(attr1Input).toHaveValue(0);
    expect(attr2Input).toHaveValue(0);
    expect(attr3Input).toHaveValue(0);
  });

  it("Será validado se o campo de `Raridade` tem o valor `normal` após clicar em `salvar`", () => {
    render(<App />);
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imgInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(nameInput, 'Carta 1 - Tryunfo');
    userEvent.type(descInput, 'Considerado por fontes anônimas porém confiáveis um dos melhores projetos já criados');
    userEvent.type(imgInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    
    expect(saveBtn).toBeEnabled();
    userEvent.click(saveBtn);

    expect(selectInput).toHaveValue('normal');
  });

})