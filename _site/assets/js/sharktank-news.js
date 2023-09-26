var newsData = {

    "data": [
        {
            "img": "../assets/img/sharktank/sharktank-bootcamp.jpg",
            "title": "Working with the Community to Save Veterans Lives",
            "description": "The VMET program assists in responding to calls involving local law enforcement interactions with veterans in crisis. This proactive outreach approach, which includes a VA clinician and VA police officer, is a first of its kind VA nationwide program to help reduce the number of veteran suicides.",
            "url": "#"
        },
        {
            "img": "../assets/img/sharktank/sharktank-winners-revealed.jpg",
            "title": "2021 VHA Shark Tank Winners Revealed at iEX",
            "description": "16 finalists entered the waters for the 2021 VHA Shark Tank competition and ten have emerged as the new cohort of Promising Practices for VHA IE. These 10 Promising Practices impact all aspects of Veteran care from a simple, standardized approach to VA operating room preparations to a high" + "&ndash;" + "tech approach to cancer care.",
            "url": "https://blogs.va.gov/VAntage/96799/2021-vha-shark-tank-competition-winners-revealed-at-iex/"
        },
        {
            "img": "../assets/img/sharktank/sharktank-2021-finalist-announced.jpg",
            "title": "2021 Shark Tank Finalists Announced",
            "description": "The VHA Shark Tank Competition is bringing frontline innovators into a rousing shark tank" + "&ndash;" + "style pitch competition to help spread their work to impact even more Veterans lives. Winning Promising Practices have been replicated more than 830 times across the country with 10 of them moving into National Diffusion and helping change Veteran care for the better.",
            "url": "https://blogs.va.gov/VAntage/94632/2021-vha-shark-tank-competition-finalists-announced/"
        },
        {
            "img": "../assets/img/sharktank/sharktank-2020-finalist-announced.jpg",
            "title": "2020 VHA Shark Tank Finalists Announced",
            "description": "Diffusion of Excellence announced its annual VHA Shark Tank Competition" + "&#8217;" + "s 15 Finalists. The Competition shines a spotlight on employees who are passionate about solving some of the toughest challenges across VHA. It also provides them with an opportunity to replicate and scale their practices further, while also elevating their platform to all levels of leadership for buy" + "&ndash;" + "in.",
            "url": "https://blogs.va.gov/VAntage/78744/vha-shark-tank-finalists-announced/"
        },
        {
            "img": "../assets/img/sharktank/sharktank.jpg",
            "title": "VHA Shark Tank Competition Spreads Innovation",
            "description": "How do you change a Veteran" + "&#8217;" + "s life? How do you save a Veteran" + "&#8217;" + "s life? Sometimes all you need is a simple sheet of paper, as shown by the surprisingly simple Suicide Alert Red Card practice. Other times it takes complex coordination with first responders and the surrounding community through a program like the Veterans Mental Evaluation Team " + "&#40;" + "VMET" + "&#41;" + ". From simple to complex, the winning practices " + "&ndash;" + " known as Gold Status Practices " + "&#40;" + "GSP" + "&#41;" + " " + "&ndash;" + " of the 2019 VHA Shark Tank Competition are all changing and saving Veteran lives.",
            "url": "https://news.va.gov/115494/va-method-stop-unnecessary-medications-award/"
        }
    ]                                         
}


// render dynamic gallery data
newsData.data.forEach(news => $('.owl-carousel.usa-card-group').append("<div class='usa-card__container item'>" + "<a class='card-group-tags' href='" + news.url + "'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class='usa-card__img'>" + "<img  src='" + news.img + "'alt='" + news.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h4>" + news.title + "</h4>" + "<p>" + news.description + "</p>" + "</div>" + "</a>" + "</div>")); 


// remove empty elements
$(".usa-card__body h4:empty").remove();
$(".usa-card__body p:empty").remove();