var newsData = {

    "data": [
        {
            "img": "assets/img/home/news_1.jpg",
            "title": "Casting a surgical safety net to reduce readmissions",
            "description": "Reducing readmission rates and improving Veterans" + "&#8217;" + " experience."
        },
        {
            "img": "assets/img/home/news_2.jpg",
            "title": "Improving LGBTQ+ Veterans" + "&#8217;" + " Whole Health through PRIDE",
            "description": "PRIDE in all who served offers a safety net for LGBTQ+ Veterans"
        },
        {
            "img": "assets/img/home/news_3.jpg",
            "title": "Innovators receive training to refine Veteran-centric solutions",
            "description": "VA Base Camp and Diffusion Academy training for innovative employees"
        },
        {
            "img": "assets/img/home/news_3.jpg",
            "title": "Innovators receive training to refine Veteran-centric solutions",
            "description": "VA Base Camp and Diffusion Academy training for innovative employees"
        }                               
    ]                                         
}


// render dynamic gallery data
newsData.data.forEach(news => $('.owl-carousel.usa-card-group').append("<div class='usa-card__container item'>" + "<a class='card-group-tags' href=''>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class='usa-card__img'>" + "<img  src='" + news.img + "'alt='" + news.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h5>" + news.title + "</h5>" + "<p>" + news.description + "</p>" + "</div>" + "</a>" + "</div>")); 


// remove empty elements
$(".usa-card__body h5:empty").remove();
$(".usa-card__body p:empty").remove();
