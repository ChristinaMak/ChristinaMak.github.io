var projectData = [
    {'title': "iCloset", 'projectImg':'images/icloset_promo.png', 'description': 'iCloset is an Android application.', 'learnMore': 'projects_icloset.html', 'sourceCode':'#', 'index': 0},
    {'title': "iCloset", 'projectImg':'images/icloset_promo.png', 'description': 'iCloset is an Android application.', 'learnMore': '#', 'sourceCode':'#', 'index': 1},
    {'title': "iCloset2", 'projectImg':'images/icloset_promo.png', 'description': 'iCloset2 is an Android application.', 'learnMore': '#', 'sourceCode':'#', 'index': 2},
    {'title': "iCloset2", 'projectImg':'images/icloset_promo.png', 'description': 'iCloset2 is an Android application.', 'learnMore': '#', 'sourceCode':'#', 'index': 3}
]

$(document).ready(function() {
    // Compile the templatedProjects
    var source = $("#entry-template").html();
    console.log(source);
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedProjects");

    for (var i = 0; i < projectData.length; i++) {
        var currData = projectData[i];
        var currHtml = template(currData);
        parentDiv.append(currHtml);
    }
})
