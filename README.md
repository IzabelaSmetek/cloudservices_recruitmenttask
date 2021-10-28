# cloudservices_recruitmenttask
Recruitment task for Cloud Services 11.2021 

As agreed, I used Cypress instead of Selenium. 

### Known issues 

**1** <br/>
In Calendar (datepicker) I only tested typing the date by hand, while I should also test choosing the date from the frame. However, I couldn't find a solution for it with Cypress. 

**2** <br/>
Clicking "Dalej" seems impossible, not sure why. I tried all solutions I could think of: choosing XPath, choosing JS selector, copying just the name, trying to get only the name "Dalej" by contains and find functions, tried to check if it's a shadow element. Nothing works. Selector Playground in Cypress finds the element but when I copy the code it gives me, the test still returns the error "can't find element". Not sure what is happening here. 
