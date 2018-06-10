// Initial text before game:
document.write("<p>It appears you have found my secret game! You’ve come this far snooping around my website, let's see if you can complete the following questions to see how much you really know about the developer!</p>");

// Function that starts game:
function game() {
  
// Default score:
var score = 0;

// Question one:
var question1 = prompt('What is the nickname of the developer who created this website?');
if (question1.toUpperCase() === 'BINKS') {
  score = score + 1;
  alert('Hmm, that was to easy. How about something more challenging?');
  document.getElementById('score1').innerHTML = '<p style="color:limegreen;">Awarded +1 point for answer </p>' + '"' + question1 + '"';
} else if (question1.toUpperCase() === 'BINKZ') {
  alert('Yes, my nickname use to be spelled with a "z" but not anymore sorry.');
  document.getElementById('score1').innerHTML = '<p style="color:red;">Awarded 0 points for answer </p>' + '"' + question1 + '"';
} else {
  alert('How pitiful, the first question guessed incorrectly!');
  document.getElementById('score1').innerHTML = '<p style="color:red;">Awarded 0 points for answer </p>' + '"' + question1 + '"';
}
console.log(score);

// Question two:
var question2 = prompt('What might his favorite color be?');
if (question2.toUpperCase() === 'BLUE') {
  score = score + 1;
  alert("Well, I guess that wasn't rather difficult at all now was it? No matter, onward!");
  document.getElementById('score2').innerHTML = '<p style="color:limegreen;">Awarded +1 point for answer </p>' + '"' + question2 + '"';
} else {
  alert('The simplest of question only to be mistaken by you!');
  document.getElementById('score2').innerHTML = '<p style="color:red;">Awarded 0 points for answer </p>' + '"' + question2 + '"';
}
console.log(score);

// Question three:
var question3 = prompt('How many animals live along him in his household?');
if (question3 === '4') {
  score = score + 1;
  alert('Impressive… Most impressive, but you are not a jedi yet!');
  document.getElementById('score3').innerHTML = '<p style="color:limegreen;">Awarded +1 point for answer </p>' + '"' + question3 + '"';
} else {
  alert('No, Hazim does not count...');
  document.getElementById('score3').innerHTML = '<p style="color:red;">Awarded 0 points for answer </p>' + '"' + question3 + '"';
}
console.log(score);

// Question four:
var question4 = prompt("What is the developer's middle name?");
if (question4.toUpperCase() === 'JAMES') {
  score = score + 1;
  alert("Wow, that's a little creepy. How'd you know that?");
  document.getElementById('score4').innerHTML = '<p style="color:limegreen;">Awarded +1 point for answer </p>' + '"' + question4 + '"';
} else {
  alert("Tough one isn't it?");
  document.getElementById('score4').innerHTML = '<p style="color:red;">Awarded 0 points for answer </p>' + '"' + question4 + '"';
}
console.log(score);

// Question five:
var question5 = prompt("What is the developer's favorite food?");
if (question5.toUpperCase() === 'PIZZA') {
  score = score + 1;
  alert("Nothing like a good ol' pizza party! Am I right?");
  document.getElementById('score5').innerHTML = '<p style="color:limegreen;">Awarded +1 point for answer </p>' + '"' + question5 + '"';
} else {
  alert('Ew, of course not!');
  document.getElementById('score5').innerHTML = '<p style="color:red;">Awarded 0 points for answer </p>' + '"' + question5 + '"';
}
console.log(score);

// Scoreboard using and/ampersand operator
if (score === 5) {
  document.getElementById('total-score').innerHTML = '<p>Congratulations! You scored ' + score + ' questions correctly out of a possible of 5 and earned the <span style="color:#ffd700">gold crown ♛</span>!</p>' + "<p>Don't forget to tell the developer you obtained a perfect score!</p>";
  document.getElementById('button').innerHTML = 'Play again?';
} else if (score >= 3 && score <= 4) {
  document.getElementById('total-score').innerHTML = '<p>Congratulations! You scored ' + score + ' questions correctly out of a possible of 5 and earned the <span style="color:#c0c0c0">silver crown ♛</span>!</p>' + "<p>You know quite a bit about the developer but there's still some things to learn.</p>";
  document.getElementById('button').innerHTML = 'Play again?';
} else if (score >= 1 && score <= 2) {
  document.getElementById('total-score').innerHTML = '<p>Congratulations! You scored ' + score + ' questions correctly out of a possible of 5 and earned the <span style="color:#cd7f32">bronze crown ♛</span>!</p>' + "<p>Ouch! Looks like you need to study.</p>";
  document.getElementById('button').innerHTML = 'Play again?';
} else {
  document.getElementById('total-score').innerHTML = '<p>Sorry, You scored ' + score + ' questions correctly out of a possible of 5.</p>' + "<p>Really, none? I think it's best you leave now.</p>";
  document.getElementById('button').innerHTML = 'Play again?';
}
console.log(score);
}
// End

/* Copyright © 2017 Joshua Inman 
All rights reserved. */