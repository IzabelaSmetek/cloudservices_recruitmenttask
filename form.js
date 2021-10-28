describe('Fill in the form and go to the second step', function(){

    it('Goes to the site', function(){
        cy.visit('https://app.bluealert.pl/ba/form/formularz-testowy')
    })

    it('Fills in the form', function(){
        //fills in name
        cy.xpath('/html/body/section/div/div[2]/div/form/div[1]/div/div[2]/div[1]/div[1]/input')
          .type("Jan")
        //fills in surname
        cy.xpath('/html/body/section/div/div[2]/div/form/div[1]/div/div[2]/div[2]/div[1]/input')
          .type('Testalski')
        //fills in email
        cy.xpath('/html/body/section/div/div[2]/div/form/div[1]/div/div[2]/div[3]/div[1]/input')
          .type('test@test.test')
        //fills in phone number
        cy.xpath('/html/body/section/div/div[2]/div/form/div[1]/div/div[2]/div[4]/div[1]/input')
          .type('555444333')
        //fills in PESEL
        cy.xpath('/html/body/section/div/div[2]/div/form/div[1]/div/div[2]/div[5]/div[1]/input')
          .type('02112585475')
        //fills in ID
        cy.xpath('/html/body/section/div/div[2]/div/form/div[1]/div/div[2]/div[6]/div[1]/input')
          .type('UZJ208042')
        //types in date
        cy.xpath('/html/body/section/div/div[2]/div/form/div[1]/div/div[2]/div[7]/div[1]/div/div/input')
          .type('2020-05-14')
        //clicks outside to close the calendar
        cy.get('body').click()
        })  
    })

    it('Clicks "Dalej"', function(){
        cy.get('.col-6')
          .click()

    })
    
