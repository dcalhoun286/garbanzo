function favThings(color, number, city){
    var color = prompt('Please enter your favorite color')
    var number = prompt('Pick a number 1-10')

    

    while (isNaN(Number(number))){
        number = prompt('That is not a number. Please enter a number.') 
    }
    var city = prompt('Please enter your favorite city')

    return document.write(
        '<li>' + color + '</li>' +
        '<li>' + number + '</li>' +
        '<li>' + city + '</li>'
    )
}