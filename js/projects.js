var projectData = [
    {'title': "Doom and Bloom", 'subtitle':"3D Multiplayer Game", 'projectImg':'/images/doombloom.png', 'description': 'Doom and Bloom is a 2 v 2 arena-control game where teams compete to cover more of the land in their team\'s flowers.', 'learnMore': 'https://cse125.ucsd.edu/2018/cse125g1/wordpress/', 'demo':'https://youtu.be/nr8D_TMRx2c', 'index': 7},
    {'title': "Bon Voyage", 'subtitle':"Mobile Web Application", 'projectImg':'/images/bonvoyage.png', 'description': 'Bon Voyage is a web application for booking travel packages designed for an simplified mobile user experience.', 'learnMore': 'projects/bon_voyage.html', 'sourceCode':'https://github.com/ChristinaMak/Bon-Voyage', 'demo':'https://christinamak.github.io/Bon-Voyage/', 'index': 1},
    {'title': "Steam Play Predictions", 'subtitle':"Paper on Predictive Model", 'projectImg':'/images/steampredictions.png', 'description':'This paper discusses methods for predicting whether a Steam user will play a given game.', 'learnMore': '', 'sourceCode':'https://github.com/ChristinaMak/Steam-Play-Predictions', 'demo':'', 'paper':'predicting_gameplay_choices_steam.pdf', 'index': 4},
    {'title': "It's Lit", 'subtitle':"Virtual Reality Game", 'projectImg':'/images/itslit.jpg', 'description': "It's Lit is a virtual reality game created during SD Hacks 2017. The player is a firefighter equipped with rocket-powered hose guns that they must use to put out burning houses and trees.", 'learnMore': 'https://devpost.com/software/it-s-lit-txoc2m?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BueRcwKNDR6mdTVUUSFwiKw%3D%3D', 'sourceCode':'', 'demo':'https://drive.google.com/file/d/0B9Bl37g8Owz0b0xmd01heUk5RkE/view?usp=sharing', 'index': 5},
    {'title': "Zenga", 'subtitle':"Virtual Reality Game", 'projectImg':'/images/zenga.jpg', 'description': "Zenga is a virtual reality game in which players move blocks in the style of Jenga in a virtual world. This project won Northrop Grumman's Excellent UX Design Challenge at HackXX.", 'learnMore': 'https://devpost.com/software/zenga', 'sourceCode':'', 'demo':'https://drive.google.com/file/d/0BxUKDcrHM4gWbnR3UXAzUFZnOGs/view?usp=sharing', 'index': 6},
    {'title': "pandappointment", 'subtitle':"Web Application", 'projectImg':'/images/pandappointment.png', 'description': 'Pandappointment is a SaaS application designed for small businesses to manage appointments and check-ins.', 'learnMore': '', 'sourceCode':'https://github.com/WigginWannabe/EmissaryWST', 'demo':'http://emissary-pseudopandas.herokuapp.com/', 'index': 3},
    {'title': "iCloset", 'subtitle':"Android Application", 'projectImg':'/images/icloset_promo.png', 'description': 'iCloset is an Android application that stores clothing items entered by the user. It allows people to create outfit, get outfits automatically generated, and keep track of their clothing.', 'learnMore': 'https://portfolium.com/entry/segfault-cse110closetmanager', 'sourceCode':'https://github.com/SEGFAULT-CSE110/ClosetManager', 'demo':'', 'index': 0},
    {'title': "LMS Garden", 'subtitle':"Website", 'projectImg':'/images/lms.png', 'description': 'The website displays the gardening projects of Lincoln Middle School students.', 'learnMore': '', 'sourceCode':'https://github.com/lmliu/garden-club', 'demo':'', 'index': 2},
    {'title': "TCLC Homework Management", 'subtitle':"Unity Game", 'projectImg':'/images/tclc.png', 'description':"The Town & Country Learning Center requested a homework management application. The application incentivizes children to complete homework through a game reward system.", 'index': 6}
]

$(document).ready(function() {
    // Compile the templatedProjects
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedProjects");

    for (var i = 0; i < projectData.length; i++) {
        var currData = projectData[i];
        var currHtml = template(currData);
        console.log(currHtml);

        parentDiv.append(currHtml);

        // Optional buttons for project cards
        if (projectData[i]['learnMore'] != "" && projectData[i]['learnMore'] != null) {
            ($("#cards" + projectData[i]['index'])).append('<a href="' + projectData[i]['learnMore'] + '"class="btn btn-primary">Learn More</a>')
        }
        if (projectData[i]['demo'] != "" && projectData[i]['demo'] != null) {
            ($("#cards" + projectData[i]['index'])).append('<a href="' + projectData[i]['demo'] + '"class="btn btn-primary">Demo</a>')
        }
        if (projectData[i]['paper'] != "" && projectData[i]['paper'] != null) {
            ($("#cards" + projectData[i]['index'])).append('<a href="' + projectData[i]['paper'] + '"class="btn btn-primary">Paper</a>')
        }
        if (projectData[i]['sourceCode'] != "" && projectData[i]['sourceCode'] != null) {
            ($("#cards" + projectData[i]['index'])).append('<a href="' + projectData[i]['sourceCode'] + '"class="btn btn-primary">Code</a>')
        }
    }
})
