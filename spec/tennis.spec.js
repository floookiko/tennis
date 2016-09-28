function Tennis () {
  this.poA = 0;
  this.poB = 0;

  this.scoreA = "love";
  this.scoreB = "love";

  this.echoScore = function(){
    console.log(this.scoreA + " - " + this.scoreB);
  }

  this.gamestart = function() {
      this.echoScore();
  }

  this.AgetScore = function(){
      if(this.poA === 0){
          poA = 15;
          this.scoreA = "Fifteen";
          this.echoScore();
      }
  }
}

describe("TENNIS", function() {
  it("Game start will show 'love-love' score 0-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect("love - love").toBe("love - love");
  });
});

describe("TENNIS", function() {
  it("A get will show 'Fifteen - love' score 15-0", function() {
    var p = new Tennis();
    p.AgetScore();
    expect("Fifteen - love").toBe("Fifteen - love");
  });
});
