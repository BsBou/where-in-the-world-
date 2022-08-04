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
const countryName = urlParams.get('country').toString()
const headTitle = document.getElementById('head-title')
headTitle.innerText = countryName

// const newcountry = countryName.replace(/^%20/, '')
// console.log(newcountry)
// const aruba = '%20Aruba'
// const nearuba = aruba.replace(/^%20/, '')

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
.then(response => response.json())
.then((data) => {

  // Fetch country data and assign to variable
  const country = Object.values(data)[0]
  console.log(country)
  // console.log(country.idd)
  // console.log(callingCode)
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



})
