// cypress/integration/website.spec.js

describe('Website Tests', () => {
    it('Loads the website and checks important elements', () => {
      cy.visit('/'); // Replace with the URL of your website
  
      // Test the header
      cy.get('header h1').should('have.text', 'Refurbished PlayStation Consoles');
  
      // Test navigation
      cy.get('nav a').contains('About').click();
      cy.url().should('include', '#about');
  
      cy.get('nav a').contains('Services').click();
      cy.url().should('include', '#services');
  
      cy.get('nav a').contains('Contact').click();
      cy.url().should('include', '#contact');
  
      // Add more tests for other sections, images, etc.
    });
  });
  