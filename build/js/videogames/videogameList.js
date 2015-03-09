function listVideogames(){

    console.log('listing MTG cards')    

    $.ajax({
        type: 'GET',
        url: "https://api.deckbrew.com/mtg/cards",
        crossDomain: true
    }).done(function (cards) {
        
            console.log(cards)
            
            $.get("templates/gameList.jade", function(template) {

                var html = jade.render(template, {items: cards})            

                $("#list").html(html)

                gameView(cards[1].id)

        })
    })
    
}