const countriesContainer = document.querySelector(".countries");
const btnLoad = document.querySelector("#btn-load");
const headerEl = document.querySelector(".header");

btnLoad.onclick = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    headerEl.classList.add("hide-header");
    countries.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("country-card");
      const flagImage = document.createElement("img");
      flagImage.classList.add("flag-image");
      flagImage.src = country.flags.png;
      const countryName = document.createElement("h3");
      countryName.textContent = `Country: ${country.name.common}`;
      const capitalCity = document.createElement("h4");
      capitalCity.textContent = `Capital city: ${country.capital}`;
      const language = document.createElement("p");
      language.textContent = country.languages
        ? `Languages: ${Object.values(country.languages).join(", ")}`
        : "Languages: Not available";
      const population = document.createElement("p");
      population.textContent = `Population: ${country.population}`;

      countriesContainer.appendChild(countryCard);
      countryCard.append(
        flagImage,
        countryName,
        capitalCity,
        language,
        population
      );
    });
  } catch (error) {
    console.error(error);
  }
};
