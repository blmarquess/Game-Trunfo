import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form';

const defaultProps = {
  cardName: "Nome da carta",
  cardDescription: "Descrição da carta",
  cardAttr1: "12",
  cardAttr2: "34",
  cardAttr3: "56",
  cardImage: "url-to-image",
  cardRare: "raro",
  cardTrunfo: true,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => {},
  onSaveButtonClick: () => {},
}

describe("2 - Adicione as props necessárias ao componente de formulário", () => {
  it("Será validado se o campo de nome recebe o valor da prop `cardName` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/name-input/i);

    expect(input).toHaveValue("Nome da carta");
    
    userEvent.type(input, "Novo nome");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de descrição recebe o valor da prop `cardDescription` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/description-input/i);

    expect(input).toHaveValue("Descrição da carta");
    
    userEvent.type(input, "Nova descrição");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo do atributo 1 recebe o valor da prop `cardAttr1` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/attr1-input/i);

    expect(input).toHaveValue(12);
    
    userEvent.type(input, "21");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo do atributo 2 recebe o valor da prop `cardAttr2` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/attr2-input/i);

    expect(input).toHaveValue(34);
    
    userEvent.type(input, "43");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo do atributo 3 recebe o valor da prop `cardAttr3` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/attr3-input/i);

    expect(input).toHaveValue(56);
    
    userEvent.type(input, "65");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de imagem recebe o valor da prop `cardImage` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/image-input/i);

    expect(input).toHaveValue("url-to-image");
    
    userEvent.type(input, "new-ur-to-image");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de raridade recebe o valor da prop `cardRare` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/rare-input/i);

    expect(input).toHaveValue("raro");
    
    userEvent.selectOptions(input, "muito raro");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de Super Trunfo recebe o valor da prop `cardTrunfo` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/trunfo-input/i);

    expect(input).toBeChecked();
    
    userEvent.click(input);
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o botão de salvar é desabilitado se o valor da prop `isSaveButtonDisabled` for `false`", () => {
    render(<Form {...defaultProps} isSaveButtonDisabled={false} />);
    const button = screen.getByTestId(/save-button/i);

    expect(button).not.toBeDisabled();
  });

  it("Será validado se o botão de salvar é habilitado se o valor da prop `isSaveButtonDisabled` for `false`", () => {
    render(<Form {...defaultProps} isSaveButtonDisabled={true} />);
    const button = screen.getByTestId(/save-button/i);

    expect(button).toBeDisabled();
  });

  it("Será validado a callback `onSaveButtonClick` é chamada quando o botão é clicado", () => {
    const onSaveButtonClick =  jest.fn();
    render(<Form {...defaultProps} onSaveButtonClick={onSaveButtonClick} />);
    const button = screen.getByTestId(/save-button/i);

    userEvent.click(button);
    expect(onSaveButtonClick).toHaveBeenCalled();
  });
});