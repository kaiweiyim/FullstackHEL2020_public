describe('Blog app', function() {

    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
        name: 'Testaaja',
        username: 'Testaaja',
        password: 'salainen'
        }
        cy.request('POST', 'http://localhost:3001/api/users/', user) 
        cy.visit('http://localhost:3000')
      })

    it('front page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('blogs')
      cy.contains('Log in to application')
    })

    it('login fails with wrong password', function() {
        cy.contains('login').click()
        cy.get('#username').type('Testaaja')
        cy.get('#password').type('wrong')
        cy.get('#login-button').click()
        cy.get('.error').contains('Wrong username or password')
        })

    it('user can login', function () {
        cy.get("#username").type('Testaaja')
        cy.get("#password").type('salainen')
        cy.get('#login-button').click()
        cy.contains("Testaaja logged in")
      }) 
    
    
    
    describe('when logged in', function() {
    beforeEach(function() {
        cy.login({ username: 'Testaaja', password: 'salainen' })
        })


    it('a new blog can be created and hide/unhide create button', function() {
        cy.get('#ToggleNewBlogVisible').click()
        cy.get('.title_input').type('Some title')
        cy.get('.author_input').type('Some author')
        cy.get('.url_input').type('some url')
        cy.get('#NewBlogButton').click()
        cy.contains("Some title Some author")
        cy.get('#ToggleNewBlogCancel').click()
        cy.get('#viewDetails').click()

        
    })

    describe('when blog added', function() {
        beforeEach(function() {
            cy.login({ username: 'Testaaja', password: 'salainen' })
            cy.createBlog({ title: 'Some title', author: 'Some author', url: 'some url' })

            })
        it('like blog', function() {
            cy.get('#viewDetails').click()
            cy.get('#likebutton').click()
            cy.contains(1)
            
        })
        it('delete blog', function() {
            cy.get('#viewDetails').click()
            cy.get('#deleteblog').click()
            
        })
    
    })
    describe('when multiple blog added', function() {
        beforeEach(function() {
            cy.login({ username: 'Testaaja', password: 'salainen' })
            cy.createBlog({ title: 'Some title', author: 'Some author', url: 'some url', likes:1 })
            cy.createBlog({ title: 'Some title2', author: 'Some author2', url: 'some url2', likes:2  })

            })
        it('test order', function() {
            cy.get('.Blog').then( blog_paras =>{
                cy.wrap(blog_paras[0]).then(b => {cy.wrap(b).find("#viewDetails").click()})
                cy.wrap(blog_paras[1]).then(b => {cy.wrap(b).find("#viewDetails").click()})
            } )
            cy.get('.Blog').then( blog_paras =>{
                cy.wrap(blog_paras[0]).contains(2)
                cy.wrap(blog_paras[1]).contains(1)
            } )
            
        })
    })  
    

    
  })