class NotePage
{
    clickNavigation()
    {
        return cy.get('.drawer-nav-open-btn')
    }

    clickLoginTab()
    {
        return cy.get('div.drawer-nav > div:nth-child(2) > nav > div > a:nth-child(3)')
    }

    fillEmail(value)
    {
        return cy.get('#username')
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

    clickUsername()
    {
        return cy.get('#qa-NAV_USER > div > div > span > span > div > div')
    }

    clickLogout()
    {
        return cy.get('#qa-ACCOUNT_DROPDOWN_LOGOUT')
    }

}
    export default NotePage