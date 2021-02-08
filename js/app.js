
  const displayMealsDetail = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res => res.json())
    .then(data => { 
        showMealInfo(data)
    }) 
    .catch(error => alert('Please input valid serach.'))
  }
  const showMealInfo = meals =>{
  const mealDiv = document.getElementById('mealUiArea');
  mealDiv.className = "mealsItem onclick='displayMealDetail('meals')'";
  mealDiv.innerHTML = `
  <img class = "mealImg" src="${meals.meals[0].strMealThumb}">
  <h1 class = "mealHeading">${meals.meals[0].strMeal}</h1>
`
   }
   displayMealsDetail();

 /* const mealsItem = document.getElementById('mealsItem');
   function createMealItem(){
    mealsItem.innerHTML = <div class = "item">
      <img src = "" alt =""></img>
      <h3></h3>
    </div>jhjfgf
   }
   createMealItem();  */

   const displayMealDetail = meal => {
    console.log(object);
   }