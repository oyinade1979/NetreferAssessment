describe('Login with no credentials', function() {
    it('login', function() {
          cy.visit('https://evernote.com')
          cy.get('.drawer-nav-open-btn').click()
          cy.get('div.drawer-nav > div:nth-child(2) > nav > div > a:nth-child(3)').click()
          cy.get('.Btn.Btn_emph.Btn_super').click()
          cy.contains('Required data missing').should('be.visible')
        })

    })