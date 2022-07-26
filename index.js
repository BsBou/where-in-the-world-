// Select row to insert country cards
const countries = document.getElementById("countries")

// API call to list all countries
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then((data) => {

    // Iterate through all countries and create HTML populated with country API DATA
    Object.values(data).forEach((country) => {
      const countryCard = `
        <div class="col-3">
          <div class="country-card my-2">
            <img id="flag" src="${country.flags.png}" alt="">
            <div class="country-card-body">
              <h2 id="name">${country.name.common}</h2>
              <h4>Population: <span id="population">${country.population}</span></h4>
              <h4>Capital: <span id="capital">${country.capital}</span></h4>
              <h4>Continent: <span id="continent">${country.continents[0]}</span></h4>
            </div>
          </div>
        </div>
      `
      // Insert populated HTML to main page
      countries.insertAdjacentHTML("beforeend", countryCard)
    })
  })
