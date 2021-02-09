
// search meal js code
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
            <div onclick="mealItemIngredint()"; class="border bg-white text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img class="img-fluid" src="${mealArray.strMealThumb}" alt="mealImg">
                <h2 class="h4 p-2">${mealArray.strMeal}</h2>
            </div>
        `;

        mealDivision.appendChild(mealsDiv);
    });
};
const mealItemIngredint = () => {
  const url =` https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
  fetch(url)
      .then(response => response.json())
      .then(data => {
          //console.log(data);
          //displayMeal(data.meals);
          mealInformation(data.meals);
      });
};

const mealInformation = ingredient => {
  const infoDiv = document.getElementById('ingredientDetails');
  ingredient.forEach(element => {
      infoDiv.innerHTML = `
      <img class="img-fluid" src="${element.strMealThumb}" alt="">
      <li>${element.strIngredient1}</li>
      <li>${element.strIngredient2}</li>
      <li>${element.strIngredient3}</li>
      <li>${element.strIngredient4}</li>
      <li>${element.strIngredient5}</li>
      <li>${element.strIngredient6}</li>
      <li>${element.strIngredient}</li>
      `;
  });
};

// end js code

  //  const showMealUi = meal =>{
  //    const mealDivision = document.getElementById('mealItems');
  //    mealDivision.innerHTML = '';
  //    meal.forEach(mealArray => {
  //      const mealDivisionArea = document.getElementById('div');
  //     //  mealDivisionArea.className = "col-md-3";
  //      mealDivisionArea.innerHTML=`
  //           <div>
  //               <img src="" alt="" >
  //               <h3>fghgdhd</h2>
  //           </div>
  //      `;
  //      mealDivision.appendChild(mealDivisionArea);
  //    });
  //  }; 

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