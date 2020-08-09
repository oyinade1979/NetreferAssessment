import SignupPage from '../PageObjects/SignupPage'

describe('Sign up', function() {
const signup = new SignupPage()


    it('signup', function() {


          cy.visit('https://evernote.com/')
          cy.title().should('eq','Best Note Taking App - Organize Your Notes with Evernote')
          cy.location('protocol').should('eq','https:')
          signup.fillEmail().type('jo@yahoo.com')
          signup.inputPassword().type('password1')
          signup.clickSignup().should('be.visible').click()
          cy.title().should('be.equal','Create an Evernote Account')
        
    })

})