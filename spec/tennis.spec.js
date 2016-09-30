function Tennis () {

  var poA = 0;
  var poB = 0;

  var scoreA = "love";
  var scoreB = "love";

  this.gamestart = function() {
    return "love - love";
  }
  this.rescore = function(){
    poA = 0;
    poB = 0;

    scoreA = "love";
    scoreB = "love";
  }

  this.AgetScore = function(){
    if(poA === 0){
      poA =15;
    }
    else if(poA === 15){
      poA = 30;
    }
    else if(poA === 30){
      poA = 40;
    }else if(poA === 40){
      poA = 99;
    }
  }

  this.BgetScore = function(){
    if(poB === 0){
      poB = 15;
    }
    else if(poB === 15){
      poB = 30;
    }
    else if(poB === 30){
      poB = 40;
    }
    else if(poB === 40){
      poB = 99;
    }
   }

  this.echoScore = function(){

    if(poA === 15){
        scoreA = "Fifteen";
    }
    else if(poA === 30){
      scoreA = "Thirty";
    }
    else if(poA === 40){
      scoreA = "Forty";
    }



    if(poB === 15){
        scoreB = "Fifteen";
    }
    else if(poB === 30){
      scoreB = "Thirty";
    }
    else if(poB === 40){
      scoreB = "Forty";
    }


    if(poA <= 40 && poB <= 40){
      return scoreA + " - " + scoreB;
    }
    else if(poA === 99){
      this.rescore();
      return "Player A Won";

    }else if(poB === 99){
      this.rescore();
      return "Player B Won";
    }

  }


}


describe("TENNIS", function() {
    var p = new Tennis();

  it("Game start will show 'love - love' score 0-0", function() {
    expect(p.gamestart()).toBe("love - love");
  });

  it("A get score 15  will show 'Fifteen - love' score 15-0", function() {
    p.AgetScore();

    expect(p.echoScore()).toBe("Fifteen - love");
  });

  it("A get score 30  will show 'Thirty - love' score 30-0", function() {
    p.AgetScore();

    expect(p.echoScore()).toBe("Thirty - love");
  });

  it("A get score 40  will show 'Forty - love' score 40-0", function() {
    p.AgetScore();

    expect(p.echoScore()).toBe("Forty - love");
  });

  it("A Score will show 'Player A Won ", function() {
    p.AgetScore();
    expect(p.echoScore()).toBe("Player A Won");
  });

  it("B get score 15 will show 'love - Fifteen' score 0-15", function() {
    p.BgetScore();
    expect(p.echoScore()).toBe("love - Fifteen");
  });

  it("B get score 30 will show 'love - Thirty' score 0-30", function() {
    p.BgetScore();
    expect(p.echoScore()).toBe("love - Thirty");
  });

  it("B get score 40 will show 'love - Forty' score 0-40", function() {
    p.BgetScore();

    expect(p.echoScore()).toBe("love - Forty");
  });

  it("B get score 40 will show 'Player B Won' ", function() {
    p.BgetScore();
    expect(p.echoScore()).toBe("Player B Won");
  });

  it("Score will be 15-15 ", function() {
    p.AgetScore();
    p.BgetScore();
    expect(p.echoScore()).toBe("Fifteen - Fifteen");
  });

  it("Score will be 30-15 ", function() {
    p.AgetScore();
    expect(p.echoScore()).toBe("Thirty - Fifteen");
  });


});
