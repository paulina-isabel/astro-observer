describe('homepage user flow', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  });

  it('should display all twelve zodiac cards on landing page', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.navbar').within(() => {
      cy.get('.header').should('exist')
      cy.get('.favorites-page-icon').should('exist')
    });
    cy.get('.home-page').within(() => {
      cy.contains('h2', 'Welcome! Please select your star sign to begin.').should('exist')
      cy.get('.signs-wrapper').should('exist')
    });
    cy.get('.signs-wrapper').children()
      .should('have.length', 12)
  });

  it('should display a reading for the selected sign & time period', () => {
    cy.get('.signs-wrapper').children().last().click()
    cy.url().should('eq', 'http://localhost:3000/Pisces')
    cy.get('.navbar').within(() => {
      cy.get('.header').should('exist')
      cy.get('.favorites-page-icon').should('exist')
    });
    cy.contains('h2', 'Select a Time Period to See Reading for Pisces:')
    cy.get('img[alt="today"]')
    cy.get('img[alt="yesterday"]')
    cy.get('img[alt="weekly"]')
    cy.contains('p', 'Make a selection above to see your reading!')
    cy.intercept("GET", 'https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=Pisces&timePeriod=today', {
      statusCode: 200,
      fixture: `.././fixtures/pisces-today.json`
    });
    cy.get('img[alt="today"]').click()
    cy.get('.reading').contains('You may reveal the more loving and caring and sensitive side of you which you have kept hidden always. This will also endear you to the kids in the family and others as well.Women who act strongly and independently would make others feel small and this would lead them to accuse the women of lacking in feminity.Mothers will focus on their family and children today. Their affection and care will bring joy to their kids. They will enjoy every moment of attention.Try and analyze the reasons or basis for the interest you have developed in a new acquaintance. Do not place your trust on anyone before you know them well.')
    cy.get('.favorite-button')
    cy.intercept("GET", 'https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=Pisces&timePeriod=yesterday', {
      statusCode: 200,
      fixture: `.././fixtures/pisces-yesterday.json`
    });
    cy.get('img[alt="yesterday"]').click()
    cy.get('.reading').contains('Your irresistible sense of humor makes you very popular among friends and others you meet today. It would also enthuse people who you work with.You will feel inactive and exhausted today. This is a total contrast to your active true self. Also you\'ll get easily agitated today.You have such a cautious nature that you become very suspicious of people, their motives, situations, etc. You will end up analyzing everything before you make any commitments which might work in your favor today.You will be happy and energetic today. You\'ll feel as if you could take on any challenges. Your joy would be very infectious making others you meet also happy.Meditation will help you deal with the stress and tension that you suffer from. The stress would also take away your physical strength and stamina.')
    cy.get('.favorite-button').click()
    cy.get('.favorites-page-icon').click()
    cy.get('.navbar').within(() => {
      cy.get('.header').should('exist')
      cy.get('.favorites-page-icon').should('exist')
    });
    cy.url().should('eq', 'http://localhost:3000/favorites')
    cy.contains('h2', 'Favorite Readings')
    cy.get('.favorited-reading').contains('Your irresistible sense of humor makes you very popular among friends and others you meet today. It would also enthuse people who you work with.You will feel inactive and exhausted today. This is a total contrast to your active true self. Also you\'ll get easily agitated today.You have such a cautious nature that you become very suspicious of people, their motives, situations, etc. You will end up analyzing everything before you make any commitments which might work in your favor today.You will be happy and energetic today. You\'ll feel as if you could take on any challenges. Your joy would be very infectious making others you meet also happy.Meditation will help you deal with the stress and tension that you suffer from. The stress would also take away your physical strength and stamina.')
    cy.get('.header').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.signs-wrapper').children().first().click()
    cy.url().should('eq', 'http://localhost:3000/Aries')
    cy.contains('h2', 'Select a Time Period to See Reading for Aries:')
    cy.get('img[alt="today"]')
    cy.get('img[alt="yesterday"]')
    cy.get('img[alt="weekly"]')
    cy.contains('p', 'Make a selection above to see your reading!')
    cy.intercept("GET", 'https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=Aries&timePeriod=weekly', {
      statusCode: 200,
      fixture: `.././fixtures/aries-weekly.json`
    });
    cy.get('img[alt="weekly"]').click()
    cy.get('.reading').contains('A sense of joy and cheerfulness will fill you. Through introspection and by exercising your mind on things, which are not mundane, you will rise above the stress and strain of routine existence. So, enjoy.Your patience, tenacity, commitment and purposeful nature will make it easier for you to deal with your problems as well as of others.Being feeling insecure, you really need the help of someone to boost your energy and enthusiasm.You will find yourself aloof from your family members. The fault is more from your side. Think for a little while what, other than bringing money, you have done for your kids as a fatherAlthough you act as a tough guy outwardly, the delicate and loving nature in you will get blossomed these days, making you more lovable and caring than ever before.Women will have a favourable week, both at workplace and home. You will find yourself more appreciated and cared by others.It will be better for you to make some delay in beginning the new projects. As a man tend to have success in all you dealt with, this new one is not supposed to bring you the benefits you expect.Children will depend more on you for their problems. As a mother, you will be able to help them out of it with your practical and intelligent mind.You need plenty of changes and challenges these days to boost up your physical stamina. Monotony and persistent lack of stimulation need to be guarded against.Your love for games and small challenges will make the journey scheduled for you this week a pleasant one.')
    cy.get('.favorite-button').click()
    cy.get('.favorites-page-icon').click()
    cy.get('.favorites-wrapper').children()
      .should('have.length', 2)
    cy.get(':nth-child(1) > .favorite-button').click()
    cy.get('.favorites-wrapper').children()
      .should('have.length', 1)
    cy.get(':nth-child(1) > .favorite-button').click()
    cy.contains('p', 'Add a reading to your favorites to see it here')
  });

  it('should handle sad path - 500 level error', () => {
    cy.get('.signs-wrapper').children().last().click()
    cy.url().should('eq', 'http://localhost:3000/Pisces')
    cy.intercept("GET", 'https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=Pisces&timePeriod=yesterday', {
      statusCode: 500,
      fixture: `.././fixtures/pisces-yesterday.json`
    });
    cy.get('img[alt="yesterday"]').click()
    cy.contains('.App > :nth-child(2) > div', 'Sorry, something went wrong. Please go home and try again.')
  });


  it('should handle sad path - 400 level error', () => {
    cy.get('.signs-wrapper').children().last().click()
    cy.url().should('eq', 'http://localhost:3000/Pisces')
    cy.intercept("GET", 'https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=Pisces&timePeriod=yesterday', {
      statusCode: 404,
      fixture: `.././fixtures/pisces-yesterday.json`
    });
    cy.get('img[alt="yesterday"]').click()
    cy.contains('.App > :nth-child(2) > div', 'Sorry, something went wrong. Please go home and try again.')
  });

  it('should handle sad path - bad url path', () => {
    cy.visit('http://localhost:3000/nonsense')
    cy.contains('.App > :nth-child(2) > div', 'Sorry, something went wrong. Please go home and try again.')
    cy.visit('http://localhost:3000/dkfjrtgkdj')
    cy.contains('.App > :nth-child(2) > div', 'Sorry, something went wrong. Please go home and try again.')
  });
});