var index = 1;

$(document).ready(function () {
    for (i = 1; i < 101; i++) {
        createAccusation(index);
        index++;



    }
})


function createAccusation(index) {
    var accusation = $('<h3>').attr('id', 'header' + index);
    $(document.body).append(accusation);
    $(accusation).text('Accusation ' + index);
    $(accusation).click(function () {
        alert('Accusation ' + index + ': I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!')
        //ex: Accusation 7: I accuse Jane, with the paper clip in the copy room!')
    })

}