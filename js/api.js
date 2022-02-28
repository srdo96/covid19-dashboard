fetch("https://api.covid19api.com/summary")
  .then((res) => res.json())
  .then((data) => dashBoard(data));

const dashBoard = (data) => {
  console.log(data);
  const country = document.getElementById("country-name");
  country.innerText = "Global";
  const newConfirmed = document.getElementById("new-confirmed");
  newConfirmed.innerText = `${data.Global.NewConfirmed}`;
  const totalConfirmed = document.getElementById("total-confirmed");
  totalConfirmed.innerText = `${data.Global.TotalConfirmed}`;
  const newDeaths = document.getElementById("new-deaths");
  newDeaths.innerText = `${data.Global.NewDeaths}`;
  const totalDeaths = document.getElementById("total-deaths");
  totalDeaths.innerText = `${data.Global.TotalDeaths}`;
};
const searchBtn = () => {
  const country = document.getElementById("search-country").value;

  console.log(country);
};
