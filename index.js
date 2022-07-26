// Create country card HTML function
function createCountryCard(obj) {
  const element = `
  <div class="col-3">
    <div class="country-card my-2">
      <img id="flag" src="${obj.flags.png}" alt="">
      <div class="country-card-body">
        <h2 id="name">${obj.name.common}</h2>
        <h4>Population: <span id="population">${obj.population}</span></h4>
        <h4>Capital: <span id="capital">${obj.capital}</span></h4>
        <h4>Continent: <span id="continent">${obj.continents[0]}</span></h4>
      </div>
    </div>
  </div>
  `
  return element;
}

// Select row to insert country cards
const countries = document.getElementById("countries")

// API call to list all countries
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then((data) => {

    // Iterate through all countries and create HTML populated with country API data
    Object.values(data).forEach((country) => {
      // Insert populated HTML to main page
      countries.insertAdjacentHTML("beforeend", createCountryCard(country))
    })
  })

// Select search form
const form = document.querySelector('#search-box')

// Upon form submission, search API by country name
form.addEventListener('submit', event => {
  event.preventDefault()
  const input = document.getElementById('search').value
  fetch(`https://restcountries.com/v3.1/name/${input}`)
    .then(response => response.json())
    .then((data) => {
      // Alert user if country not found
      if(data.status === 404){
        alert("That country doesn't exist! Please try again")
      } else {
      // Populate card with data
        countries.insertAdjacentHTML("beforeend", createCountryCard(data[0]))
      }
    })
})
