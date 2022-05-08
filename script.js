"use strict"
// kintamieji



var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Hitleriui", "Kepepenims", "Odai"],
        answer:"Odai"
    },
    {
        text: "Kam naudingi obuoliai?",
        choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
        answer: "Virškinimui"
        },
        {
        text: "Kokias ligas padeda gydyti agrastai?",
        choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
        answer: "Cukrini diabetą"
        },
        {
        text: "Kokio vitamino gausu apelsinuose?",
        choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
        answer: "Vitamino C"
        },
        {
        text: "Kokiais dalykais yra turtingi arbūzai?",
        choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
        answer: "Visi teisingi"
        }
        
]
setInterval(function(){
    startQuiz.style.color = "#264653"

},500)
setInterval(function(){
    quiz.style.color ="#e9c46a"
    quiz.style.gridTemplateColumns = "none"
},5000)



// Kintamieji

var quiz = document.getElementById("quiz")
var startQuiz = document.getElementById("startQuiz")
var domQuestion, progress, buttons , questionNumber, resultNumber



// paleidzia klausimina
startQuiz.addEventListener("click", start)

 function start(){

  quiz.innerHTML = 
    `
    <!-- Pavadinimas -->
    <h1 class="h1">Vaisiai</h1>
    <!-- Klausimynas -->
    <p id="question">As noreciau jusu paklaust ...?</p>

    <div class="buttons">
      <button>pirmas</button>
      <button>antras</button>
      <button>trecias</button>
      <button>ketvirtas</button>
    </div>
    <hr />

    <!-- progresas -->
    <footer>
      <p>Klausimas <span id="progress">1 </span> is 5</p>
    </footer>
    
    
    `

           // Typed funkcija Animacijos
           new Typed (".h1", {
            strings: ["Vaisiai", "Klausimynas:"],
            typeSpeed: 150,
            backSpeed: 150,
            showCursor:false
           
        })

 

   
 loadSelectors()

}


// Pasizymi visus DOM elementus
function loadSelectors(){
    domQuestion = document.getElementById("question")
    progress = document.getElementById("progress")
    buttons = document.querySelectorAll("button")
    questionNumber = 0
    resultNumber = 0
   

        // Priskiria mygtukams eventus
        buttons.forEach((x, i) =>{
           x.addEventListener("click", function(){
                 // Skaicuoja teisingus pasirinkimus
            if(this.innerText === questions[questionNumber -1].answer){
                resultNumber++
                console.log(questionNumber)
            }
               if(questionNumber  <= buttons.length){
                 // atnaujina informacija
                   populate()
              
               } else {
                   quiz.innerHTML = 
                   `
                   <h1>Results: ${resultNumber}</h1>
                    <button class= "last-button"  onClick ="start()">Bandyti dar karta</button>
                   `
               }
           })
       })
    // uzkrauna turini
       populate()

   



    
}





// uzkrauna ir atnaujina turini
function populate(){
   {
        domQuestion.innerText = questions[questionNumber].text
        buttons.forEach((x,i)=> {
            x.innerText = questions[questionNumber].choices[i]
            
      

        })
    
        questionNumber++
        progress.innerText = questionNumber 


    }


}




