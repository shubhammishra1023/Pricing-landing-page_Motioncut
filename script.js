function toggleBilling() {
    const toggleSwitch = document.getElementById('toggle');
    const priceElements = document.querySelectorAll('.price');

    priceElements.forEach(priceElement => {
        const currentPrice = parseFloat(priceElement.textContent);
        const newPrice = toggleSwitch.checked ? currentPrice * 12 : currentPrice / 12;
        priceElement.textContent = newPrice.toFixed(2);
    });

    const unitElements = document.querySelectorAll('.unit');
    unitElements.forEach(unitElement => {
        unitElement.textContent = toggleSwitch.checked ? 'year' : 'month';
    });
}

function toggleCurrency() {
    const currencyToggleSwitch = document.getElementById('currency-toggle');
    const currencyElements = document.querySelectorAll('.currency');

    currencyElements.forEach(currencyElement => {
        const currentCurrency = currencyElement.textContent;
        currencyElement.textContent = currencyToggleSwitch.checked ? '₹' : '$';
    });
}