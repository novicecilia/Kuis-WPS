const newupload = "https://api-lk21.herokuapp.com/newupload";
const comingsoon ="https://api-lk21.herokuapp.com/comingsoon";

const contents = document.querySelector("#content-list");
const title = document.querySelector(".card-title");



function filmterbaru() {
    title.innerHTML = "new upload"
    fetch(newupload)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson.result);
            let teams = "";
            resJson.result.forEach(team => {
                teams += `
                <li class="collection-item avatar">
                    
                    <span class="title">${team.title}</span>
                    <p>genre: ${team.genre} <br>
                       rating: ${team.rating}
                    </p>
                    
                    </li>
                `
            });
            contents.innerHTML = '<ul class="collection">' + teams + '</ul>';
            const detil= document.querySelectorAll('.secondary.content');
            detil.forEach(btn=>{
                btn.onclick= (event) =>{
                  showTeamInfo (event.target.dataset.id)     
                }
            })
        }).catch(err => {
            console.error(err);
        })
}

function filmcomingsoon() {
    title.innerHTML = "film yang akan datang"
    fetch(comingsoon)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson.result);
            let teams = "";
            resJson.result.forEach(team => {
                teams += `
                <li class="collection-item avatar">
                    
                    <span class="title">${team.title}</span>
                    <p>genre: ${team.genre} <br>
                       rating: ${team.rating}
                    </p>
                    
                    </li>
                `
            });
            contents.innerHTML = '<ul class="collection">' + teams + '</ul>';
            const detil= document.querySelectorAll('.secondary.content');
            detil.forEach(btn=>{
                btn.onclick= (event) =>{
                  showTeamInfo (event.target.dataset.id)     
                }
            })
        }).catch(err => {
            console.error(err);
        })
}



function loadPage(page) {
    switch (page) {
        case "newupload":
            filmterbaru();
            break;
        case "comingsoon":
            filmcomingsoon();
            break;
        
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
        elm.addEventListener("click", evt => {
            let sideNav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sideNav).close();
            page = evt.target.getAttribute("href").substr(1);
            loadPage(page);
        })
    })
    var page = window.location.hash.substr(1);
    if (page === "" || page === "!") page = "newupload";
    loadPage(page);
});