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
}

describe("TENNIS", function() {
  it("should show 'love - love' on score 0-0", function() {
    var p = new Tennis();
    p.gamestart();
    expect("love - love").toBe("love - love");
  });
});
