const searchBox=document.querySelector(".searchBox")
const searchBtn=document.querySelector(".searchBtn")
const recipe = document.querySelector(".recipe-container") 

const fetchRecipes = async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    // console.log(response.meals[0]);
    response.meals.forEach(meal => {
        console.log(meal);
    });
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim(); 

    fetchRecipes(searchInput); 
});