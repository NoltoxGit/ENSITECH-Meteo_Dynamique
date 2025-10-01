// BASE DU PROJET
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", () => {
 resultDiv.innerHTML = "Tu as cliqué sur le bouton !";
});

// APPEL API DE "OPENWEATHERMAP"
const API_KEY = "781c6da5ae474f353a36882a9d236363";
searchBtn.addEventListener("click", async () => {
 const city = document.getElementById("cityInput").value;
 const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`);
 
 const data = await response.json();
 if (data.cod === "404") {
 resultDiv.innerHTML = "Ville introuvable.";
 return;
 }


 // AFFICHAGE DES DONNÉES MÉTÉO EN HTML
 resultDiv.innerHTML = `
 <h2>${data.name}</h2>
 <p>Température : ${data.main.temp}°C</p>
 <p>Météo : ${data.weather[0].description}</p>
 `;
});

// ICÔNE DE LA  MÉTÉO
const icon = data.weather[0].icon;
resultDiv.innerHTML = `
 <h2>${data.name}</h2>
 <p>${data.main.temp}°C</p>
 <p>${data.weather[0].description}</p>
 <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
`;

// STOCKAGE EN LOCALSTORAGE
localStorage.setItem("lastCity", city);

// CHARGEMENT DE LA PAGE
window.addEventListener("load", () => {
 const lastCity = localStorage.getItem("lastCity");
 if (lastCity) {
 document.getElementById("cityInput").value = lastCity;
 searchBtn.click();
 }
});
