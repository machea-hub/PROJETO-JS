const convertButton = document.querySelector(".convert-button");
const currencyselect = document.querySelector(".moeda2");

// faz a conversão da moeda, mudança de moeda e conversão
function convertValues() {
  const inputCurrencyValue = document.querySelector(".valor").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  console.log(currencyselect.value);

  const dolarToday = 5.43;
  const euroToday = 6.35;
  const libraToday = 7.34;
  const bitToday = 587723.16;

  if (currencyselect.value == "real") {
    alert("TROQUE A MOEDA")
  }

  if (currencyselect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencyselect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencyselect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencyselect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 4,
    }).format(inputCurrencyValue / bitToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}


//troca imagem e nome da moeda na conversão
function changeCurrency(){
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencyselect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencyselect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if(currencyselect.value == "libra"){
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencyselect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }


   convertValues() 
}


currencyselect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);
