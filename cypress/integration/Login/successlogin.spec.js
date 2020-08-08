describe('Login with correct credentials', function() {
    it('login', function() {
          cy.visit('https://evernote.com')
          cy.get('.drawer-nav-open-btn').click()
          cy.get('div.drawer-nav > div:nth-child(2) > nav > div > a:nth-child(3)').click()
          cy.get('#username').type('oyinx@yahoo.com')
          cy.get('.Btn.Btn_emph.Btn_super').click()
          cy.get('#password').type('password1')
          cy.get('#loginButton').click()
          cy.contains('All Notes',{timeout:10000}).should('be.visible')
        })

    })