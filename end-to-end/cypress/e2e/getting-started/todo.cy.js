describe('Testing app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('is able to log in', () => {
    cy.contains('SignIn').should('exist')
    cy.contains('SignIn').click()
    cy.contains('Welcome Back').should('exist', { timeout: 10000 })
    cy.get('[data-cy="email"]').type('iamthakurkaran007@gmail.com')
    cy.get('[data-cy="password"]').type('karant')
  })

})
