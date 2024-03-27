// JSON objects
let tammyView = {
    id: "tammy-finney",
    fellow_type: "",
    fellow_status: "current",
    img: "../assets/img/accelerator/tammy-finney.jpg",
    profileImg: "",
    alt: "Tammy Finney, DNP, MSN, RN, CHCR",
    bio_name: "Tammy Finney, DNP, MSN, RN, CHCR",
    title: "Chief, Community Relations &amp; Engagement, Columbia VA Health Care System",
    job: "",
    job2: "",
    job_description: "",
    office_title: "VA Center for Development &amp; Civic Engagement",
    office_location: "",
    office_title2: "",
    office_location2: "",
    project: "VHA Health Care Talent Academy",
    bio: "VHA Health Care Talent Academy is a dynamic and innovative learning and development program for undergraduate students interested in health care professions. The program encourages students to consider a rewarding career in public service on behalf of Veterans working in VA.",
    bio2: ""
};

let kaylaView = {
    id: "kayla-lalande",
    fellow_type: "",
    fellow_status: "current",
    img: "../assets/img/accelerator/kayla-lalande.jpg",
    profileImg: "",
    alt: "Kayla Lalande, MSW, CAPSW",
    bio_name: "Kayla Lalande, MSW, CAPSW",
    title: "Program Analyst, Office of Geriatrics and Extended Care (GEC)",
    job: "",
    job2: "",
    job_description: "",
    office_title: "Office of Geriatrics &amp; Extended Care",
    office_location: "",
    office_title2: "",
    office_location2: "",
    project: "The Roadmap to No Wrong Door: Spreading Age-Friendly Care Across the Facility",
    bio: "This program creates an integrated system across all care settings, seamlessly providing Age-Friendly Care for Veterans across all care teams within their facility. The program aims to guide, scale, and spread Age-Friendly Care within each facility across the enterprise.",
    bio2: ""
};

let inesView = {
    id: "ines-valencia-mendoza",
    fellow_type: "",
    fellow_status: "current",
    img: "../assets/img/accelerator/ines-valencia-mendoza.jpg",
    profileImg: "",
    alt: "Ines Valencia-Mendoza, MPH",
    bio_name: "Ines Valencia-Mendoza, MPH",
    title: "Program Analyst, Office of Geriatrics and Extended Care (GEC)",
    job: "",
    job2: "",
    job_description: "",
    office_title: "Office of Geriatrics &amp; Extended Care",
    office_location: "",
    office_title2: "",
    office_location2: "",
    project: "The Roadmap to No Wrong Door: Spreading Age-Friendly Care Across the Facility",
    bio: "This program creates an integrated system across all care settings, seamlessly providing Age-Friendly Care for Veterans across all care teams within their facility. The program aims to guide, scale, and spread Age-Friendly Care within each facility across the enterprise.",
    bio2: ""
};

let melindaView = {
    id: "mindy-davis",
    fellow_type: "",
    fellow_status: "current",
    img: "../assets/img/accelerator/mindy-davis.jpg",
    profileImg: "",
    alt: "Melinda &#34;Mindy&#34; Davis, RN",
    bio_name: "Melinda &#34;Mindy&#34; Davis, RN",
    title: "Registered Nurse",
    job: "",
    job2: "",
    job_description: "",
    office_title: "VISN 22",
    office_location: "",
    office_title2: "",
    office_location2: "",
    project: "Fall Prevention with SmartSocks",
    bio: "This Fall Prevention System utilizes a specifically designed patient sock that incorporates patented technology to provide real-time monitoring of fall-risk patient movement; alerting the health care team so they can quickly intervene to prevent a patient fall.",
    bio2: ""
};

// Mustache render logic for individual page views | ?user="firstname-lastname"
var fellowsArray = new Array(tammyView, kaylaView, inesView, melindaView);

var tab;
var img;
var profileImg;
var alt;
var bio_name;
var title;
var job;
var job2;
var job_description;
var office_title;
var office_location;
var office_title2;
var office_location2;
var project;
var bio;
var bio2;

for (var i = 0; i < fellowsArray.length; i++) {
    var userIndex = fellowsArray[i].id;
    if (window.location.href.indexOf(userIndex) > -1) {

        var objectView = fellowsArray[i];

        tab = Mustache.render("{{bio_name}}", objectView);
        img = Mustache.render("{{{img}}}", objectView);
        profileImg = Mustache.render("{{{profileImg}}}", objectView);
        alt = Mustache.render("{{alt}}", objectView);
        bio_name = Mustache.render("{{bio_name}}", objectView);
        title = Mustache.render("{{title}}", objectView);
        job = Mustache.render("{{{job}}}", objectView);
        job2 = Mustache.render("{{{job2}}}", objectView);
        job_description = Mustache.render("{{job_description}}", objectView);
        office_title = Mustache.render("{{{office_title}}},", objectView);
        office_location = Mustache.render("{{{office_location}}}", objectView);
        office_title2 = Mustache.render("{{{office_title2}}},", objectView);
        office_location2 = Mustache.render("{{{office_location2}}}", objectView);
        project = Mustache.render("{{{project}}}", objectView);
        bio = Mustache.render("{{{bio}}}", objectView);
        bio2 = Mustache.render("{{{bio2}}}", objectView);

    }
}


// Append json data to html elements
$('head title').text(tab);
$('.bio-card-img > img').attr("src", profileImg);
$('.bio-card-img > img').attr("alt", alt);
$('.bio-card-attributes > h1').text(bio_name);
$('.bio-card-attributes > h2').text(title);
$('.bio-card-attributes > p span.job').text(job);
$('.bio-card-attributes > p span.job2').text(job2);
$('.bio-card-attributes > p span.job_description').text(job_description);
$('.bio-card-attributes > p span.office_title').text(office_title);
$('.bio-card-attributes > p span.office_location').text(office_location);
$('.bio-card-attributes > p span.office_title2').text(office_title2);
$('.bio-card-attributes > p span.office_location2').text(office_location2);
$('.bio-card-description p.project').text(project);
$('#bio-card-about p.bio').text(bio);
$('#bio-card-about p.bio2').text(bio2);


if ($(".office_title").text() == ',') {
    $(".office_title").remove();
}

if ($(".office_title2").text() == ',') {
    $(".office_title2").remove();
}

$(".bio-card-attributes p span:empty").remove();
$(".bio-card-attributes p:empty").remove();

if ($(".bio-card-attributes > p.margin-top-0").text() == ' ') {
    $(".bio-card-attributes > p.margin-top-0").remove();
}

if ($(".bio-card-attributes > p.margin-bottom-0").text() == ' ') {
    $(".bio-card-attributes > p.margin-bottom-0").remove();
}

$("#bio-card-about p:empty").remove();


// Render dynamic owl carousel for CURRENT sif & erf fellows
var currentFellowsArray = fellowsArray;
var newCurrentFellowsArray = [];

for (var i = 0; i < currentFellowsArray.length; i++) {
    if (currentFellowsArray[i].fellow_status == "current") {
        newCurrentFellowsArray.push(currentFellowsArray[i]);
        // console.log(newCurrentFellowsArray);
    }
}

var currentData = {
    data: []
};

currentData.data.push(newCurrentFellowsArray);  

currentData.data[0].forEach(current => $('.owl-carousel.current--fellows').append("<div class='usa-card__container item'>" + "<div class='usa-card__media' >" + "<div class=''>" 
+ "<img src='" + current.img + "'alt='" + current.alt + "' />" + "</div>" + "</div>" 
+ "<div class='usa-card__body'>" 
+ "<h2 class='margin-bottom-0 h3'>" + current.alt + "</h2>" 
+ "<h3 class='margin-y-0 h4'>" + current.title + "</h3>" 
// + "<p class='office_title margin-bottom-0'>" + current.office_title + "</p>" 
+ "<p class='project'><strong>Capstone Project:</strong> " + current.project + "</p>" 
+ "<p class='bio'>" + current.bio + "</p>" 
+ "</div>" + "</div>"));