var newsData = {

    "data": [
        {
            "img": "../assets/img/diffusion-practices/card4.jpg",
            "title": "Improving Veteran access to eyeglasses with automated ordering",
            "description": "Team develops process to reduce wait time for eyeglasses",
            "url": "https://news.va.gov/123828/improving-access-eyeglasses-automated-ordering/"
        },
        {
            "img": "assets/img/home/card5.jpg",
            "title": "Improving communication and access for prosthetic limbs",
            "description": "VA developed system enhances Veteran experience through improved transparency.",
            "url": "https://news.va.gov/128023/improving-communication-access-prosthetic-limbs/"
        },
        {
            "img": "../assets/img/diffusion-practices/card6.jpg",
            "title": "Improving Veterans’ sleep with white noise",
            "description": "White Noise Project has 97% positive rating among Veterans",
            "url": "https://news.va.gov/122343/improving-veterans-sleep-with-white-noise/"
        },
        {
            "img": "../assets/img/diffusion-practices/card7.jpg",
            "title": "Contraception on Demand program expands access to reproductive care",
            "description": "Improving Veteran experiences with reproductive health care at VA",
            "url": "https://news.va.gov/121828/contraception-on-demand-expands-reproductive/"
        }

        /*
                {
            "img": "../assets/img/diffusion-practices/card1.jpg",
            "title": "PRIDE in All Who Served",
            "description": "On June 4th, Diffusion of Excellence program and iNET investee, PRIDE in All Who Served, presented at the Academy Health Conference about implementation of the program.",
            "url": "https://marketplace.va.gov/innovations/pride-in-all-who-served-reducing-healthcare-disparities-for-lgbt-veterans"
        },
        {
            "img": "../assets/img/diffusion-practices/card2.jpg",
            "title": "Physical Therapy Embedded Within PACT",
            "description": "PACT is one of Diffusion of Excellence" + "&#39;" + "s newest programs and allows Veterans to more readily access same-day care for musculoskeletal, neurological, and pain complaints.",
            "url": "https://marketplace.va.gov/innovations/pt-embedded-within-pact"
        },
        {
            "img": "../assets/img/diffusion-practices/card3.jpg",
            "title": "VIONE National HeRO Award",
            "description": "VIONE won the Calendar Year 2022 Quarter 1 National HeRO Award.",
            "url": "https://blogs.va.gov/VAntage/70709/vione-changes-way-va-handles-prescriptions/?msclkid=1fdd98b8d06c11eca781bc0d1f5db366"
        }

        */
    ]                                         
}


// render dynamic gallery data
newsData.data.forEach(news => $('.owl-carousel.usa-card-group.practices--news').append("<div class='usa-card__container'>" + "<a class='card-group-tags' href='" + news.url + "'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class='usa-card__img'>" + "<img  src='" + news.img + "'alt='" + news.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + news.title + "</h4>" + "<p>" + news.description + "</p>" + "</div>" + "</a>" + "</div>")); 


// remove empty elements
$(".usa-card__body h4:empty").remove();
$(".usa-card__body p:empty").remove();


var minheight = $('.owl-carousel.usa-card-group.practices--news').height();
$('.owl-carousel.usa-card-group.practices--news .usa-card__container').css("min-height", minheight);
