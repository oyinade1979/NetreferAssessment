import NotePage from '../PageObjects/NotePage'


describe('Set Note title and body', function() {

    it('note', function() {

      const notepage=new NotePage()


  
    
          cy.visit('https://evernote.com')
          notepage.clickNavigation()
          notepage.clickLoginTab()
          notepage.fillEmail('oyinx@yahoo.com')
          notepage.clickContinue()
          notepage.fillPassword('password1')
          notepage.clickSignup()
          cy.contains('All Notes',{timeout:20000}).should('be.visible')
          cy.contains('Untitled',{timeout:20000}).should('be.visible')
          notepage.clickUsername()
          notepage.clickLogout()
          cy.contains('You have logged out of Evernote',{timeout:20000}).should('be.visible')
          notepage.clickNavigation()
          notepage.clickLoginTab()
          notepage.fillEmail('oyinx@yahoo.com')
          notepage.clickContinue()
          notepage.fillPassword('password1')
          notepage.clickSignup()
          cy.contains('All Notes',{timeout:20000}).should('be.visible')
          cy.contains('Untitled',{timeout:20000}).should('be.visible')
          notepage.clickUsername()
          notepage.clickLogout()
          cy.contains('You have logged out of Evernote',{timeout:20000}).should('be.visible')
        })

    })