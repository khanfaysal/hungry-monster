
// search meal js code start
'use strict';
const searchMeal = () => {
  const searchMealText = document.getElementById('searchMealArea').value;
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealText}
   `
   fetch(url)
   .then(res =>res.json())
   .then(data =>{
    showMealUi(data.meals)
   })
    .catch(error => alert('Please try again valid keyword.'))
  };

  const showMealUi = meal => {
    const mealDivision = document.getElementById('mealItems');
    mealDivision.innerHTML = '';
    meal.forEach(mealArray => {
        const mealsDiv = document.createElement('div');
        mealsDiv.className = 'col-md-4';
        mealsDiv.innerHTML = `
            <div onclick="mealItemIngredint('${mealArray.idMeal}')" class="border bg-white text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img class="img-fluid" src="${mealArray.strMealThumb}" alt="mealImg">
                <h2 class="h4 p-2">${mealArray.strMeal}</h2>
            </div>
        `;

        mealDivision.appendChild(mealsDiv);
    });
};
const mealItemIngredint = (itemparameter) => {
  const url =` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemparameter}`
  fetch(url)
      .then(res => res.json())
      .then(data => {
          mealInformation(data.meals);
      });
};

const mealInformation = ingredient => {
  const mealInformationDiv = document.getElementById('ingredientDetails');
  ingredient.forEach(element => {
      mealInformationDiv.innerHTML = `
      <img src="${element.strMealThumb}" class="img-fluid" alt="itemImg">
      <li>${element.strIngredient1}</li>
      <li>${element.strIngredient2}</li>
      <li>${element.strIngredient3}</li>
      <li>${element.strIngredient4}</li>
      <li>${element.strIngredient5}</li>
      <li>${element.strIngredient6}</li>
      <li>${element.strIngredient7}</li>
      `;
  });
};

// end js code
