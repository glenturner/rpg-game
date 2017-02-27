$(document).ready(function(){			


var characters = {
    "Harry-Potter": {
      name: "Harry Potter",
      health: 120,
      attack: 8,
      imageUrl: "assets/images/harry-p.jpg",
      enemyAttackBack: 16
    },
	"Dumbledore":{
	name: "Dumbledore",
	health: 100,
	attack: 8,
	imageUrl: "assets/images/Dumbledore.jpg",
	enemyAttackBack: 16
	},
	"Voldemort":{
	name: "Voldemort",
	health: 180,
	attack: 6,
	imageUrl: "assets/images/voldemort.jpg",
	enemyAttackBack: 14
	},
	"Snape":{
	name: "Snape",
	health: 150,
	attack: 6,
	imageUrl: "assets/images/Dumbledore.jpg",
	enemyAttackBack: 14
	}





	function createCharacters () {



		var harryPotterImage = $("<img alt:'image' class:'auth-image'>").attr("src", "Harry-Potter".imageUrl);

 
//Then append harryPotterImage

		/*harryPotter.attr({
			"src": "assets/images/harry-p.jpg",
			"class": "char1",
			"alt": "harry potter",
			"health-points": potterHealth,
			"attack-power": attackPower,
			"c-attack-power": strongCounterAttack*/


	// 	})

		$(".images").append(harryPotterImage);

	}
	
	


	// 	var dumbledore = $("<img>");

	// 	dumbledore.attr({
	// 		"src": "assets/images/Dumbledore.jpg",
	// 		"class": "auth-image dumdbledore",
	// 		"alt": "dumbledore",
	// 		"health-points": dumbledoreHealth,
	// 		"attack-power": attackPower,
	// 		"c-attack-power": strongCounterAttack

	// 	})
	// 	// greenStone.attr("data.index",crystalTwo);
	// 	$(".images").append(dumbledore);

	// 	var voldemort = $("<img>");

	// 	voldemort.attr({
	// 		"src": "assets/images/voldemort.jpg",
	// 		"class": "auth-image voldemort",
	// 		"alt": "voldemort",
	// 		"health-points": voldemortHealth,
	// 		"attack-power": attackPower,
	// 		"c-attack-power": counterAttack

	// 	})
	// 	// rubyStone.attr("data.index",crystalThree);
	// 	$(".images").append(voldemort);


	// 	var snape = $("<img>");

	// 	 snape.attr({
	// 		"src": "assets/images/snape.jpg",
	// 		"class": "auth-image snape",
	// 		"alt": "harry potter",
	// 		"health-points": snapeHealth,
	// 		"attack-power": attackPower,
	// 		"c-attack-power": counterAttack

	// 	})
	// 	//rubyStone.data(crystalTwo);
	// 	$(".images").append(snape);
	// }

	 createCharacters();










});