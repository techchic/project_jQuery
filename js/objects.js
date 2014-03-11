function Rabbit (adjective){
	this.adjective= adjective
	this.species="rabbit"
}
var whiteRabbit=new Rabbit("white")
var blackRabbit=new Rabbit("black")
whiteRabbit.species="human"
		//console.log(whiteRabbit)
Rabbit.prototype.species="Rabbit"
		console.log(whiteRabbit)