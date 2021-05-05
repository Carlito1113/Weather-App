class UI {
  constructor() {
    this.uiContainer = document.getElementById('weather');
    this.city;
    this.defaultCity = 'tokyo';
  }

  populateUI(data) {
    this.uiContainer.innerHTML = `
      <div>
        <h5>${data.name}</h5>
        <h6>High of ${data.main.temp_max}. Low of ${data.main.temp_min}.</h6>
        <p>Weather conditions: ${data.weather[0].description}</p>
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
