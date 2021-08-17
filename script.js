// TODO: add code here

window.addEventListener("load",function() {
    const url = "https://handlers.education.launchcode.org/static/astronauts.json"
    const container = document.getElementById("container");
    const count = document.getElementById("count")

    fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
        
    })
    .then(function(jsonObject) {

        jsonObject.sort(function(a, b) {
            return b.hoursInSpace - a.hoursInSpace
        });

        for (i = 0; i <= jsonObject.length; i++) { 

            // if (`${jsonObject[i].active}` === "true") {
                container.innerHTML += `
            <div class="astronaut">
                <div class"bio">
                    <h3>${jsonObject[i].firstName} ${jsonObject[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${jsonObject[i].hoursInSpace}</li>
                        <li ${jsonObject[i].active ? 'style="color:green"' : ''}>Active: ${jsonObject[i].active}</li>
                        <li>Skills: ${jsonObject[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${jsonObject[i].picture}">
            </div>
            `
            // } else {
            //     container.innerHTML += `
            // <div class="astronaut">
            //     <div class"bio">
            //         <h3>${jsonObject[i].firstName} ${jsonObject[i].lastName}</h3>
            //         <ul>
            //             <li>Hours in space: ${jsonObject[i].hoursInSpace}</li>
            //             <li>Active: ${jsonObject[i].active}</li>
            //             <li>Skills: ${jsonObject[i].skills.join(", ")}</li>
            //         </ul>
            //     </div>
            //     <img class="avatar" src="${jsonObject[i].picture}">
            // </div>
            // `
            // }

            count.innerHTML = `<p>
           We have ${jsonObject.length} astronauts on this page. &#128524
        </p>
        `
          

        }
    
        

    });


});