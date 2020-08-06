/* -------------- VARIABLES ----------------- */
let dificultad = 6
let colors = generateRandomColors(dificultad)
let square = document.querySelectorAll(".square")
let pickedColor = pickColor()
let h1 = document.querySelector("h1")
let span1 = document.querySelector("#colorDisplay")
let colorBody = document.body.style.backgroundColor
let reset = document.querySelector(".reset")
let easy = document.querySelector('#easy')
let hard = document.querySelector('#hard')

juego()

/* -------------- FUNCIONES ----------------- */

function colorSquares (colors){
    for(let i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i]
    }
}

function changeColors (color){
    for(let i = 0; i < square.length;i++){
        square[i].style.backgroundColor = color
    }
}

function pickColor (){
    let numRandom = Math.round(Math.random() * dificultad)
    let pickColor = colors[numRandom]
    return pickColor
}

function randomColor (){
    return "rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")"
}

function generateRandomColors (dificultad){
    let arreglo = [];

    for(let i = 0; i < dificultad; i++)
        arreglo.push(randomColor())
    
    return arreglo;
}



function juego (){
    reset.textContent = 'New Colors'
    message.textContent = ""
    h1.style.backgroundColor = colorBody
    colors = generateRandomColors(dificultad)
    pickedColor = pickColor()
    span1.textContent = pickedColor
        
        for (i = 0; i<square.length; i++){
            if(colors[i]){
                square[i].style.backgroundColor = colors [i]
                square[i].style.display = 'block'
            }else {
                square[i].style.display = 'none'
            }
        }

        for(let i = 0; i < colors.length; i++){
        square[i].style.backgroundColor = colors[i]

        square[i].addEventListener('click',function(){    
            let clickedColor = this.style.backgroundColor

            if(clickedColor === pickedColor){
                h1.style.backgroundColor = pickedColor;
                message.textContent = "Correct ! ";
                message.style.color = 'green'
                changeColors(pickedColor)
                reset.textContent = 'Play again?'
                
            }else{
                this.style.backgroundColor = colorBody
                message.textContent = "Try Again"
                message.style.color = 'red'
                
            }
        })
    }
}

// click


span1.textContent = pickedColor;




/* --------------- EVENTOS ------------------ */
// reset
reset.addEventListener('click', function(){
    reset.textContent = 'New colors'
    message.textContent = ''
    h1.style.backgroundColor = randomColor();
    juego()
})

easy.addEventListener('click', function(){
    easy.classList.add("selected")
    hard.classList.remove("selected")
    dificultad = 3
    juego()
})

hard.addEventListener('click', function(){
    hard.classList.add("selected")
    easy.classList.remove("selected")
    dificultad = 6
    juego()
})