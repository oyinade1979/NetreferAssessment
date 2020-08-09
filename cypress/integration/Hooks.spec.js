const { iteratee } = require("lodash")

describe('Hooks', () => {


    before(() => {
      cy.log('This is SETUP block')
    })
  
    after(() => {
        cy.log('This is TEAR DOWN block')
    })

    beforeEach(() => {
        cy.log('This is LOGIN block')
    })
  
    afterEach(() => {
        cy.log('This is LOGOUT block')
    })

    it('signup', function() 
    {
        cy.log('signup')
    })

    it('login', function() 
    {
        cy.log('login')
    })

    it('note', function() 
    {
        cy.log('note')
    })

    it('loginunsuccessful', function() 
    {
        cy.log('loginunsuccessful')
    })
})

