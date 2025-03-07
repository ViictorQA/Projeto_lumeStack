/// <reference types="cypress" />

import Lum from "../Lum/index";

describe("Orange testes", () => {
  it("Cadastro", () => {
    cy.viewport("macbook-16");

    Lum.LoginSucesso();
    Lum.CriarUsuario();
    Lum.LoginFalha();
  });
});
