// Dark mode theme toggler
const themeSelector = document.getElementById('theme-selector')

// On click, toggle dark theme and change theme selector text
themeSelector.addEventListener('click', (event) => {

  const light = document.querySelectorAll('.theme--light')
  const darkThemeText = document.getElementById('theme--dark-text')
  const lightThemeText = document.getElementById('theme--light-text')

  light.forEach((el) => {
    el.classList.toggle('theme--dark')
    darkThemeText.classList.toggle('d-none')
    lightThemeText.classList.toggle('d-none')

  })
})


// Create country card HTML function
function createCountryCard(obj) {
  return `<div class="col-lg-3">
            <div class="country-card m-4">
              <a id='link' >
                <img id="flag" src="${obj.flag}" alt="">
                <div class="country-card-body">
                  <h2 id="name">${obj.name}</h2>
                  <h4>Population: <span id="population">${obj.population.toLocaleString('en-US')}</span></h4>
                  <h4>Capital: <span id="capital">${obj.capital}</span></h4>
                  <h4>Region: <span id="continent">${obj.continent}</span></h4>
                </div>
              </a>
            </div>
          </div>`
}

// Select row to insert country cards
const countries = document.getElementById("countries")

// Create global array of countries
let countryList = []

// Method to show all countries
const listAllCountries = () => {
  // Fetch all countries
  fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then((data) => {

      // Create custom objects, add to countryList array
      countryList = Object.values(data).map(country => {
        return {
          flag: country.flags.png,
          name: country.name.common,
          population: country.population,
          capital: country.capital,
          continent: country.continents[0],
        }
      })
      // Sort countries by name
      countryList = Object.values(countryList).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

      countryList.forEach((country) => {
        // Insert populated HTML to main page
        countries.insertAdjacentHTML("beforeend", createCountryCard(country))
      })
    })

}

// Show all countries upon page load
window.onload = (event) => {
  listAllCountries()
};

// Filter countries by name

// Select search form
const form = document.querySelector('#search')
form.addEventListener('input', event => {
  event.preventDefault()
  // Get user input
  const value = event.target.value
  // Filter countries by name, case insensitive
  const userSearch = countryList.filter(country => country.name.toLowerCase().includes(value.toLowerCase()))
  // Clear all countries from page
  countries.innerHTML = ''

  // Insert only filtered countries on page
  if(userSearch.length > 0){
    userSearch.forEach((country) => {
      countries.insertAdjacentHTML("beforeend", createCountryCard(country))
    })
  } else {
    // Error message if country doesn't exist
    countries.insertAdjacentHTML("beforeend", '<div> <p id="wrong-name">No country by that name!</p></div>')
    }
})

// Filter countries by region

// Get user selected
const selectRegion = document.querySelector('#select-region')
selectRegion.addEventListener('change', (event) => {
  const value = event.target.value;
  if (value === 'All'){
    countries.innerHTML = ''
    listAllCountries()
  } else {
      const userSelection = countryList.filter(country => country.continent === value)
      countries.innerHTML = ''
      userSelection.forEach((country) =>
      countries.insertAdjacentHTML("beforeend", createCountryCard(country))
      )
    }
})

// Delay card selection by 1s until DOM is populated
setTimeout(() => {
  // Select all country cards
  const linkCountry = document.querySelectorAll('a')

  // Iterate through all countries
  linkCountry.forEach(element => {
    element.addEventListener('click', (event) => {

      // Upon clicking a country get country name
      const countryName = event.currentTarget.querySelector('#name').innerHTML

      // Update card href with country name as URL params
      event.currentTarget.href = `country.html?${countryName}`
    })
  });
}, 1000);
