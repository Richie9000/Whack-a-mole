  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;

    function ranTime (min, max){
      return Math.round(Math.random() * (max - min) + min);
    }

    function randomHoles (holes){
      const idx = Math.floor(Math.random() * holes.length);
      const hole = holes[idx];
      if(hole === lastHole){
        return randomHoles(holes)
      }
      
      lastHole = hole;
      return hole

    }