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
}





	function createCharacters () {



		var harryPotterImage = $("<img>");

		harryPotterImage.attr({
		"src": "assets/images/harry-p.jpg",
		"class": "char1",
		"alt": "harry potter",
		"name": "Harry Potter",
	  	})

		$(".images").append(harryPotterImage);
		
			var dumbledoreImage = $("<img>");

			dumbledoreImage.attr({
				"src": "assets/images/Dumbledore.jpg",
				"class": "char2",
				"alt": "dumbledore",
				})

				$(".images").append(dumbledoreImage);

			var voldemortImage = $("<img>");

			voldemortImage.attr({
				"src": "assets/images/voldemort.jpg",
				"class": "char3",
				"alt": "voldemort",
				})

				$(".images").append(voldemortImage);


				var snapeImage = $("<img>");

				 snapeImage.attr({
			     "src": "assets/images/snape.jpg",
				 "class": "char4",
				 "alt": "snape",
				 })

				 $(".images").append(snapeImage);
	}
	
	

	 createCharacters();










});
