describe('API Testing', () => { 
    Cypress.config('baseUrl', 'https://reqres.in/api')
   it('GET - list user', () => {
     cy.request('/users').then((response) => {
         expect(response).to.have.property('status', 200)
         expect(response.body.data[0].first_name).equal('George')
     })
   })

   it('GET - Single user not found', () => {
    cy.request({method:'GET', url:'/users/23', failOnStatusCode: false}).then((response) =>{
        expect(response).to.have.property('status', 404)
      })
    })


    it('PUT - Successful registration',() => {
        const users = {"email":"oyinx@yahoo.com","password":"Password1"}
        cy.request('PUT','/resgister',users).then((response) => {
            expect(response).to.have.property('status', 200)

        })
    
    })
    it('POST - Unsuccessful registration',() => {
        const item = {"email" : 'oyinx@yahoo.com'}
        cy.request({method:'POST',url:'/register', failOnStatusCode: false}).its('status').should('eq', 400)

        })
})


