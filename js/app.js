const purchasePrice = document.querySelector('#purchase-price')
const stockQuantity = document.querySelector('#stock-quantity')
const currentPrice = document.querySelector('#current-price')
const checkButtom = document.querySelector('#check-buttom')
const output = document.querySelector('#output')

function calculateInValue (currentPrice, stockQuantity, purchasePrice) {
  return Number(currentPrice * stockQuantity - purchasePrice * stockQuantity)
}

function calculateInPercentage (netCash) {
  return (netCash * 100) / (purchasePrice.value * stockQuantity.value)
}

function displayOutput (netCash, cashPercentage) {
  if (netCash > 0) {
    output.innerText = `you made profit of ${netCash} in percentage your profit is ${cashPercentage}`
    output.style.backgroundColor = 'green'
  } else {
    output.innerText = ' loss'
    output.innerText = `you made loss of ${netCash} in percentage  & your loss is ${cashPercentage}`
    output.style.backgroundColor = 'red'
  }
}
function giveOutput () {
  const netCash = calculateInValue(
    currentPrice.value,
    stockQuantity.value,
    purchasePrice.value
  )

  const cashPercentage = calculateInPercentage(netCash)

  displayOutput(netCash, cashPercentage)
}
checkButtom.addEventListener('click', giveOutput)
