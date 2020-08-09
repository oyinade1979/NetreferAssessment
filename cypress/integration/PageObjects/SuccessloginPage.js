class SuccessloginPage
{

    visit()

    {
        cy.visit("https://evernote.com/")
    }

    clickNavigation()
     {
        const tab=cy.get('.drawer-nav-open-btn')
        tab.click()
     }

     clickLoginTab()
     {
        const tab=cy.get('div.drawer-nav > div:nth-child(2) > nav > div > a:nth-child(3)')
        tab.click()
     }

     fillEmail(value)
     {
         const field=cy.get('#username')
         field.clear()
         field.type(value)
         return this
     }

     clickContinue()
     {
        const button=cy.get('.Btn.Btn_emph.Btn_super')
        button.click()
     }

     fillPassword(value)
     {
         const field=cy.get('#password')
         field.clear()
         field.type(value)
         return this
     }

     clickSignup()
     {
        const button=cy.get('#loginButton')
        button.click()
     }


    }
     export default SuccessloginPage
