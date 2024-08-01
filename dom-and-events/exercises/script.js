function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', function() {
        paragraph.innerHTML = 'Houston, we have liftoff!'
    })

    missionAbort.addEventListener('mouseover', function( event ) {
        event.target.style.backgroundColor = 'red';
    })

    missionAbort.addEventListener('mouseout', function( event ) {
        event.target.style.backgroundColor = ''
    })

    missionAbort.addEventListener('click', function() {
        let response = window.confirm('Are you sure you want to abort the mission?');
        if (response){
            window.alert('Mission aborted! Space shuttle returning home');
        }
    })
}

window.addEventListener("load", init);
