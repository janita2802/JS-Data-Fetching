let Users = document.getElementById("FetchUsers");
let userContainer = document.getElementById("container");

Users.addEventListener("click", async function(){
    try{
        const baseUrl = "https://reqres.in/api/";
        const userslist = "users";

        const url = `${baseUrl}`+`${userslist}`;

        let res  = await fetch(url);
        let data = await res.json();
        console.log(data);
        
        DisplayData(data);

        Users.disabled = true;

    }catch(error){
        console.log("Error fetching data:",error);
    } ;
    try{
        const baseUrl = "https://reqres.in/api/users";
        const pageNumber = 2;
        const url = `${baseUrl}?page=${pageNumber}`;

        let res  = await fetch(url);
        let data = await res.json();
        console.log(data);
        
        DisplayData(data);

        Users.disabled = true;

    }catch(error){
        console.log("Error fetching data:",error);
    } ;
});



function DisplayData(data){
    let users = data.data;
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        const name = document.createElement("h3");
        name.textContent = `${user.first_name} ${user.last_name}`;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;
        email.style = "font-size:12px;"

        const avatar = document.createElement("img");
        avatar.src = user.avatar;
        avatar.alt = `Avatar for ${user.first_name} ${user.last_name}`;

        userCard.appendChild(name);
        userCard.appendChild(email);
        userCard.appendChild(avatar);

        userContainer.appendChild(userCard);
      });
}