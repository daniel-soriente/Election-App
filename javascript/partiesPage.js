var partyShowing;
var twitterShowing;

function showParty(party) {
	$(document.getElementById("chartContainer")).fadeOut();
	setParty(party);
	setTwitter(party + "_twitter");
	setBack("exit");
	setPartyView();
	$(document.getElementById("container")).fadeIn();
	$(document.getElementById("banner")).animate({width:"940px"});
	$(document.getElementById("back")).fadeIn("slow");
	$(document.getElementById("trends")).fadeIn("slow");
	$(document.getElementById(twitterShowing)).fadeIn("slow");
	$(document.getElementById("youtube")).fadeIn("slow");
	$(document.getElementById("issues")).fadeIn("slow");
}

function setParty(party) {
	partyShowing = party;
}

function setTwitter(twitter) {
	twitterShowing = twitter;
}

function getParty() {
	return partyShowing;
}

function getTwitter() {
	return twitterShowing;
}

function setPartyView() {
	document.getElementById("banner").src = "images/"+partyShowing+"-banner.png";
	
	if (partyShowing == "labor") {
	
		document.getElementById("trends").innerHTML = '<iframe scrolling="no" style="border:none" width="500" height="290" src="http://www.google.com/trends/fetchComponent?q=Kevin%20Rudd,Julia%20Gillard,Bill%20Shorten&date=today+9-m&cid=TIMESERIES_GRAPH_0&export=5"></iframe>';
		document.getElementById("youtube").innerHTML = '<font face=\"Trebuchet MS\" color=\"darkred\"><h2><center>YouTube Feed</center></h2></font></font><div class="youtube" id="Xn9fgcSuvmA" style="position:absolute; width:370px; height:200px; left:8px; top:50px"></div><div class="youtube" id="hPQEUxTtiOI" style="position:absolute; width:370px; height:200px; left:8px; top:260px"></div><div class="youtube" id="Fs6DAwuP7r8" style="position:absolute; width:370px; height:200px; left:8px; top:470px"></div><div class="youtube" id="EHKChr8Zq2s" style="position:absolute; width:370px; height:200px; left:8px; top:680px"></div>';
		document.getElementById("issues").innerHTML = "<font face=\"Trebuchet MS\" color=\"darkblue\"><h2><center>About Party</center></h2></font><font face=\"Trebuchet MS\" size=\"1\"><h2><center>The Australian Labor Party is Australia's oldest political party. Our history is intertwined with the history of Australia's democracy and labour movement.<br>Labor has always aimed to, in the words of former Prime Minister Gough Whitlam:<br>\"Promote equality, to involve the people of Australia in the decision-making processes of our land, and to liberate the talents and uplift the horizons of the Australian people.\"<br>Find Out More:<a href=\"http://www.alp.org.au\">http://www.alp.org.au</a></center></h2></font><font face=\"Trebuchet MS\" color=\"darkblue\"><h2><center>Political Issues</center></h2></font><font face=\"Trebuchet MS\"><center><p><a href='#1' onclick=showIssue('a','labor')>Asylum Seekers</a><br><a href='#2' onclick=showIssue('e','labor')>Education</a><br><a href='#3' onclick=showIssue('b','labor')>Broadband</a><br><a href='#4' onclick=showIssue('m','labor')>Same-sex Marriage</a></font></center>";
		
	} else if (partyShowing == "liberal") {
	
		document.getElementById("trends").innerHTML = '<iframe scrolling="no" style="border:none" width="500" height="290" src="http://www.google.com/trends/fetchComponent?q=tony%20abbott,tony%20abbott%20daughters,malcom%20turnbull&date=today+9-m&cid=TIMESERIES_GRAPH_0&export=5"></iframe>';
		document.getElementById("youtube").innerHTML = '<font face=\"Trebuchet MS\" color=\"darkred\"><h2><center>YouTube Feed</center></h2></font></font><div class="youtube" id="8p_qm-b6vlM" style="position:absolute; width:370px; height:200px; left:8px; top:50px"></div><div class="youtube" id="N-WGfrEj0pE" style="position:absolute; width:370px; height:200px; left:8px; top:260px"></div><div class="youtube" id="-HkjxlpLPNs" style="position:absolute; width:370px; height:200px; left:8px; top:470px"></div><div class="youtube" id="dXlB_gJWwgM" style="position:absolute; width:370px; height:200px; left:8px; top:680px"></div>';
		document.getElementById("issues").innerHTML = "<font face=\"Trebuchet MS\" color=\"darkblue\"><h2><center>About Party</center></h2></font><font face=\"Trebuchet MS\" size=\"1\"><h2><center>We simply believe in individual freedom and free enterprise; and if you share this belief, then ours is the Party for you.<br>Since its formation in late 1944, the Liberal Party has governed Australia for 42 years as well as holding power in all States for varying periods.<br>We believe in equal opportunity for all Australians; and the encouragement and facilitation of wealth so that all may enjoy the highest possible standards of living, health, education and social justice.<br>Find Out More:<a href=\"http://www.liberal.org.au\">http://www.liberal.org.au</a></center></h2></font><font face=\"Trebuchet MS\" color=\"darkblue\"><h2><center>Political Issues</center></h2></font><font face=\"Trebuchet MS\"><center><a href='#5' onclick=showIssue('a','liberal')>Asylum Seekers</a><br><a href='#6' onclick=showIssue('e','liberal')>Education</a><br><a href='#7' onclick=showIssue('b','liberal')>Broadband</a><br><a href='#8' onclick=showIssue('m','liberal')>Same-sex Marriage</a></font></center>";
		
	} else if (partyShowing == "greens") {
	
		document.getElementById("trends").innerHTML = '<iframe scrolling="no" style="border:none" width="500" height="290" src="http://www.google.com/trends/fetchComponent?q=christine%20milne,adam%20bandt,asylum%20seekers%20australia&date=today+9-m&cid=TIMESERIES_GRAPH_0&export=5"></iframe>';
		document.getElementById("youtube").innerHTML = '<font face=\"Trebuchet MS\" color=\"darkred\"><h2><center>YouTube Feed</center></h2></font></font><div class="youtube" id="gs8oP3MH7_o" style="position:absolute; width:370px; height:200px; left:8px; top:50px"></div><div class="youtube" id="N-WGfrEj0pE" style="position:absolute; width:370px; height:200px; left:8px; top:260px"></div><div class="youtube" id="bg2wKZ27Tbw" style="position:absolute; width:370px; height:200px; left:8px; top:470px"></div><div class="youtube" id="P4m-4B1IS68" style="position:absolute; width:370px; height:200px; left:8px; top:680px"></div>';
		document.getElementById("issues").innerHTML = "<font face=\"Trebuchet MS\" color=\"darkblue\"><h2><center>About Party</center></h2></font><font face=\"Trebuchet MS\" size=\"1\"><h2><center>The Greens are much more than an environmental party.  While promoting meaningful and smart solutions to ensure future generations of Australians have clean air, clean water and clean soil, the Greens are also working in many other areas to champion integrity, decency and fairness.<br>As well as representing constituents, the Greens speak on behalf of those who wouldn't otherwise get much of a say inside parliament: children, refugees, students, individuals and families living in poverty and, of course, our natural environment.<br>Find Out More:<a href=\"http://www.liberal.org.au\">http://www.liberal.org.au</a></center></h2></font><font face=\"Trebuchet MS\" color=\"darkblue\"><h2><center>Political Issues</center></h2></font><font face=\"Trebuchet MS\"><center><a href='#9' onclick=showIssue('a','greens')>Asylum Seekers</a><br><a href='#10' onclick=showIssue('e','greens')>Education</a><br><a href='#11' onclick=showIssue('b','greens')>Broadband</a><br><a href='#12' onclick=showIssue('m','greens')>Same-sex Marriage</a></font></center>";
		
	}
	
	youtube();
}
