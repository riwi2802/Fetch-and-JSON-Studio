// TODO: add code here

window.addEventListener("load",function() {
    const url = "https://handlers.education.launchcode.org/static/astronauts.json"
    const container = document.getElementById("container");

    fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
        
    })
    .then(function(jsonObject) {
        for (i = 0; i <= jsonObject.length; i++) {
            console.log(jsonObject[i])
            console.log(jsonObject[i].firstName)
            container.innerHTML += `
            <div class="astronaut">
                <div class"bio">
                    <h3>${jsonObject[i].firstName} ${jsonObject[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${jsonObject[i].hoursInSpace}</li>
                        <li>Active: ${jsonObject[i].active}</li>
                        <li>Skills: ${jsonObject[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${jsonObject[i].picture}">
            </div>
            `

        }
    

    });


});