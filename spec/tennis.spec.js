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
      else {
        this.BgetScore();
      }
  }

  this.BgetScore = function(){
      if(this.poB === 0){
          this.poB = 15;
          this.scoreB = "Fifteen";
          this.echoScore();
      }

      if(this.poB === 15){
        this.poB = 30;
        this.scoreB = "Thirty";
        this.echoScore();
      }

      if(this.poB === 30){
        this.poB = 40;
        this.scoreB = "Forty";
        this.echoScore();
      }

      if(this.poB === 40){
        this.poB = 0;
        return "Player B Won";
      }
  }
}

describe("TENNIS", function() {
  it("Game start will show 'love - love' score 0-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("love - love");
  });
});

describe("TENNIS", function() {
  it("A get score 15  will show 'Fifteen - love' score 15-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("Fifteen - love");
  });
});

describe("TENNIS", function() {
  it("A get score 30  will show 'Thirty - love' score 30-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("Thirty - love");
  });
});

describe("TENNIS", function() {
  it("A get score 40  will show 'Forty - love' score 40-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("Forty - love");
  });
});

describe("TENNIS", function() {
  it("When A get score = 40 will show 'Player A Won !!!' score 40-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("Player A Won");
  });
});

describe("TENNIS", function() {
  it("B get score 15 will show 'love - Fifteen' score 0-15", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("love - Fifteen");
  });
});

describe("TENNIS", function() {
  it("B get score 30 will show 'love - Thirty' score 0-30", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("love - Thirty");
  });
});

describe("TENNIS", function() {
  it("B get score 40 will show 'love - Forty' score 0-40", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("love - Forty");
  });
});

describe("TENNIS", function() {
  it("B get score 40 will show 'Player B Won' score 0-40", function() {
    var p = new Tennis();
    p.gamestart();
    expect(p.AgetScore()).toBe("Play B Won");
  });
});
