class SignupPage
{
    fillEmail()
     {
        return cy.get('input[id="bottomemail"]')
       
     }

     inputPassword()
     {
        return cy.get('input[id="bottompassword"]')

     }

     clickSignup()
     {
        return cy.get('#signup-bottom >div:nth-of-type(3)')

     }
}

export default SignupPage