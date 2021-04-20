  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeOut = false;
  let score = 0;

    function ranTime (min, max){
      return Math.round(Math.random() * (max - min) + min);
    };

    function randomHoles (holes){
      const idx = Math.floor(Math.random() * holes.length);
      const hole = holes[idx];
      if(hole === lastHole){
        return randomHoles(holes)
      }
      
      lastHole = hole;
      return hole

    };
    
    function peep(){
      const time = ranTime(200,1000);
      const hole = randomHoles(holes);
      hole.classList.add("up");

      setTimeout(()=>{
        hole.classList.remove("up");
        if(!timeOut) peep(); 

      }, time )
    };

    function startGame(){
      scoreBoard.textContent = 0;
      timeOut = false;
      score = 0;
      peep();
      setTimeout(() => timeOut = true, 10000)
    };

    function bonk(e) {
      if(!e.isTrusted) return; // cheater!
      score++;
      this.parentNode.classList.remove('up');
      scoreBoard.textContent = score;
    }
  
    moles.forEach(mole => mole.addEventListener('click', bonk));