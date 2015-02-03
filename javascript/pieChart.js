window.onload = function () {
      	  var face = "play.png";
      	  var img = new Image();
      	  img.src = face;
      	  
          var chart = new CanvasJS.Chart("chartContainer", {
            toolTip:{
				enabled: true
			},
			theme: "theme2",
			click: "showParty('labor')",
			data: [
			{        
				type: "pie",
				bevelEnabled: true,
				indexLabelFontFamily: "",       
				indexLabelFontSize: 20,
				indexLabelFontWeight: "",
				startAngle:-15,
				indexLabelFontColor: "MistyRose",       
				indexLabelLineColor: "darkgrey", 
				indexLabelPlacement: "outside", 
				toolTipContent: "<center><img src= images/" + "{name}" + ".png><h3><b>{name}</b>: currently projected to win/already won {y} seat(s).</h3></center><center>{pageLink}</center>",
				showInLegend: false,
				dataPoints: [
				{  y: 90, indexLabel: "COALITION: {y} SEATS",
						  indexLabelFontSize: 35,
						  labelAngle: -30,
						  name: "Coalition",
						  indexLabelFontColor: "lightblue",
						  indexLabelFontFamily: "Trebuchet MS",
						  leaderName: "Tony Abbott",
						  pageLink: "<button id=\"button\" onclick=\"showParty('liberal')\">Find out more about the Coalition!</button>"},
				{  y: 55, indexLabel: "LABOR: {y} SEATS",
						  indexLabelFontSize: 35,
						  labelAngle: -30,
						  name: "Labor",
						  indexLabelFontColor: "pink",
						  indexLabelFontFamily: "Trebuchet MS",
						  leaderName: "Kevin Rudd",
						  pageLink: "<button id=\"button\" onclick=\"showParty('labor')\">Find out more about Labor!</button>"},
				{  y: 1,  indexLabel: "GREENS: {y} SEATS",
						  indexLabelFontSize: 25,
						  labelAngle: -30,
						  name: "Greens",
						  indexLabelFontColor: "#91d6b2",
						  indexLabelFontFamily: "Trebuchet MS",
						  leaderName: "Christine Milne",
						  pageLink: "<button id=\"button\" onclick=\"showParty('greens');\">Find out more about the Greens!</button>"}
				
				]
			}
			]
		});
 
          chart.render();
}
