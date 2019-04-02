
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
    //Narrow down the search filter to the price
    let dataBitcoin;
    dataBitcoin = data.bpi;
    let dataBitcoinPrice = Object.values(dataBitcoin);
    //Round up the price to an integer
    let bitcoinPriceRoundUp = "$" + Math.floor(dataBitcoinPrice[0]);
    //Target the div on the HTML file to display the price
    document.getElementById(
      "bitcoinPrice"
    ).innerHTML = bitcoinPriceRoundUp;
    
    console.log(bitcoinPriceRoundUp);
  })
  .catch(error => console.error(error));
};

//Listen for the click on the submit button
searchInput.addEventListener("click", bitcoinDateResult);
