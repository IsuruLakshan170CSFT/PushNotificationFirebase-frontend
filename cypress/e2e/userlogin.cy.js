


describe('User Login', () => {
  let user ="perera1";
  it('user login'  , () => {
    cy.visit('/')
    cy.visit('user')
    cy.contains('Notifications')
    cy.get('[id=userName]').type(user)
    cy.contains('Login').click()
    cy.contains('Log out',{timeout: 20 * 1000 })
   // cy.pause()
    cy.contains('Log out',{timeout: 20 * 1000 }).click()
    cy.contains('Login',{timeout: 20 * 1000 })
   // cy.pause()


   cy.visit('addmin')
   cy.contains('Webpush notifications',{timeout: 20 * 1000 })
   cy.contains('Notification title')
   cy.contains('Notification body')
   cy.contains(user)
   cy.get('[id=title]').type('hello')
   cy.get('[id=body]').type(user)
   cy.contains('Send',{timeout: 20 * 1000 }).click()
  // cy.pause()
  })

})

