const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".valor").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.43

    const convertValues = inputCurrencyValue/dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertValues)

}

convertButton.addEventListener("click", convertValues)