const convertButton = document.querySelector(".convert-button");
const currencyselect1 = document.querySelector(".moeda1");
const currencyselect2 = document.querySelector(".moeda2");

function convertValues1() {}

// faz a conversão da moeda, mudança de moeda e conversão
function convertValues() {
  const inputCurrencyValue = document.querySelector(".valor").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const rates = {
    real: 1,
    dolar: 5.43,
    euro: 6.35,
    libra: 7.34,
    bitcoin: 587723.16,
  };

  const from = currencyselect1.value;
  const to = currencyselect2.value;

  if (from === to) {
    alert("TROQUE A MOEDA");
    return;
  }

  // valor em reais
  const valueInBRL = inputCurrencyValue * rates[from];

  // conversão para a moeda final
  const convertedValue = valueInBRL / rates[to];

  // formatador de acordo com a moeda final
  const formatters = {
    real: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
    dolar: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }),
    euro: new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }),
    libra: new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }),
    bitcoin: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 4,
    }),
  };

  currencyValueToConvert.innerHTML =
    formatters[from].format(inputCurrencyValue);
  currencyValueConverted.innerHTML = formatters[to].format(convertedValue);
}

function changeCurrency1() {
  const currencyName1 = document.querySelector("#currency-name-1");
  const currencyImage1 = document.querySelector("#currency-img");

  if (currencyselect1.value == "dolar") {
    currencyName1.innerHTML = "Dólar americano";
    currencyImage1.src = "./assets/dolar.png";
  }

  if (currencyselect1.value == "euro") {
    currencyName1.innerHTML = "Euro";
    currencyImage1.src = "./assets/euro.png";
  }

  if (currencyselect1.value == "libra") {
    currencyName1.innerHTML = "Libra Esterlina";
    currencyImage1.src = "./assets/libra.png";
  }

  if (currencyselect1.value == "bitcoin") {
    currencyName1.innerHTML = "Bitcoin";
    currencyImage1.src = "./assets/bitcoin.png";
  }

  if (currencyselect1.value == "real") {
    currencyName1.innerHTML = "Real brasileiro";
    currencyImage1.src = "./assets/real.png";
  }

  convertValues();
}

//troca imagem e nome da moeda na conversão
function changeCurrency() {
  const currencyName = document.querySelector("#currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencyselect2.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencyselect2.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencyselect2.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencyselect2.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  if (currencyselect2.value == "real") {
    currencyName.innerHTML = "Real brasileiro";
    currencyImage.src = "./assets/real.png";
  }

  convertValues();
}

currencyselect2.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
currencyselect1.addEventListener("change", changeCurrency1);
