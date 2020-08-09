import SuccessloginPage from '../PageObjects/SuccessloginPage'


describe('Login with correct credentials', function() {

    it('login', function() {

      const loginpage=new SuccessloginPage()

          loginpage.visit()
          loginpage.clickNavigation()
          loginpage.clickLoginTab()
          loginpage.fillEmail('oyinx@yahoo.com')
          loginpage.clickContinue()
          loginpage.fillPassword('password1')
          loginpage.clickSignup()
          cy.contains('All Notes',{timeout:10000}).should('be.visible')
        })

    })