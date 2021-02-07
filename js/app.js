

  const displayMealsDetail = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => { 
        showMealInfo(data)
    }) 
  }
  const showMealInfo = meals =>{
  const mealDiv = document.getElementById('mealUiArea');
  mealDiv.innerHTML = `
  <img src="${meals.meals[0].strMealThumb}">
  <h1>${meals.meals[0].strMeal}</h1>
`
   }
   displayMealsDetail();

