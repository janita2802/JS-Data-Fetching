let GetCategoryData = document.getElementById("get-category-data");
GetCategoryData.addEventListener("click", async function(){
    try{
        const baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php";
        const category = "Seafood";
        const url = `${baseUrl}?c=${category}`;

        // "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

        let res  = await fetch(url);
        let data = await res.json();
        console.log(data);

    }catch(error){
        console.log("Error fetching data:",error);
    }   
});

let GetIngredientData = document.getElementById("get-ingredient-data");
GetIngredientData.addEventListener("click", async function(){

    try{
        const baseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php";
        const ingredient = "chicken_breast";
        const url = `${baseUrl}?i=${ingredient}`;

        // "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
        
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    }catch(error){
        console.log("Error fetching data:",error);
    }

})
