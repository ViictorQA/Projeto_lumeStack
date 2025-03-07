const el = require("./elements").ELEMENTS;

class Lum {
  LoginSucesso() {
    cy.visit(el.visit);
    cy.get(el.name).type("Admin");
    cy.get(el.password).type("admin123");
    cy.get(el.login).click();
  }

  CriarUsuario() {
    cy.get(el.validacaoPage).contains("Dashboard");
    cy.get(el.myInfoButton).click();
    cy.get(el.botao1).type(" 1");{force: true}
    cy.get(el.botao2).type(" 2");
    cy.get(el.botao3).type(" 3");
    cy.get(el.botao4).clear().type(" teste 444");
    cy.get(el.botao5).type(" teste 555  ");
    cy.get(el.botao6).type(" teste 777");
    cy.get(el.botao7).click();
    cy.get(el.botao8).click();
    cy.get(el.botao9).type("01/01/2025");
    cy.get(el.botao10).click();
    cy.get(el.botao11).click().contains[".oxd-text--toast-title"];
    cy.get(el.botao12).should("be.visible");
    cy.get(el.botao13).click();
    cy.get(el.botao14).click();
  }
  LoginFalha() {
    cy.get(el.name).type("Admin");
    cy.get(el.password).type("admin12345");
    cy.get(el.login).click();
    cy.get(el.alertPage).should("be.visible").contains("Invalid credentials");
  }
}

export default new Lum();
