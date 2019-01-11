//EXAMPLE CODE


// const second = () => {
//     setTimeout(() => {
//         console.log('assync hey there');    
//     }, 2000);
// };

// const first = () => {
//     console.log('hi');
//     second();
//     console.log('the end');
// };
// first();

//OLD CODE: ASYNCHRONOUS JAVASCRIPT WITH CALLBACKS

    // function getRecipe(){
    //     setTimeout(() => {
    //         const recipeID = [112, 323, 121, 654];
    //         console.log(recipeID);

    //         setTimeout(id => {
    //             const recipe = {
    //                 title:'french tomato pasta',
    //                 publisher:'Alcan'
    //             };
    //             console.log(`${id}: ${recipe.title}`);
    //             setTimeout(publisher => {
    //                 const recipe = {title: 'italian pizza', publisher: publisher}
    //                 console.log(recipe);
    //             }, 1500, recipe.publisher);
    //         },1000, recipeID[2]);

    //     }, 1500);

    // }
    // getRecipe();

//PROMISES

    // const getIDs = new Promise((resolve, error) => {
    //     setTimeout(() => {
    //         resolve([112, 323, 121, 654]);  
    //     }, 1500);
    // });

    // const getRecipe = recID => {
    //     return new Promise((resolve, reject) =>{
    //         setTimeout(ID =>{
    //             const recipe = {
    //                 ID: ID,
    //                 title:'french tomato pasta',
    //                 publisher:'Schmoker Alexis'
    //            };
    //             resolve(recipe);
    //         }, 1500, recID);
    //     });
    // };

    // const getRelated = publisher => {
    //     return new Promise((resolve, reject) =>{
    //         setTimeout(publsher => {
    //             const recipe = {title: 'italian pizza', publisher: publsher};
    //             resolve(`${publsher}: ${recipe.title}`);
    //         }, 1500, publisher);
    //     });
    // }

    // getIDs
    // .then(IDs => {
    //    console.log(IDs); 
    //    return getRecipe(IDs[2]);
    // })
    // .then(recipe => {
    //     console.log(`${recipe.ID}: ${recipe.title}`);
    //     return getRelated(recipe.publisher);
    // })
    // .then(recipe => {
    //     console.log(recipe);
    // })
    // .catch(err => {
    //     console.log('ERROR');
    // });

    //ASYNC/AWAIT FUNCTIONS

    // async function getRecipesAw(){
    //     const IDs = await getIDs;
    //     console.log(IDs);
    //     const recipe = await getRecipe(IDs[2]);
    //     console.log(`${recipe.ID}: ${recipe.title}`);
    //     const related = await getRelated(recipe.publisher);
    //     console.log(related);
    // }
    // getRecipesAw();


    //USING FETCH
    // function getWeather(world){

    //     fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${world}/`)
    //     .then(res => {
    //         //console.log(res);
    //         return res.json();
    //     })
    //     .then(data => {
    //         const today = data.consolidated_weather[0];
    //         console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
    //     })
    //     .catch(err => console.log(err));
    // }
    // getWeather(2487956);
    // getWeather(44418);

    // async function getWeatherAW(world) {
    //     try {
    //         const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${world}/`);
    //         const data = await result.json();
    //         const tomorrow = data.consolidated_weather [1];
    //         console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);
    //         //console.log(data);
    //     } catch(error){
    //         console.log(error);
    //     }
    // }
    // getWeatherAW(2487956);
    // getWeatherAW(44418);
    



