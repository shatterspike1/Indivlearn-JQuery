function gameView(id){

    console.log('viewing card: ', id)

    $.ajax({
        type: 'GET',
        url: "https://api.deckbrew.com/mtg/cards/" + id,
        crossDomain: true
    }).done(function (card) {
        
        console.log(card)

        $.get("templates/gameView.jade", function(template) {

            var html = jade.render(template, {item: card})
            
            $("#details").html(html)

        })

    })

}