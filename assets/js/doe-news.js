var newsData = {

    "data": [
        {
            "img": "assets/img/home/news_1.jpg?v=2",
            "title": "Working with the Community to Save Veterans Lives",
            "description": "The VMET program assists in responding to calls involving local law enforcement interactions with veterans in crisis. This proactive outreach approach, which includes a VA clinician and VA police officer, is a first of its kind VA nationwide program to help reduce the number of veteran suicides.",
            "url": "https://blogs.va.gov/VAntage/99641/innovation-revolutionaries-working-with-the-community-to-save-veteran-lives/"
        },
        {
            "img": "assets/img/home/news_2.jpg?v=2",
            "title": "Federal Drive:  Diffusion Marketplace Showcases Staff Ideas for Innovative Care",
            "description": "Federal News Network" + "&#8217;" + "s Jory Heckman spoke with Diffusion of Excellence’s Blaine Fitzgerald about the Marketplace" + "&#8217;" + "s public launch.",
            "url": "https://federalnewsnetwork.com/podcast/federal-drive-with-tom-temin-podcast/vhas-diffusion-marketplace-showcases-staff-ideas-for-innovative-care/"
        },
        {
            "img": "assets/img/home/news_3.jpg?v=2",
            "title": "Innovators receive training to refine Veteran-centric solutions",
            "description": "The Diffusion Marketplace is a searchable site houses 75 innovations for the healthcare community, driving VHA" + "&#8217;" + "s success as a learning health care system and acting as a digital storefront for innovations.",
            "url": "https://blogs.va.gov/VAntage/96270/sharing-health-care-innovation-vha-ie-diffusion-marketplace-now-open-to-the-public/"
        },
        {
            "img": "assets/img/home/news_4.jpg",
            "title": "Diffusion Academy Supports Promising Practices",
            "description": "Diffusion Academy brings employees with mature practices together from across VHA IE portfolios to train and support them in taking the next step in spreading their work across VHA. This year, Diffusion Academy also supported researchers from the Quality Enhancement Research Initiative (QUERI), providing them with the same training and tools during the three-day intensive collaboration.",
            "url": "https://blogs.va.gov/VAntage/90555/vha-diffusion-academy-supports-spread-promising-practices/"
        },
        {
            "img": "assets/img/home/news_5.jpg",
            "title": "VIONE Methodology Receives International Award",
            "description": "VA method to stop unnecessary medications receives award from the World Hospital Congress.",
            "url": "https://news.va.gov/115494/va-method-stop-unnecessary-medications-award/"
        },
        {
            "img": "assets/img/home/news_6.jpg",
            "title": "Jesse Award recognizes transformational VA innovators",
            "description": "Four VA innovators received the Bob Jesse Award at the 2022 VHA Innovation Experience.",
            "url": "https://news.va.gov/113582/jesse-award-recognizes-va-innovators/"
        },
        {
            "img": "assets/img/home/news_7.jpg",
            "title": "Surgical Pause: Understanding Veteran frailty",
            "description": "Surgical Pause offers alternative treatments to surgery, increasing survival rates for Veterans.",
            "url": "https://news.va.gov/113507/surgical-pause-understanding-veteran-frailty/"
        }                                                
    ]                                         
}


// render dynamic gallery data
newsData.data.forEach(news => $('.owl-carousel.usa-card-group').append("<div class='usa-card__container item'>" + "<a class='card-group-tags' href='" + news.url + "'>" + "<div class='usa-card__media usa-card__media--inset' >" + "<div class='usa-card__img'>" + "<img  src='" + news.img + "'alt='" + news.title + "' />" + "</div>" + "</div>" + "<div class='usa-card__body'>" + "<h2 class='h4'>" + news.title + "</h2>" + "<p>" + news.description + "</p>" + "</div>" + "</a>" + "</div>")); 


// remove empty elements
$(".usa-card__body h4:empty").remove();
$(".usa-card__body p:empty").remove();
