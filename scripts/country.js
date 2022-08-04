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

// Set page title to country name
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const countryName = urlParams.get('country')
const headTitle = document.getElementById('head-title')
headTitle.innerText = countryName

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
.then(response => response.json())
.then((data) => {

  // Fetch country data and assign to variable
  const country = Object.values(data)[0]

  // Set flag
  document.getElementById('country-flag').src = country.flags.png

  // Set country header
  document.getElementById('country-name').innerText = country.name.common

  // Set country official name, capital and population
  document.getElementById('country-official-name').innerText = country.name.official
  document.getElementById('country-capital').innerText = country.capital
  document.getElementById('country-population').innerText = country.population.toLocaleString('en-US')

  // Set country languages to be first three
  const threeLanguages = Object.values(country.languages).slice(0,3)
  document.getElementById('country-languages').innerText = threeLanguages.join(', ')

  // Set country currency, web domain
  document.getElementById('country-currency').innerText = Object.values(country.currencies)[0].name
  document.getElementById('country-web-domain').innerText = country.tld[0]

  // Set country calling code
  const callingCode = country.idd.root + country.idd.suffixes[0]
  document.getElementById('country-calling-code').innerText = callingCode

  // Set FIFA code
  document.getElementById('country-fifa').innerText = country.fifa

  // Select country-borders div
  const countryBorders = document.getElementById('country-borders')

  // Get first 4 border country codes of country and begin iteration
  const fourBorders = country.borders.slice(0,4)
  fourBorders.forEach(border =>
  // API call passing country codes, generates new html, populated with country name as text and country page as href
    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    .then(response => response.json())
    .then((data) => {
      const borderCountryName = Object.values(data)[0].name.common
      const borderHTML = `<a href='country.html?country=${borderCountryName}' class="border" id="border">${borderCountryName}</a>`
      countryBorders.insertAdjacentHTML("beforeend", borderHTML)
    })
  )
})
