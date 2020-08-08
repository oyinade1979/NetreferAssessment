describe('Sign up', function() {
    it('Sign up', function() {
          cy.visit('https://evernote.com')
          cy.title().should('eq','Best Note Taking App - Organize Your Notes with Evernote')
          cy.location('protocol').should('eq','https:')
          cy.get('input[id="bottomemail"]').type('oyinx@yahoo.com')
            cy.get('input[id="bottompassword"]').type('password1')
            cy.get('#signup-bottom >div:nth-of-type(3)').should('be.visible').click()
            cy.contains('SPECIAL OFFER').should('be.visible')
        
    })

})