class Game {
  constructor() {
    this.init();
    this.play();
  }

  init() {
    this.iteration = [];
    this.story();
  }

  story() {
    this.storyline = [
      'You are in a clearing.\nYou are in a clearing, and you\'re alone.\nYou are in a clearing, and the path leads left or right.' +
      'CHOICESLeft:Right',
      [
        [
          ''
        ],
        [
          `
You come across a man on his knees in the center of a clearing.  He’s facing away from you, his long black hair falling down to his shoulders.  His jeans are frayed at the cuffs and full of grass stains, his hands at his waist, his fingers curled slightly. You step on a branch.  The sound startles to the man.  He spins around and stands up, suddenly brandishing a knife at you.  Its crooked, silver blade points directly at your heart.  His hair falls out of his face.
High, arching eyebrows.
Thin lips the color of dried blood.
Eyes, black eyes that convey no soul, fathomless as black pits cut into the flesh.
He starts to close the distance between you at a frightening speed.
And a moment later, the hilt in buried in your chest.
           `
        ]
      ]
    ];
  }

  play() {
    $('select').empty();

    var current_storyline = this.storyline;
    for (var i = 0; i < this.iteration.length; i++) {
      current_storyline = current_storyline[this.iteration[i]];
    }

    try {
      var split = current_storyline[0].split('CHOICES');
      var text = split[0];

      var options = split[1].split(':');
    } catch (e) {
      alert('catch');
      var text = current_storyline[0] + '<br><b>THE END</b>';
      $('#output').html(current_storyline[0].replace(/\n/g, '<br>'));
      return;
    }

    var choice;
    $('#output').html(text.replace(/\n/g, '<br>'));
    $.each(options, function(index, value) {
      choice = document.createElement('option');
      $(choice).text(value);
      $(choice).val(index);
      $('select').append(choice);
    });

    this.iteration.push(1);
  }

  continue () {
    this.iteration.push($('select').val());
    this.play();
  }
}

window.onerror = function(message, othervar, othervar2, othervar3, error) {
  alert(error.stack);
}

var game = new Game();

$('#start').click(function() {
  $(this).hide();
  $('#game').show();
});

$('#submit').click(function() {
  game.continue();
});
