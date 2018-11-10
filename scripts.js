// const API_URL = '/example.json?domain=';
const API_URL = 'http://apis.is/isnic?domain=';

const fields1  = ["domain","registered","lastChange","expires","registrantname","email","address",
                    "country"];
const fields2 = ["Lén","Skráð","Seinast breyyt","Rennur út","Skráningaraðili","Netfang","Heimilisfang",
                  "Land" ]
/**
 * Leit að lénum á Íslandi gegnum apis.is
 */
const program = (() => {
  function init() {

     formatDate();

     document.querySelector("#btn").addEventListener('click',(event)=>{
       	event.preventDefault();
       	sendRequest();
     }); 
  }

  function sendRequest(){
  	let input = document.querySelector("#input").value.trim();
    

    if(validateInput(input)){
       //if input not empty
       let results = document.querySelector(".results");         
       results.innerHTML = "";

       //show loading gif
       results.innerHTML = `<div class="loading">
                                <img src="loading.gif"/>
                                <p>Leita að léni...</p>
                             </div>    
                             `;   
       //fetch the data from api                                 
       fetch(`${API_URL}${input}`)
            .then((response) => response.json())
            .then((data) => parseData(data))
            .catch((error)=> {
                  message("Villa kom upp !!");
                  console.log(error);
            });
    } 
  	
  }
  
  //check if input is empty
  function validateInput(input){
      if(input == "" || input == undefined){
        message("Lén verður að vera strengur");
        return false;
      }
      return true;
  }
  
  //display error message or domain not registered
  function message(message){
        let results = document.querySelector(".results");
        let p = document.createElement("p");
        p.innerHTML = message;
        results.innerHTML = "";
        results.appendChild(p);
  }
  
  //check the response fr the fields
  function parseData(response){ 
    //if no result domain not registered
     if(response.results.length == 0){
       message("Lén er ekki skráð");
     }else{
       //if domain registered
       let data = response.results[0];
       let results = document.querySelector(".results");
       results.innerHTML = "";
      
       let dl = document.createElement("dl");
       
       //loop through all fields checks if data isavailable and append 
       fields1.forEach( function(element, index) {
         if(data[element] != "" && data[element] != undefined){
            if(index == 1 || index == 2 || index == 3){ //if the field is a date field format it
               appendToList(dl,fields2[index],new Date(data[element]).toISODate());  
            }else{
              appendToList(dl,fields2[index],data[element]);  
            }                   
         }  
       });

       results.append(dl);
     }
  }
  
  //appends the data to list
  function appendToList(dl,label,data){
      let dt = document.createElement("dt");
      let dd = document.createElement("dd");
      
      dd.innerHTML = data;
      dt.innerHTML = label;
      dl.append(dt);
      dl.append(dd);
  }

  //add function to Date prototype for ISO format
  function formatDate(){
     if (!Date.prototype.toISODate) {
          Date.prototype.toISODate = function() {
          return this.getFullYear() + '-' +
              ('0'+ (this.getMonth()+1)).slice(-2) + '-' +
              ('0'+ this.getDate()).slice(-2);
          }
     }
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', (domains) => {
  program.init(domains);
});
