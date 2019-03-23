
//Target the submit button in the HTML doc
const searchInput = document.querySelector("#bitcoin");

//Run the search function when the submit button is clicked
function bitcoinDateResult() {
  //Gather the requested date to build our API URL
  let bitcoinDate = " ";
  bitcoinDate = document.getElementById("bitcoinInput").value;
  console.log(bitcoinDate);
  const BASE_URL =
    "https://api.coindesk.com/v1/bpi/historical/close.json?start=" +
    bitcoinDate +
    "&end=" +
    bitcoinDate;
  console.log(BASE_URL)

  //Fetch the API data
  fetch(BASE_URL)
  .then(resp => resp.json())
  .then(function(data) {
    // let dataBitcoin = JSON.parse(data);
    // console.log(dataBitcoin);
  console.log(data.bpi)
  })
  .catch(error => console.error(error));
};

//Listen for the click on the submit button
searchInput.addEventListener("click", bitcoinDateResult);