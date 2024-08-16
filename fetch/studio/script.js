
window.addEventListener('load', function(){
  this.fetch('https://handlers.education.launchcode.org/static/astronauts.json')
  .then(function(response){
    response.json().then(function(data){
      console.log(data);

      data.sort(function(a,b){
        return b.hoursInSpace - a.hoursInSpace;
      });
      
      const container = document.getElementById('container');
      container.innerHTML = `<h2>Total Number of Astronauts: ${data.length}</h2>`;

      for(let i = 0; i < data.length; i++){
        container.innerHTML += `
          <div class="astronaut">
            <div class="bio">
              <h3>${data[i].firstName} ${data[i].lastName}</h3>
              <ul>
                <li>Hours in space: ${data[i].hoursInSpace}</li>
                <li style="color: ${data[i].active ? 'green' : 'black'}">Active: ${data[i].active}</li>
                <li>Skills: ${data[i].skills}</li>
              </ul>
            </div>
            <img class="avatar" src="${data[i].picture}">
          </div>
        `;
      }
    })
  })
})
