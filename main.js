//functions

  function Question(question , answers , correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  };

  var questionBox = document.getElementsByClassName('question-box')[0];


  Question.prototype.displayQuestion = function() {
      console.log(this.question);
      for(var i = 0 ; i < this.answers.length ; i++) {
        console.log( i + ': '+ this.answers[i]);
        
      }
  };



  Question.prototype.checkCorrect = function(ans) {
      if(ans === this.correct) {
          console.log('CORRECT');
      }else{
          console.log('Wrong answer . Try again :))');
      }
  };
  





//variables

  var q1 = new Question('Wich one is the city of lights?' ,
                    ['New York','Roma', 'Paris','Barcelona','Amsterdam'],
                    2);

  var q2 = new Question('The name of the sport invented by Bruce Lee' ,
                    ['Jet Kun Doo','Kung Fu', 'Karate','Muay Thai','Taikwando'],
                    0);   
                    
  var q3 = new Question('Choose the brand of car made in Sweeden' ,
                    ['Tesla','Lincoln', 'Lexus','Scania','Lamborghini'],
                    3);

  var q4 = new Question('What is the longest river in Europe?' ,
                    ['Amazon', 'Nil','Danube','Volga'],
                    3);

  var q5 = new Question('Which South American country has the largest area?' ,
                    ['Argentina','Brazil', 'Peru','Chile','Venezuela'],
                    1);

  var q6 = new Question('How many states have U.S.A.?' ,
                    ['50','75', '30','45','7'],
                    0);

   var q7= new Question('In which european capital can you visit Colosseum? ' ,
                    ['London','Saint-Petersburg', 'Roma','Bucharest'],
                    2);

   var q8 = new Question('What is the highest mountain on the planet?' ,
                    ['Kilimanjaro','Tatra', 'Everest','Pirinei','Carpatyan'],
                    2);

  var q9 = new Question('Who made the first trip around the world?' ,
                    ['Abraham Lincoln','Cristofor Columb', 'Robinson Crusoe','Fernando Magellan','Americo Vespucci'],
                    3);

  var q10 = new Question('In what country was Adolf Hitler born?' ,
                    ['Austria','Germany', 'Spain','Italy','Hungary'],
                    0);

  var q11 = new Question('Wich footbal teams played in "El Classico?' ,
                    ['Real Madrid and Atletico Madrid',' FC Barcelona and Espanyol Barcelona', 'Real Madrid and FC Barcelona','Atletico Madrid and FC Barcelona','Arsenal London and Tottenham'],
                    2);




      var allQuestion = [q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9 , q10 , q11];

      var rando = Math.floor(Math.random() * allQuestion.length); 

      allQuestion[rando].displayQuestion();

      var asking = parseInt(prompt('Choose your answer:'));

      allQuestion[rando].checkCorrect(asking);
                    
    

      var nextQuestion = document.getElementById('reload-page');

      nextQuestion.addEventListener('click',function() {
          window.location.reload();
      });
      