
//Version 2.0.  Everything is encapsulated!

//"use strict";
//  Stores resume data for display
var model = {
	contactInfo: { 	 
		"location" : "San Mateo, CA",
		"email" : "orenmurasaki@gmail.com",
		"mobile" : "501-240-8654",
		"github" : "githubcom/josephAnda"
	}, 
	bio:  {
		"name" : "Joseph Anda",
		"role" : "Front End Developer",
		"skills" : ["Javascript", "Ruby", "C++", "HTML/CSS", "Mechanical Design", "Machine Shop", "Teaching" ],
		"url" : "http://andadps.com",
		"welcome" : "Welcome to my bio!"
		//"contactInfo" : model.contactInfo
	},
	education: { 
		"schools" : [ {
		"name" : "Central High School",
		"location": "Little Rock, AR, US",
		"degree": "HS Diploma",
		"dates" : "August 2003 - May 2007",
		"major": "Mathematics",
		 }, 
		 {
		"name" : "Stanford University",
		"location": "Stanford, CA, US",
		"degree": "BS",
		"dates" : "September 2007 - June 2011",
		"major": "Mechanical Engineering", 
		"graduation year": "2011"
		} ],
		"onlineClasses" : [ {
		"school" : "Udacity",
		"title" : "Front-End Developer",
		"dates" : "April 2015 - September 2015",
		"url" : "http://www.udacity.com"
		} ] 
	},
	work: {
		"jobs" : [ {
			"employer" : "Harvard Square Academy",
			"title" : "Instructor",
			"location" : "Cupertino, CA",
			"dates" : "6/2012 - 8/2014",
			"responsibilities" : "Homework help, math and science instruction, and keeping parents on the same page as everyone else regarding student progress"
			},
			{ 
			"employer" : "Academic Trainers",
			"title" : "Tutor",
			"location" : "Menlo Park, CA",
			"dates" : "11/2014 - Present",
			"responsibilities" : "Transferring knowledge to college bound students, reporting their progress, and advising the administration."
			}, 
				{ 
			"employer" : "The Right Approach to Education",
			"title" : "Tutor",
			"location" : "San Mateo, CA",
			"dates" : "6/2013 - Present",
			"responsibilities" : "Tutoring students in test prep, mathematics, and science courses."
			}, 
			{
			"employer" : "Lydian Academy",
			"title" : "Instructor",
			"location" : "Menlo Park, CA",
			"dates" : "11/2013 - Present",
			"responsibilities" : "Homework help, math and science instruction, and keeping parents up to date on student progress through the courses."
			},
			{
			"employer" : "Stanford University IT Services",
			"title" : "Junior IT Specialist",
			"location": "Stanford, CA",
			"dates" : "6/2010 - 9/2010",
			"responsibilities" : "Coordinating month-by-month payment of cable contracts, following up with collections from cable clients, corresponded with cable service providers."
			}
		],
	}
};
//  Stores render functions for profile data
var view = {
	renderContacts: function(contactObject) {
		formattedContactLocation = HTMLlocation.replace("%data%", contactObject.location);
		$("#footerContacts").append(formattedContactLocation);
		formattedContactEmail = HTMLemail.replace("%data%", contactObject.email);
		$("#footerContacts").append(formattedContactEmail);
		formattedContactMobile = HTMLmobile.replace("%data%", contactObject.mobile);
		$("#footerContacts").append(formattedContactMobile);
		formattedContactGithub = HTMLgithub.replace("%data%", contactObject.github);
		$("#footerContacts").append(formattedContactGithub);
	},
	renderBio: function(bioObject) {
		formattedRole = HTMLheaderRole.replace("%data%", bioObject.role);
		$("#header").prepend(formattedRole);
		formattedName = HTMLheaderName.replace("%data%", bioObject.name);
		$("#header").prepend(formattedName);
		//adds an image to the profile
		var img = document.createElement("img");
		img.src = "images/propic2.jpg";
		//document.img.setAttribute("class", "biopic");
		var src = document.getElementById("header");
		src.appendChild(img);
		if ( bioObject.skills.length > 0) { 
			

			$("#header").append(HTMLskillsStart);
			for (skill in bioObject.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bioObject.skills[skill]);
				$("#skills").append(formattedSkill);
			};
		};
	},
	renderEducation: function(educationObject) {
		for (school in educationObject.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", educationObject.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName); 
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", educationObject.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree); 
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", educationObject.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates); 
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", educationObject.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", educationObject.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor); 
		};
	
		$("#education").append(document.createElement("br"));
		$("#education").append(HTMLonlineClasses);
		for (course in educationObject.onlineClasses) {
			$("#education").append(HTMLschoolStart);
			
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", educationObject.onlineClasses[course].title);
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", educationObject.onlineClasses[course].school);
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", educationObject.onlineClasses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("#", educationObject.onlineClasses[course].url).replace("%data%", "Udacity Website");
			$(".education-entry:last").append(formattedOnlineURL);
		};
	},
	renderWork:  function(workObject) {
		for (var i = 0; i < model.work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", workObject.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", workObject.jobs[i].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", workObject.jobs[i].dates);
			$(".work-entry:last").append(formattedDates);
			
			var formattedLocation = HTMLworkLocation.replace("%data%", workObject.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", workObject.jobs[i].responsibilities);
			$(".work-entry:last").append(formattedDescription);
		};
	}
};
//  Calls render functions 
var controller = {
	init: function() {
		view.renderContacts(model.contactInfo);
		view.renderBio(model.bio);
		view.renderEducation(model.education);
		view.renderWork(model.work);
		
	}

};


controller.init();


var projects = {
	"projects" : [ 		
		{
			"title" : "Online Resume",
			"date" : "March 2015", 
			"description" : "This resume is intended to showcase a multitude of front-end development skills.  The features of this page will accrue as I progress.",
			"images" : [ "https://developer.chrome.com/extensions/examples/api/idle/idle_simple/sample-128.png", "http://placehold.it/135x135" ]
		},
		{
			"title" : "Arcade Game (Frogger Model)",
			"date" : "May 2015",
			"description": "This was a web development progressed that combined HTML and Javascript to create a game modeled off of the classic arcade game 'Frogger'",
			"images" : []
		},
		{ 
			"title" : "Longboard Brake",
			"date" : "June 2011",
			"description" : "The longboard brake was an experimental, spring-suspended module that used rubber stoppers (erasers) as brake pads.  The prototype was a smashing success!",
			"images" :  ["images/longboard.jpg", "images/longboard2.jpg"]	
		},
		{
			"title" : "Mechanical Pipe Crawler",
			"date" : "March 2011",
			"description": "This was an experimental crawler inspired by the need for agile pipe inspection methods evidenced by the San Bruno oil pipeline explosion.",
			"images" : []
		},
		{
			"title" : "Scotch Thermal Laminator Anti-Jamming Device",
			"date" : "June 2011",
			"description": "Worked with a team of 4 under the direction of Scotch to design and implement an infrared sensor wired to a reversible gear.  Included mechanical design and assembly, among other duties.",  
			"images" : []
		}
	
	]
};
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);	
		$(".project-entry:last").append(formattedProjectTitle);
		
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);	
		$(".project-entry:last").append(formattedProjectDate);
		
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);	
		$(".project-entry:last").append(formattedProjectDescription);
		//iterates through the images array for each project in the projects array
		for (image in projects.projects[project].images) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);	
			$(".project-entry:last").append(formattedProjectImage);
		};
	};
};
projects.display();
$(document).click(function(loc) { 
	var x = event.pageX;
	var y = event.pageY;
	
	logClicks(x, y);
});
function inName(name) {
	first = name.split(" ")[0];
	last = name.split(" ")[1];
	
	first = first.charAt(0).toUpperCase() + first.slice(1);
	last = last.toUpperCase();
	
	return last + " " + first;
}
$("#main").append(internationalizeButton);

function locationizer(work_obj) {
	var locations = [];
	for (var job in work_obj.jobs) {
		locations.push(work_obj.jobs[job].location);
	}
	
	return locations;
}
$("#mapDiv").append(googleMap);


