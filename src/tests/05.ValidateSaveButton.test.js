import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("5 - Faça a validação do botão de Salvar no formulário", () => {
  it("Será validado se o botão `salvar` está desabilitado quando a página é renderizada pela primeira vez", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo nome estiver vazio", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(screen.getByTestId(/name-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/image-input/i), 'url-to-image');
    userEvent.type(screen.getByTestId(/description-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/attr1-input/i), '12');
    userEvent.type(screen.getByTestId(/attr2-input/i), '34');
    userEvent.type(screen.getByTestId(/attr3-input/i), '56');
    userEvent.selectOptions(screen.getByTestId(/rare-input/i), 'raro');
    expect(saveBtn).not.toBeDisabled();
    
    userEvent.type(screen.getByTestId(/name-input/i), '{selectall}{backspace}');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo imagem estiver vazio", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(screen.getByTestId(/name-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/image-input/i), 'url-to-image');
    userEvent.type(screen.getByTestId(/description-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/attr1-input/i), '12');
    userEvent.type(screen.getByTestId(/attr2-input/i), '34');
    userEvent.type(screen.getByTestId(/attr3-input/i), '56');
    userEvent.selectOptions(screen.getByTestId(/rare-input/i), 'raro');
    expect(saveBtn).not.toBeDisabled();

    userEvent.type(screen.getByTestId(/image-input/i), '{selectall}{backspace}');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo descrição estiver vazio", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(screen.getByTestId(/name-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/image-input/i), 'url-to-image');
    userEvent.type(screen.getByTestId(/description-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/attr1-input/i), '12');
    userEvent.type(screen.getByTestId(/attr2-input/i), '34');
    userEvent.type(screen.getByTestId(/attr3-input/i), '56');
    userEvent.selectOptions(screen.getByTestId(/rare-input/i), 'raro');
    expect(saveBtn).not.toBeDisabled();

    userEvent.type(screen.getByTestId(/description-input/i), '{selectall}{backspace}');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo do atributo 1 for maior que 90", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(nameInput, 'Carta 1 - Trybe');
    userEvent.type(descInput, 'A melhor escola de programação para formação de pessoas incríveis e bonitas');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '30');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(attr1Input);
    userEvent.type(attr1Input, '91');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo do atributo 1 menor que 0", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(nameInput, 'Carta 1 - Trybe');
    userEvent.type(descInput, 'A melhor escola de programação para formação de pessoas incríveis e bonitas');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(attr1Input, '0');
    userEvent.type(attr2Input, '30');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(attr1Input);
    userEvent.type(attr1Input, '-1');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo do atributo 2 for maior que 90", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(nameInput, 'Carta 1 - Trybe');
    userEvent.type(descInput, 'A melhor escola de programação para formação de pessoas incríveis e bonitas');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(attr1Input, '30');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(attr2Input);
    userEvent.type(attr2Input, '91');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo do atributo 2 menor que 0", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(nameInput, 'Carta 1 - Trybe');
    userEvent.type(descInput, 'A melhor escola de programação para formação de pessoas incríveis e bonitas');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(attr1Input, '30');
    userEvent.type(attr2Input, '0');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(attr2Input);
    userEvent.type(attr2Input, '-1');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo do atributo 3 for maior que 90", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(nameInput, 'Carta 1 - Trybe');
    userEvent.type(descInput, 'A melhor escola de programação para formação de pessoas incríveis e bonitas');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(attr1Input, '30');
    userEvent.type(attr2Input, '30');
    userEvent.type(attr3Input, '90');
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(attr3Input);
    userEvent.type(attr3Input, '91');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo do atributo 3 menor que 0", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(nameInput, 'Carta 1 - Trybe');
    userEvent.type(descInput, 'A melhor escola de programação para formação de pessoas incríveis e bonitas');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(attr1Input, '30');
    userEvent.type(attr2Input, '30');
    userEvent.type(attr3Input, '0');
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(attr3Input);
    userEvent.type(attr3Input, '-1');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se a somatória dos campos de atributos for maior que 210.", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(nameInput, 'Carta 1 - Trybe');
    userEvent.type(descInput, 'A melhor escola de programação para formação de pessoas incríveis e bonitas');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(attr1Input, '70');
    userEvent.type(attr2Input, '70');
    userEvent.type(attr3Input, '70');
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(attr1Input);
    userEvent.type(attr1Input, '71');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão `salvar` é habilitado ao preencher todos os campos do formulário corretamente.", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId(/name-input/i);
    const descInput = screen.getByTestId(/description-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const attr1Input = screen.getByTestId(/attr1-input/i);
    const attr2Input = screen.getByTestId(/attr2-input/i);
    const attr3Input = screen.getByTestId(/attr3-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    
    expect(saveBtn).toBeDisabled();

    userEvent.type(nameInput, 'Carta 1 - Trybe');
    userEvent.type(descInput, 'A melhor escola de programação para formação de pessoas incríveis e bonitas');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(attr1Input, '90');
    userEvent.type(attr2Input, '90');
    userEvent.type(attr3Input, '30');
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();
  });
})