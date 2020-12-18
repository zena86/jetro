

function cardFilter(cardType)
{
    let allCards = $(".card__item");
    allCards.show();
    
    if (cardType==="all")    
        return;    
    
    for(let i=0; i<allCards.length; i++)
    {
        let card = $(allCards[i]);        
        let cardGroup = card.attr("data-type");
        if (cardType !== cardGroup)        
            card.hide();       
    }
}