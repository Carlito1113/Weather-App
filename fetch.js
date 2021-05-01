class Fetch {
  async getCurrent(input) {
    const myKey = '023779ffdc30d5ad709a6318ac74d817';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
