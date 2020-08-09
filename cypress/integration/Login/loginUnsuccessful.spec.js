import LoginunsuccessfulPage from '../PageObjects/LoginunsuccessfulPage'

describe('Login with no credentials', function() {
const loginunsuccessful = new LoginunsuccessfulPage()


    it('loginunsuccessful', function() {
          cy.visit('https://evernote.com/')
          loginunsuccessful.clickNavigation().click()
          loginunsuccessful.clickLoginTab().click()
          loginunsuccessful.clickContinue().click()
          cy.contains('Required data missing').should('be.visible')
        })

    })


