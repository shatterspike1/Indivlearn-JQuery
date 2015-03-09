function publisherView(id){

    console.log('viewing set: ', id)

    $.ajax({
        type: 'GET',
        url: "https://api.deckbrew.com/mtg/sets/" + id,
        crossDomain: true
    }).done(function (set) {
        
        console.log(set)

        $.get("templates/gameView.jade", function(template) {

            var html = jade.render(template, {item: set})
            
            $("#details").html(html)

        })

    })

}