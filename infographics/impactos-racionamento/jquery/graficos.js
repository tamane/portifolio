
//slider
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//slide 2
var doughnutData = [
	{
		value: 229,
		color:"#005ccb",
		highlight: "#037ffc",
		label: "Micro e pequeno porte",
	},
	{
		value: 140,
		color: "#0073ff",
		highlight: "#1d8cfc",
		label: "Médio porte"
	},
	{
		value: 44,
		color: "#4b9dff",
		highlight: "#73b9ff",
		label: "Grande porte"
	}	
	];
function two(){
		var ctx = document.getElementById("chart-area").getContext("2d");
		window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});		
	};
	
//slide 3
var doughnutData2 = [
	{
		value: 64.9,
		color: "#4b9dff",
		highlight: "#73b9ff",
		label: ""
	},
	{
		value: 34.1,
		color: "#4d4d4d",
		highlight: "#5b5b5b",
		label: ""
	},

	];

var doughnutData3 = [
	{
		value: 67.6,
		color: "#4b9dff",
		highlight: "#73b9ff",
		label: ""
	},
	{
		value: 32.4,
		color: "#4d4d4d",
		highlight: "#5b5b5b",
		label: ""
	},

	];

function three(){
		var ctx2 = document.getElementById("chart-area2").getContext("2d");
		var ctx3 = document.getElementById("chart-area3").getContext("2d");
		window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {responsive : true});
		window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData3, {responsive : true});
	};
	
//slide 4
function four(){
		$("#p62,#p11,#p12").animate({width: 'toggle'},1000);
	};
	
//slide 5
var doughnutData4 = [
	{
		value: 2.2,
		color: "#4b9dff",
		highlight: "#73b9ff",
		label: ""
	},
	{
		value: 97.8,
		color: "#4d4d4d",
		highlight: "#5b5b5b",
		label: ""
	},

	];

var doughnutData5= [
	{
		value: 54.5,
		color: "#4b9dff",
		highlight: "#73b9ff",
		label: ""
	},
	{
		value: 45.5,
		color: "#4d4d4d",
		highlight: "#5b5b5b",
		label: ""
	},

	];

var doughnutData6 = [
	{
		value: 21.8,
		color: "#4b9dff",
		highlight: "#73b9ff",
		label: ""
	},
	{
		value: 78.2,
		color: "#4d4d4d",
		highlight: "#5b5b5b",
		label: ""
	},

	];

var doughnutData7 = [
	{
		value: 20.8,
		color: "#4b9dff",
		highlight: "#73b9ff",
		label: ""
	},
	{
		value: 79.2,
		color: "#4d4d4d",
		highlight: "#5b5b5b",
		label: ""
	},

	];
function five(){
		var ctx4 = document.getElementById("chart-area4").getContext("2d");
		var ctx5 = document.getElementById("chart-area5").getContext("2d");
		var ctx6 = document.getElementById("chart-area6").getContext("2d");
		var ctx7 = document.getElementById("chart-area7").getContext("2d");		
		window.myDoughnut = new Chart(ctx4).Doughnut(doughnutData4, {responsive : true});
		window.myDoughnut = new Chart(ctx5).Doughnut(doughnutData5, {responsive : true});
		window.myDoughnut = new Chart(ctx6).Doughnut(doughnutData6, {responsive : true});
		window.myDoughnut = new Chart(ctx7).Doughnut(doughnutData7, {responsive : true});
	};