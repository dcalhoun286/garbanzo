function countBeans(){
    var image = '<img src="garbanzo.png" alt="garbanzo">';
    var output = '';
    var count = prompt('How many bowls of garbanzo beans would you like?');

    for (var index =0; index < count; index++){
        output += image
    }

    return output;
}