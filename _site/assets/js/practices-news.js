var newsData = {

    "data": [
        {
            "img": "../assets/img/diffusion-practices/card1.jpg",
            "title": "PRIDE in All Who Served",
            "description": "On June 4th, Diffusion of Excellence program and iNET investee, PRIDE in All Who Served, presented at the Academy Health Conference about implementation of the program.",
            "url": ""
        },
        {
            "img": "../assets/img/diffusion-practices/card2.jpg",
            "title": "Physical Therapy Embedded Within PACT",
            "description": "PACT is one of Diffusion of Excellence" + "&ndash;" + "s newest programs and allows Veterans to more readily access same day care for musculoskeletal, neurological, and pain complaints",
            "url": ""
        },
        {
            "img": "../assets/img/diffusion-practices/card3.jpg",
            "title": "VIONE National HeRo Award",
            "description": "VIONE won the Calendar Year 2022 Quarter 1 National HeRO Award.",
            "url": ""
        }
    ]                                         
}


// render dynamic gallery data
newsData.data.forEach(news => $('.owl-carousel.usa-card-group').append("<div class='usa-card__container'>" + "<a class='card-group-tags' href='" + news.url + "'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class='usa-card__img'>" + "<img  src='" + news.img + "'alt='" + news.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + news.title + "</h4>" + "<p>" + news.description + "</p>" + "</div>" + "</a>" + "</div>")); 


// remove empty elements
$(".usa-card__body h4:empty").remove();
$(".usa-card__body p:empty").remove();


var minheight = $('.owl-carousel').height();
$('.owl-carousel .usa-card__container').css("min-height", minheight - 20);