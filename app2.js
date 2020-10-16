function favThings(color, number, city){
    var color = prompt('Please enter your favorite color.')
    var number = prompt('Please enter your favorite number.')  

    while (isNaN(Number(number))){
        number = prompt('That is not a number. Please enter your favorite number.') 
    }
    var city = prompt('Please enter your favorite city.')

    return document.write(
        '<li>' + color + '</li>' +
        '<li>' + number + '</li>' +
        '<li>' + city + '</li>'
    )
}