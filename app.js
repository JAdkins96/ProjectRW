const refNumberButton = document.getElementById('refNumberButton');
const refNumberInput = document.getElementById('refNumberInput');
const formattedNumbers = document.getElementById('formattedNumbers');

refNumberButton.addEventListener('click', () => {
const string = refNumberInput.value 
const string1 = string.replaceAll("Shipment ID", "/")
const string2 = string1.replaceAll('Customer Ref #', "/")
formattedNumbers.innerHTML = string2
})

