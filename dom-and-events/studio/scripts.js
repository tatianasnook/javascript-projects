window.addEventListener('load', () => {
  const takeoffBtn = document.getElementById('takeoff');
  const flightStatus = document.getElementById('flightStatus');
  const shuttleBackground = document.getElementById('shuttleBackground');
  const shuttleHeight = document.getElementById('spaceShuttleHeight');
  const landingBtn = document.getElementById('landing');
  const missionAbortBtn = document.getElementById('missionAbort');
  const upBtn = document.getElementById('up');
  const downBtn = document.getElementById('down');
  const rightBtn = document.getElementById('right');
  const leftBtn = document.getElementById('left');
  const rocket = document.getElementById('rocket');

  rocket.style.position = 'absolute';
  rocket.style.left = '0px';
  rocket.style.bottom = '0px';


  takeoffBtn.addEventListener('click', () => {
    const response = window.confirm('Confirm that the shuttle is ready for takeoff');
    if(response){
      flightStatus.innerHTML = 'Shuttle in flight';
      shuttleBackground.style.backgroundColor = 'blue';
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    }
  })

  landingBtn.addEventListener('click', () => {
    window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = 'The shuttle has landed.';
    shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = 0;
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';
  })

  missionAbortBtn.addEventListener('click', () => {
    const response = window.confirm('Confirm that you want to abort the mission');
    if(response){
      flightStatus.innerHTML = 'Mission aborted';
      shuttleBackground.style.backgroundColor = 'green';
      shuttleHeight.innerHTML = 0;
      rocket.style.left = '0px';
      rocket.style.bottom = '0px';
    }
  })

  upBtn.addEventListener('click', () => {
    rocket.style.bottom = `${parseInt(rocket.style.bottom) + 10}px`;
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
  })

  downBtn.addEventListener('click', () => {
    if(rocket.style.bottom >= '0px'){
      rocket.style.bottom = `${parseInt(rocket.style.bottom) - 10}px`;
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    }
    
  })

  rightBtn.addEventListener('click', () => {
    rocket.style.left = `${parseInt(rocket.style.left) + 10}px`;
  })

  leftBtn.addEventListener('click', () => {
    if(rocket.style.left >= '0px'){
      rocket.style.left = `${parseInt(rocket.style.left) - 10}px`;
    }
  })
})
