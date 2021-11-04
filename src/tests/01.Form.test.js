import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("1 - Crie o formulário que será usado para adicionar cartas ao baralho", () => {

  it("Será validado se existe um input texto que possui o `data-testid='name-input'`", () => {
    render(<App />);
    const nameInput = screen.getByTestId(/name-input/i);
    expect(nameInput).toBeInTheDocument();
  });

  it("Será validado se existe um input textarea que possui o `data-testid='description-input'`", () => {
    render(<App />);
    const descName = screen.getByTestId(/description-input/i);
    expect(descName).toBeInTheDocument();
  });

  it("Será validado se existe um input number que possui o `data-testid='attr1-input'`", () => {
    render(<App />);
    const attr1 = screen.getByTestId(/attr1-input/i);
    expect(attr1).toBeInTheDocument();
  });

  it("Será validado se existe um input number que possui o `data-testid='attr2-input'`", () => {
    render(<App />);
    const attr2 = screen.getByTestId(/attr2-input/i);
    expect(attr2).toBeInTheDocument();
  });

  it("Será validado se existe um input number que possui o `data-testid='attr3-input'`", () => {
    render(<App />);
    const attr3 = screen.getByTestId(/attr3-input/i);
    expect(attr3).toBeInTheDocument();
  });

  it("Será validado se existe um input texto que possui o `data-testid='image-input'`", () => {
    render(<App />);
    const imgInput = screen.getByTestId(/image-input/i);
    expect(imgInput).toBeInTheDocument();
  });

  it("Será validado se existe um input select que possui o `data-testid='rare-input'`", () => {
    render(<App />);
    const rareInput = screen.getByTestId(/rare-input/i);
    expect(rareInput).toBeInTheDocument();
    expect(rareInput.options[0].value).toBe("normal");
    expect(rareInput.options[1].value).toBe("raro");
    expect(rareInput.options[2].value).toBe("muito raro");
  });
  
  it("Será validado se existe um input checkbox que possui o `data-testid='trunfo-input'`", () => {
    render(<App />);
    const trunfoCheck = screen.getByTestId(/trunfo-input/i);
    expect(trunfoCheck).toBeInTheDocument();
  });

  it("Deve renderizar o botão Salvar", () => {
    render(<App />);
    const saveBtn = screen.getByTestId(/save-button/i);
    expect(saveBtn).toBeInTheDocument();
  });
});