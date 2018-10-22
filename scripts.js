var i = 1;
var friends = ['Dennis', 'Steve', 'Everett', 'Anna', 'Ashley'];
var locations = ['kitchen', 'bathroom', 'master bedroom', 'study', 'cellar', 'foyer', 'dining room', 'guest bedroom', 'pantry', 'garden'];
var weapons = ['chainsaw', 'ninja star', 'hammer', 'toaster', 'samurai sword', 'nunchucks', 'woodchipper', 'flamethrower',
    'drone covered in razor blades', 'pencil sharpener', 'black mamba', 'leftovers that were inproperly stored',
    'song "courtesy of the red white and blue" played on repeat', 'Holy Hand Grenade', 'steamroller', 'nail file',
    'triple-decker bacon cheeseburger sandwiched between two grilled cheese sandwiches with an egg added', 'live performance of "The Finger Song"',
    'ricin', 'kindness'];

$(document).ready(function () {
    for (i = 0; i < 100; i++) {
        var friendsModulus = i % 5;
        var locationsModulus = i % 10;
        var weaponsModulus = i % 20;
        var accusation = $('<h3>').attr('id', 'header' + i);
        $(document.body).append(accusation);
        $(accusation).text('Accusation ' + (i + 1));
        createAccusation(i, friendsModulus, locationsModulus, weaponsModulus);
    }

    function createAccusation(i, friendsModulus, locationsModulus, weaponsModulus) {
        $(accusation).click(function () {
            alert('Accusation ' + (i + 1) + ': I accuse ' + friends[friendsModulus] + ', with the ' + weapons[weaponsModulus] + ' in the ' + locations[locationsModulus])
        });

    }
})


