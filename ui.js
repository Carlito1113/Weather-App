class UI {
  constructor() {
    this.uiContainer = document.getElementById('weather');
    this.city;
    this.defaultCity = 'tokyo';
  }

  populateUI(data) {
    this.uiContainer.innerHTML = `
      <div>
      <div id="forecast-card">
        <h5 id="city">${data.name}</h5>
        <h6 id="temperature">High of ${Math.round(data.main.temp_max)}, Low of ${Math.round(data.main.temp_min)}</h6>
        <p id="weather-conditions">Weather conditions: ${data.weather[0].description}</p>
        </div>
        <button id="save-city-btn" class="btn">Save City</button>
      </div>
    `;
  }

  saveToLS(data) {
    localStorage.setItem('city', JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem('city' === null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem('city'));
    }

    return this.city;
  }
}
