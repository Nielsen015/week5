let countries = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda','Nigeria','South Africa'];

let dropdown = document.getElementById('countries');

countries.forEach(element => {
    const option = document.createElement('option');

    // Populates options
    option.value = element;
    option.text = element;

    // populate dropdown
    dropdown.appendChild(option);
    
});