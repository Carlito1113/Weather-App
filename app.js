const ft = new Fetch();
const ui = new UI();

const weatherInput = document.getElementById('weather-input');
const weatherBtn = document.getElementById('submit-btn');

weatherBtn.addEventListener('click', () => {
  const currentVal = weatherInput.value;

  ft.getCurrent(currentVal).then((data) => {
    ui.populateUI(data);
    // ui.saveToLS(data);
  })
})