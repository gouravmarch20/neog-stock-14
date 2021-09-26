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
    output.innerText = `you made profit of ${netCash.toFixed(2)}₹
     or ${cashPercentage.toFixed(2)} %`
    output.style.backgroundColor = 'green'
    output.style.fontWeight = 'bolder'
  } else {
    output.innerText = ' loss'
    output.innerText = `you made loss of ${netCash.toFixed(2)}₹
    or  ${cashPercentage.toFixed(2)} %`
    output.style.backgroundColor = '#6A1B4D'
    output.style.color = '#E03B8B '
    output.style.fontWeight = 'bolder'
  }
}
function giveOutput () {
  if (currentPrice.value == false) {
    return alert("inproper data given by you ")
  }
  const netCash = calculateInValue(
    currentPrice.value,
    stockQuantity.value,
    purchasePrice.value
  )

  const cashPercentage = calculateInPercentage(netCash)

  displayOutput(netCash, cashPercentage)
}
checkButtom.addEventListener('click', giveOutput)
