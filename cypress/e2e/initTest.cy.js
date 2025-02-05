describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://192.168.1.135:5173/')

    cy.get("[data-testid='cypress-header']")
      .should('exist')
      .should('have.text', 'Please enter your details to get the best offers from our lenders')
  })
})
