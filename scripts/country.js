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



//     function createCountryCard(obj) {
//       return `<div class="col-lg-3">
//                 <div class="country-card m-4">
//                   <a id='link' >
//                     <img id="flag" src="${obj.flags.png}" alt="">
//                     <div class="country-card-body">
//                       <h2 id="name">${obj.name.common}</h2>
//                       <h4>Population: <span id="population">${obj.population.toLocaleString('en-US')}</span></h4>
//                       <h4>Capital: <span id="capital">${obj.capital}</span></h4>
//                       <h4>Region: <span id="continent">${obj.continents[0]}</span></h4>
//                     </div>
//                   </a>
//                 </div>
//               </div>`
//     }


// //     createCountryCard(countryList)

// // Select row to insert country cards
// const countries = document.getElementById("countries")

// // Create global array of countries
// // let countryList = []

// // Method to show all countries
// // const listAllCountries = () => {
//   // Fetch all countries
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(response => response.json())
//     .then((data) => {
//       // console.log(data)
//       // Create custom objects, add to countryList array
//       //  foo = Object.values(data).map(country => {
//       //   return {
//       //     flag: country.flags.png,
//       //     name: country.name.common,
//       //     population: country.population,
//       //     capital: country.capital,
//       //     continent: country.continents[0],
//       //   }
//       // })
//       console.log(data[0])

//       // // Sort countries by name
//       // countryList = Object.values(countryList).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

//       // countryList.forEach((country) => {
//       //   // Insert populated HTML to main page
//         countries.insertAdjacentHTML("beforeend", createCountryCard(data[0]))
//       // })
//     })

// // }
