function listPublishers(){

    console.log('listing MTG sets')    

    $.ajax({
        type: 'GET',
        url: "https://api.deckbrew.com/mtg/sets",
        crossDomain: true
    }).done(function (sets) {
        
            console.log(sets)
            
            $.get("templates/publisherList.jade", function(template) {

                var html = jade.render(template, {items: sets})            

                $("#list").html(html)

                publisherView(sets[0].id)

        })
    })
    
}