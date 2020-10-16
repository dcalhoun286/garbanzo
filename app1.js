function countBeans(){
    var image = '<img src="garbanzo.png" alt="garbanzo">';
    /* source of image is found at https://unsplash.com/photos/h83Rm3njjcg */
    var output = '';
    var count = prompt('How many bowls of garbanzo beans would you like?');

    for (var index =0; index < count; index++){
        output += image
    }

    return output;
}