class LoginunsuccessfulPage
{
    clickNavigation()
     {
        return cy.get('.drawer-nav-open-btn')
       
     }

     clickLoginTab()
     {
        return cy.get('div.drawer-nav > div:nth-child(2) > nav > div > a:nth-child(3)')

     }

     clickContinue()
     {
        return cy.get('.Btn.Btn_emph.Btn_super')

     }
}

export default LoginunsuccessfulPage