
// search meal js code
const searchMeal = () => {
  const searchMealText = document.getElementById('searchMealArea').value;
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchMealText}`
   fetch(url)
   .then(res => res.json())
   .then(data =>{
    console.log(data)
   })
}
// const displayMeal = meals =>{
//   meals.forEach(food =>){
//     console.log(food);
//   }
// }

//   const displayMeals = () =>{
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
//     .then(res => res.json())
//     .then(data => { 
//         showMealInfo(data)
//     }) 
//     .catch(error => alert('Please input valid serach.'))
//   }
//   const showMealInfo = meals =>{
//   const mealDiv = document.getElementById('mealUiArea');
//   mealDiv.className = "mealsItem onclick='displayMealDetail('meals')'";
//   mealDiv.innerHTML = `
//   <img class = "mealImg" src="${meals.meals[0].strMealThumb}">
//   <h1 class = "mealHeading">${meals.meals[0].strMeal}</h1>
// `
//    }
//    displayMeals();

//   const mealsItem = document.getElementById('mealsItem');
//    function createMealItem(){
//     mealsItem.innerHTML = <div class = "item">
//       <img src = "" alt =""></img>
//       <h3></h3>
//     </div>
//    }
//    createMealItem();

//    /* const displayMealDetail = meal => {
//     console.log(object);
//    } */