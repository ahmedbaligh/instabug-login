describe('My First Test', () => {
  it('Valid Login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#email').type('mohamed@instabug.com');
    cy.get('#password').type('B12345678');
    cy.get('#login').click();
    cy.url().should('eq', 'http://localhost:3000/welcome');
  });

  it('Invalid Email', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#email').type('iamfake@gmail.com');
    cy.get('#password').type('B12345678');
    cy.get('#login').click();
    cy.contains('Your email and/or password are incorrect');
    cy.url().should('eq', 'http://localhost:3000/login');
  });

  it('Invalid Password', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#email').type('mohamed7@instabug.com');
    cy.get('#password').type('1234567890A');
    cy.get('#submit-button').click();
    cy.contains('Your email and/or password are incorrect');
    cy.url().should('eq', 'http://localhost:3000/login');
  });
});
