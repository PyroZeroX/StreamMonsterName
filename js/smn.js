$(document).ready(function(){

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSMname()
{
	var tags =["","IGL", "IFD", "SYN","MCZ","MRN","DMG","EMP","FGC","LU","RZR","eLive","TFA", "TTC", "coL.CC", "FC", "CCG", "GGA", "Box", "BT", "EG","8.95","BRZ","SRK","eSports","NOS", "WW", "GSL", "MLG", "AG", "IFC", "XAN", "AGE", "SL", "CORN", "VxG"];
	var prefix = ["","Salty", "EX", "Fimble","Free", "Fraud","Trap","DiveKick","Broken", "OMGITZ", "Buff", "Kotaku","RealTalk","Worst","Troll","_", "StickThrower", "Ragoo", "Nerf", "Online", "Shoutouts", "Based", "LongIsland", "Tri", "Mr.", "Call", "Twisted", "Kappa", "Best","Paypah", "DansGame", "Mexican", "Kapap", "Gems", "Scrub", "Godlike", "Swag", "HappyBirthday", "AskDr.", "GGPO", "420", "Raw", "Tag", "Ego", "XFactor", "Pandora", "Ultra", "Dorya", "Super", "OS", "Assist", "Perfect", "Xbox", "PS3", "DLC", "Lag", "Skull", "Phony", "FootDive", "Real", "Swords", "Staged"]
	var alias = ["","Kony","LogTrap","Koogy","Capcom","Sentijamal","Beyonzo", "Magnegro", "Man", "tecks", "Face", "God", "licious", "Hologram", "Muppet","Monster", "Guy", "Girl", "Wolverine", "Sagat", "Ryu", "Zero", "Spooky", "Force", "_gonzo", "Uppercut", "Fireball", "Cammy", "Illuminati", "minion", "Legend", "Kick", "gasm", "Netplay", "_fan","_insurance", "09er", "Spooby", "GG", "CPM"];
	var name = "";
	var tagcount = getRandomInt(1,3);
	var prefixcount = getRandomInt(1,3);

	
	for(i = 0; i < tagcount; i++)
	{
		var index = getRandomInt(0,tags.length);	
		if(0 >= index || index >= tags.length)
		{
			index = 1;
		}
		name += tags[index] + "|";
		tags.splice(index,1);
	}

	for(i = 0; i < prefixcount; i++)
	{
		var index = getRandomInt(0,prefix.length);
		
		if(0 >= index || index >= prefix.length)
		{
			index = 1;
		}
		name += prefix[index] + "";
		prefix.splice(index,1);
	}

	var index = getRandomInt(1,alias.length);
	
	if(0 >= index || index >= alias.length)
	{
		index = getRandomInt(1,alias.length);
	}
	name += alias[index] + "";

	return name;
}

var n = generateSMname();
$('#alias').append("<h1>"+n+"<h1/>");
var twtlink = encodeURIComponent("My FGC Stream Monster Name is: "+n+"! Get your name at http://www.streammonstername.com");
$('#tweetlink').attr("href", "https://twitter.com/intent/tweet?text="+twtlink+"&via=PyroZeroX");
});
