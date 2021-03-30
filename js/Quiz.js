class Quiz  {
    constructor () {
        
    }
    getstate() {
        database.ref("gameState").on('value', (data)=>{
            gameState = data.val()
        })
    }

    update(state) {
        database.ref("/").update({
            gameState : state
        })
    }

async start () {
    if(gameState === 0) {
        player = new Player();
        question = new Question();
        player.getCount();
        question.display();
    }
}

play() {
    question.hide();
    var result= createElement("h4");
    result.style("color ", "black");
    result.html("The correct answer is :")
    result.position(300,265);
    Player.getplayerInfo();

    if(allPlayers !== undefined){
        background("yellow");
        var index = 0;
        var x =300;
        var y = 295;
       
        

        for(var plr in allPlayers){
            index += 1;

            var correctans ="C"
            y += 30;
         
            if(correctans === allPlayers[plr].answer){
                fill("green")
            }

            else{
                fill("red")
            }
            textAlign(CENTER);
            textSize(30);
            text(allPlayers[plr].name +": "+ allPlayers[plr].answer, x, y);

        }
        }
    }
   
}
