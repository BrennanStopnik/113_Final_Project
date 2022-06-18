


var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}


$('#button').click( () => {
    $('#placeholder2').html(dice.roll());
    $("#placeholder1").html(dice.roll());
});

