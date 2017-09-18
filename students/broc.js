var heyBaby = {
  counter: 0,
  yell: function() {
    var phrases = [
      "Why would you do this to me?!",
      "Why would you do this to me again?!",
      "STOP CLICKING ME!",
      "Why... just why...",
      ":("
    ];
    document.getElementById("sup").innerHTML = phrases[this.counter++];
    if (this.counter == phrases.length) {
      this.counter = 0;
    }
  }
};
