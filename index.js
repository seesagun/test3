const fetch = require("node-fetch");
const api_url =  
      "https://codequiz.azurewebsites.net/data"; 
  
// Defining async function 
async function thisIsSyncFunction(url) {
  let result = 0;
    
    // Storing response 
    const response = await fetch(url); 
    
    // Storing data in form of JSON 
    result = await response.json(); 
  return result.data
} 
// Calling that async function 
thisIsSyncFunction(api_url).then((response) => {
    const number1 = response
    const calculation = number1 * 10;
    console.log(calculation)
});