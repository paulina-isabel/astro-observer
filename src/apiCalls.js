const handleError = (response) => {
  if(!response.ok) {
    throw new Error(`Error: ${response.status} -- Please refresh the page or go back home.`)
  }
  console.log(response, response.json())
  return response.json()
};

const getData = async(url) => {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc9c0e8e5fmshb0c38a31a8522adp1e5430jsn80040d7c0eb8',
      'X-RapidAPI-Host': 'daily-horoscope-api.p.rapidapi.com'
    }
  })
  let data = await handleError(response)
  return data
};

export default getData;