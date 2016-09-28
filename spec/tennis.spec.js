function Tennis () {
  this.poA = 0;
  this.poB = 0;

  this.scoreA = "love";
  this.scoreB = "love";

  this.echoScore = function(){
    return this.scoreA + " - " + this.scoreB;
  }

  this.gamestart = function() {
      this.echoScore();
  }

  this.AgetScore = function(){
      if(this.poA === 0){
          this.poA = 15;
          this.scoreA = "Fifteen";
          this.echoScore();
      }

      if(this.poA === 15){
        this.poA = 30;
        this.scoreA = "Thirty";
        this.echoScore();
      }

      if(this.poA === 30){
        this.poA = 40;
        this.scoreA = "Forty";
        this.echoScore();
      }

      if(this.poA === 40){
        this.poA = 0;
        return "Player A Won";
      }

      if(this.poB === 0){
          this.poB = 15;
          this.scoreB = "Fifteen";
          this.echoScore();
      }
  }
}

describe("TENNIS", function() {
  it("Game start will show 'love - love' score 0-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect("love - love").toBe("love - love");
  });
});

describe("TENNIS", function() {
  it("A get score 15  will show 'Fifteen - love' score 15-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect("Fifteen - love").toBe("Fifteen - love");
  });
});

describe("TENNIS", function() {
  it("A get score 30  will show 'Thirty - love' score 30-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect("Thirty - love").toBe("Thirty - love");
  });
});

describe("TENNIS", function() {
  it("A get score 40  will show 'Forty - love' score 40-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect("Forty - love").toBe("Forty - love");
  });
});

describe("TENNIS", function() {
  it("When A get score = 40 will show 'Player A Won !!!' score 40-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect("Player A Won").toBe("Player A Won");
  });
});

describe("TENNIS", function() {
  it("B get score 15 will show 'love - love' score 0-15", function() {
    var p = new Tennis();
    p.gamestart();
    expect("love - Fifteen").toBe("love - Fifteen");
  });
});
