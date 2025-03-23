describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if swipe buttons work in both directions', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if the description of each slide is displayed correctly', function () {
    cy.visit('http://localhost:3000');

    const slides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' },
    ];

    slides.forEach((slide, index) => {
      if (index > 0) {
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
      }

      cy.get('.swiper-slide-active').within(() => {
        cy.contains('h1', slide.title).should('be.visible');
        cy.contains('p', slide.description).should('be.visible');
      });
    });
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks responsiveness of gallery', function () {
    cy.visit('http://localhost:3000');

    const viewports = [
      'samsung-s10',
      'macbook-15',
      'ipad-2'
    ];

    viewports.forEach((viewport) => {
      cy.viewport(viewport);
      cy.wait(2000);
      cy.get('.swiper').should('be.visible');
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('exist');
      cy.get('.swiper-button-prev').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('exist');
    });
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if gallery elements are visible and functional', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide').should('have.length', 3);
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.wait(2000);
    cy.get('.swiper-button-prev').should('be.visible').click();
  });
});

