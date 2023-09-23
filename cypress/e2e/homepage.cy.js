describe('homepage user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=pisces&timePeriod=today', {
      statusCode: 200,
      fixture: "allPets.json"
    })
    cy.visit('localhost:3000')
  })

  it('should display all twelve zodiac cards on landing page', () => {
    cy.visit('localhost:3000')
  })
})