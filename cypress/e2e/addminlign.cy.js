describe('addmin login', () => {
    it('addmin', () => {

      cy.visit('/')
      cy.visit('addmin')
      cy.contains('Webpush notifications',{timeout: 20 * 1000 })
      cy.contains('Notification title')
      cy.contains('Notification body')
      cy.contains('kasun1')
      cy.get('[id=title]').type('hello')
      cy.get('[id=body]').type('saman')
      cy.contains('Send',{timeout: 20 * 1000 }).click()
      cy.pause()
      
    })
    })
  