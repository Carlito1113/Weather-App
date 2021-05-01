class UI {
  constructor() {
    this.uiContainer = document.getElementById('weather');
    this.city;
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
}
