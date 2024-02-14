//HTML item to Javascript Variable Assignment------------------------------------------------------------------------------------------------------------

let playerImage = document.querySelector(".playerStrip_player_image")

let userInputField = document.querySelector(".userInput");

let guessBtn = document.querySelector(".guessButton");

//------------------------------------------------------------------------------------------------------------
//Constant Variables------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------
//Global Variables------------------------------------------------------------------------------------------------------------

guessesLeft = 5

let player = {
    name:"",
    position:"",
    country:"",
    age:"",
};

let guess;

let userGuess = {
    name:"",
    position:"",
    country:"",
    age:"",
};

let playerList = ["bukayoSaka.jpg", "declanRice.jpg", "eddieNketiah.jpg", "williamSaliba.jpg", "gabrielMartinelli.jpg", "davidRaya.jpg", "gabrielMagalhaes.jpg", "martinOdegaard.jpg", "aaronRamsdale.jpg", "benWhite.jpg", "reissNelson.jpg", "gabrielJesus.jpg", "leandroTrossard.jpg", "emileSmithRowe.jpg", "kaiHavertz.jpg", "fabioVieira.jpg", "jorginho.jpg", "thomasPartey.jpg", "oleksandrZinchenko.jpg", "takehiroTomiyasu.jpg"]
console.log(playerList)

randomPlayer = playerList[Math.floor(Math.random() * playerList.length)]
console.log("The random player is", randomPlayer)


//

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//Main Program------------------------------------------------------------------------------------------------------------

//Function calling-------------------------------------------------------------------------
randomPlayerIntoPlayer()

//Function to give up
document.querySelector(".giveUp").onclick = function giveUp(){
    win()
    positionCorrect()
    countryCorrect()
    ageCorrect()
}
//---------------------------------------------------------------------------------------------------------------------------

//Functions setup------------------------------------------------------------------------------------------------------------

//If Guess Button Is Clicked-----------------------------------------------------------------------------------------------------
guessBtn.onclick = function(){
    
    guess = document.querySelector(".userInput").value;

    if(guess == " " || guess == ""){
        alert("Please Enter A Player!!!")
    }
    else{

        //This all happens if the guess button is clicked and something is entered------------------------------------------

        //Number of guesses left being taken away visually and in variable - 0 guesses left is further down
        guessesLeft = guessesLeft-1

        if(guessesLeft == 4){
            document.querySelector("#life1").style.display="none"
        }
        if(guessesLeft == 3){
            document.querySelector("#life2").style.display="none"
        }
        if(guessesLeft == 2){
            document.querySelector("#life3").style.display="none"
        }
        if(guessesLeft == 1){
            document.querySelector("#life4").style.display="none"
        }

        console.log("You have", guessesLeft, "guess left")

        //------------------------------------------------------------------------

        console.log("You entered", guess)

        //Turning the user Input into an actual usable guess----------------------------------------------------------------------

        //Saka
        if(guess.toLowerCase() == "bukayo saka" || guess.toLowerCase() == "saka"){
            userGuess.name = "Bukayo Saka"
            userGuess.position = "forward"
            userGuess.country = "England"
            userGuess.age = 22
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Rice
        if(guess.toLowerCase() == "declan rice" || guess.toLowerCase() == "rice"){
            userGuess.name = "Declan Rice"
            userGuess.position = "midfielder"
            userGuess.country = "England"
            userGuess.age = 24
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Nketiah
        if(guess.toLowerCase() == "eddie nketiah" || guess.toLowerCase() == "nketiah"){
            userGuess.name = "Eddie Nketiah"
            userGuess.position = "forward"
            userGuess.country = "England"
            userGuess.age = 24
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Saliba
        if(guess.toLowerCase() == "william saliba" || guess.toLowerCase() == "saliba"){
            userGuess.name = "William Saliba"
            userGuess.position = "defender"
            userGuess.country = "France"
            userGuess.age = 22
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Martinelli
        if(guess.toLowerCase() == "gabriel martinelli" || guess.toLowerCase() == "martinelli"){
            userGuess.name = "Gabriel Martinelli"
            userGuess.position = "forward"
            userGuess.country = "Brazil"
            userGuess.age = 22
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Raya
        if(guess.toLowerCase() == "david raya" || guess.toLowerCase() == "raya"){
            userGuess.name = "David Raya"
            userGuess.position = "goalkeeper"
            userGuess.country = "Spain"
            userGuess.age = 28
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Gabriel
        if(guess.toLowerCase() == "gabriel magalhaes" || guess.toLowerCase() == "gabriel"){
            userGuess.name = "Gabriel Magalhaes"
            userGuess.position = "defender"
            userGuess.country = "Brazil"
            userGuess.age = 25
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Odegaard
        if(guess.toLowerCase() == "martin odegaard" || guess.toLowerCase() == "odegaard"){
            userGuess.name = "Martin Odegaard"
            userGuess.position = "midfielder"
            userGuess.country = "Norway"
            userGuess.age = 24
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Ramsdale
        if(guess.toLowerCase() == "aaron ramsdale" || guess.toLowerCase() == "ramsdale"){
            userGuess.name = "Aaron Ramsdale"
            userGuess.position = "goalkeeper"
            userGuess.country = "England"
            userGuess.age = 25
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //White
        if(guess.toLowerCase() == "ben white" || guess.toLowerCase() == "white"){
            userGuess.name = "Ben White"
            userGuess.position = "defender"
            userGuess.country = "England"
            userGuess.age = 26
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Nelson
        if(guess.toLowerCase() == "reiss nelson" || guess.toLowerCase() == "nelson"){
            userGuess.name = "Reiss Nelson"
            userGuess.position = "forward"
            userGuess.country = "England"
            userGuess.age = 23
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Jesus
        if(guess.toLowerCase() == "gabriel jesus" || guess.toLowerCase() == "jesus"){
            userGuess.name = "Gabriel Jesus"
            userGuess.position = "forward"
            userGuess.country = "Brazil"
            userGuess.age = 26
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Trossard
        if(guess.toLowerCase() == "leandro trossard" || guess.toLowerCase() == "trossard"){
            userGuess.name = "Leandro Trossard"
            userGuess.position = "forward"
            userGuess.country = "Belgium"
            userGuess.age = 28
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Smith Rowe
        if(guess.toLowerCase() == "emile smith rowe" || guess.toLowerCase() == "smith rowe"){
            userGuess.name = "Emile Smith Rowe"
            userGuess.position = "midfielder"
            userGuess.country = "England"
            userGuess.age = 23
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Havertz
        if(guess.toLowerCase() == "kai havertz" || guess.toLowerCase() == "havertz"){
            userGuess.name = "Kai Havertz"
            userGuess.position = "midfielder"
            userGuess.country = "Germany"
            userGuess.age = 24
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Vieira
        if(guess.toLowerCase() == "fabio vieira" || guess.toLowerCase() == "vieira"){
            userGuess.name = "Fabio Vieira"
            userGuess.position = "midfielder"
            userGuess.country = "Portugal"
            userGuess.age = 23
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Jorginho
        if(guess.toLowerCase() == "jorginho" || guess.toLowerCase() == "jorginho"){
            userGuess.name = "Jorginho"
            userGuess.position = "midfielder"
            userGuess.country = "Italy"
            userGuess.age = 31
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Partey
        if(guess.toLowerCase() == "thomas partey" || guess.toLowerCase() == "partey"){
            userGuess.name = "Thomas Partey"
            userGuess.position = "midfielder"
            userGuess.country = "Ghana"
            userGuess.age = 30
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Zinchenko
        if(guess.toLowerCase() == "oleksandr zinchenko" || guess.toLowerCase() == "zinchenko"){
            userGuess.name = "Oleksandr Zinchenko"
            userGuess.position = "defender"
            userGuess.country = "Ukraine"
            userGuess.age = 26
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }

        //Tomiyasu
        if(guess.toLowerCase() == "takehiro tomiyasu" || guess.toLowerCase() == "tomiyasu"){
            userGuess.name = "Takehiro Tomiyasu"
            userGuess.position = "defender"
            userGuess.country = "Japan"
            userGuess.age = 25
            console.log("That means you guessed", userGuess.name)
            console.log("You need to guess", player.name)
        }



        //Checking to see if the user won------------------------------------------------------------------------------------------

        if(userGuess.name == player.name){
            guessesLeft=guessesLeft+1
            if(guessesLeft==1){
                win()
            }
            win()
        }
        if(userGuess.position == player.position){
           positionCorrect()
        }
        if(userGuess.country == player.country){
            countryCorrect()
        }
        if(userGuess.age == player.age){
            ageCorrect()
        }

        //O lives left is down here so that if you win on your last go the image doesn't change to "X" even if you won
        if(guessesLeft == 0){


            //The user is not actually winning they are just getting the correct answer because they lost
            win()

            document.querySelector("#life5").style.display="none"

            document.querySelector(".playerStrip_player").style.border="5px solid red"
            document.querySelector(".guessStrip_position").style.border="5px solid red"
            document.querySelector(".guessStrip_country").style.border="5px solid red"
            document.querySelector(".guessStrip_age").style.border="5px solid red"
        }
    }

}

//End of guessBtn.onclick----------------------------------------------------------------------------------------------------------------------------------

//Functions that happen if you guessed something correct-----------------------------------------------------------------------

//If Won
function win(){
    console.log("You win!")
    document.querySelector(".playerStrip_player").style.border="5px solid yellow"

    //changing the image and you won!

    if(player.name == "Bukayo Saka"){
        document.querySelector(".playerStrip_player_image").src = "bukayoSaka.jpg"
    }
    if(player.name == "Declan Rice"){
        document.querySelector(".playerStrip_player_image").src = "declanRice.jpg"
    }
    if(player.name == "Eddie Nketiah"){
        document.querySelector(".playerStrip_player_image").src = "eddieNketiah.jpg"
    }
    if(player.name == "William Saliba"){
        document.querySelector(".playerStrip_player_image").src = "williamSaliba.jpg"
    }
    if(player.name == "Gabriel Martinelli"){
        document.querySelector(".playerStrip_player_image").src = "gabrielMartinelli.jpg"
    }
    if(player.name == "David Raya"){
        document.querySelector(".playerStrip_player_image").src = "davidRaya.jpg"
    }
    if(player.name == "Gabriel Magalhaes"){
        document.querySelector(".playerStrip_player_image").src = "gabrielMagalhaes.jpg"
    }
    if(player.name == "Martin Odegaard"){
        document.querySelector(".playerStrip_player_image").src = "martinOdegaard.jpg"
    }
    if(player.name == "Aaron Ramsdale"){
        document.querySelector(".playerStrip_player_image").src = "aaronRamsdale.jpg"
    }
    if(player.name == "Ben White"){
        document.querySelector(".playerStrip_player_image").src = "benWhite.jpg"
    }
    if(player.name == "Reiss Nelson"){
        document.querySelector(".playerStrip_player_image").src = "reissNelson.jpg"
    }
    if(player.name == "Gabriel Jesus"){
        document.querySelector(".playerStrip_player_image").src = "gabrielJesus.jpg"
    }
    if(player.name == "Leandro Trossard"){
        document.querySelector(".playerStrip_player_image").src = "leandroTrossard.jpg"
    }
    if(player.name == "Emile Smith Rowe"){
        document.querySelector(".playerStrip_player_image").src = "emileSmithRowe.jpg"
    }
    if(player.name == "Kai Havertz"){
        document.querySelector(".playerStrip_player_image").src = "kaiHavertz.jpg"
    }
    if(player.name == "Fabio Vieira"){
        document.querySelector(".playerStrip_player_image").src = "fabioVieira.jpg"
    }
    if(player.name == "Jorginho"){
        document.querySelector(".playerStrip_player_image").src = "jorginho.jpg"
    }
    if(player.name == "Thomas Partey"){
        document.querySelector(".playerStrip_player_image").src = "thomasPartey.jpg"
    }
    if(player.name == "Oleksandr Zinchenko"){
        document.querySelector(".playerStrip_player_image").src = "oleksandrZinchenko.jpg"
    }
    if(player.name == "Takehiro Tomiyasu"){
        document.querySelector(".playerStrip_player_image").src = "takehiroTomiyasu.jpg"
    }
}

//If the position is correct
function positionCorrect(){
    console.log("You got the correct position")
    document.querySelector(".guessStrip_position").style.border="5px solid yellow"

    if(player.position == "forward"){
        document.querySelector(".guessStrip_position").innerHTML = "forward"
    }
    if(player.position == "midfielder"){
        document.querySelector(".guessStrip_position").innerHTML = "midfielder"
    }
    if(player.position == "defender"){
        document.querySelector(".guessStrip_position").innerHTML = "defender"
    }
    if(player.position == "goalkeeper"){
        document.querySelector(".guessStrip_position").innerHTML = "goalkeeper"
    }
    
}

//If the country is correct
function countryCorrect(){
    console.log("You got the country correct")
    document.querySelector(".guessStrip_country").style.border="5px solid yellow"

    if(player.country == "England"){
        document.querySelector(".guessStrip_country_img").src= "englishFlag.png"
    }
    if(player.country == "France"){
        document.querySelector(".guessStrip_country_img").src= "frenchFlag.jpg"
    }
    if(player.country == "Brazil"){
        document.querySelector(".guessStrip_country_img").src= "brazilFlag.png"
    }
    if(player.country == "Spain"){
        document.querySelector(".guessStrip_country_img").src= "spanishFlag.jpg"
    }
    if(player.country == "Norway"){
        document.querySelector(".guessStrip_country_img").src= "norwayFlag.png"
    }
    if(player.country == "Belgium"){
        document.querySelector(".guessStrip_country_img").src= "belgiumFlag.jpg"
    }
    if(player.country == "Belgium"){
        document.querySelector(".guessStrip_country_img").src= "germanyFlag.png"
    }
    if(player.country == "Portugal"){
        document.querySelector(".guessStrip_country_img").src= "portugalFlag.png"
    }
    if(player.country == "Ghana"){
        document.querySelector(".guessStrip_country_img").src= "ghanaFlag.png"
    }
    if(player.country == "Italy"){
        document.querySelector(".guessStrip_country_img").src= "italyFlag.png"
    }
    if(player.country == "Ukraine"){
        document.querySelector(".guessStrip_country_img").src= "ukraineFlag.png"
    }
    if(player.country == "Japan"){
        document.querySelector(".guessStrip_country_img").src= "japanFlag.png"
    }
}

//If the age is correct
function ageCorrect(){
    console.log("You got the correct age")
    document.querySelector(".guessStrip_age").style.border="5px solid yellow"

    if(player.age == 22){
        document.querySelector(".guessStrip_age").innerHTML = 22
    }
    if(player.age == 23){
        document.querySelector(".guessStrip_age").innerHTML = 23
    }
    if(player.age == 24){
        document.querySelector(".guessStrip_age").innerHTML = 24
    }
    if(player.age == 25){
        document.querySelector(".guessStrip_age").innerHTML = 25
    }
    if(player.age == 26){
        document.querySelector(".guessStrip_age").innerHTML = 26
    }
    if(player.age == 27){
        document.querySelector(".guessStrip_age").innerHTML = 27
    }
    if(player.age == 28){
        document.querySelector(".guessStrip_age").innerHTML = 28
    }
    if(player.age == 29){
        document.querySelector(".guessStrip_age").innerHTML = 29
    }
    if(player.age == 30){
        document.querySelector(".guessStrip_age").innerHTML = 30
    }
    if(player.age == 31){
        document.querySelector(".guessStrip_age").innerHTML = 31
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------

//Player If Statements------------------------------------------------------------------------------------------------------------
function randomPlayerIntoPlayer(){
    if(randomPlayer == "bukayoSaka.jpg"){
        player.name = "Bukayo Saka"
        player.position = "forward"
        player.country = "England"
        player.age = 22
    }
    if(randomPlayer == "declanRice.jpg"){
        player.name = "Declan Rice"
        player.position = "midfielder"
        player.country = "England"
        player.age = 24
    }
    if(randomPlayer == "eddieNketiah.jpg"){
        player.name = "Eddie Nketiah"
        player.position = "forward"
        player.country = "England"
        player.age = 24
    }
    if(randomPlayer == "williamSaliba.jpg"){
        player.name = "William Saliba"
        player.position = "defender"
        player.country = "France"
        player.age = 22
    }
    if(randomPlayer == "gabrielMartinelli.jpg"){
        player.name = "Gabriel Martinelli"
        player.position = "forward"
        player.country = "Brazil"
        player.age = 22
    }
    if(randomPlayer == "davidRaya.jpg"){
        player.name = "David Raya"
        player.position = "goalkeeper"
        player.country = "Spain"
        player.age = 28
    }
    if(randomPlayer == "gabrielMagalhaes.jpg"){
        player.name = "Gabriel Magalhaes"
        player.position = "defender"
        player.country = "Brazil"
        player.age = 25
    }
    if(randomPlayer == "martinOdegaard.jpg"){
        player.name = "Martin Odegaard"
        player.position = "midfielder"
        player.country = "Norway"
        player.age = 24
    }
    if(randomPlayer == "aaronRamsdale.jpg"){
        player.name = "Aaron Ramsdale"
        player.position = "goalkeeper"
        player.country = "England"
        player.age = 25
    }
    if(randomPlayer == "benWhite.jpg"){
        player.name = "Ben White"
        player.position = "defender"
        player.country = "England"
        player.age = 26
    }
    if(randomPlayer == "reissNelson.jpg"){
        player.name = "Reiss Nelson"
        player.position = "forward"
        player.country = "England"
        player.age = 23
    }
    if(randomPlayer == "gabrielJesus.jpg"){
        player.name = "Gabriel Jesus"
        player.position = "forward"
        player.country = "Brazil"
        player.age = 26
    }
    if(randomPlayer == "leandroTrossard.jpg"){
        player.name = "Leandro Trossard"
        player.position = "forward"
        player.country = "Belgium"
        player.age = 28
    }
    if(randomPlayer == "emileSmithRowe.jpg"){
        player.name = "Emile Smith Rowe"
        player.position = "midfielder"
        player.country = "England"
        player.age = 23
    }
    if(randomPlayer == "kaiHavertz.jpg"){
        player.name = "Kai Havertz"
        player.position = "midfielder"
        player.country = "Germany"
        player.age = 24
    }
    if(randomPlayer == "fabioVieira.jpg"){
        player.name = "Fabio Vieira"
        player.position = "midfielder"
        player.country = "Portugal"
        player.age = 23
    }
    if(randomPlayer == "jorginho.jpg"){
        player.name = "Jorginho"
        player.position = "midfielder"
        player.country = "Italy"
        player.age = 31
    }
    if(randomPlayer == "thomasPartey.jpg"){
        player.name = "Thomas Partey"
        player.position = "midfielder"
        player.country = "Ghana"
        player.age = 30
    }
    if(randomPlayer == "oleksandrZinchenko.jpg"){
        player.name = "Oleksandr Zinchenko"
        player.position = "defender"
        player.country = "Ukraine"
        player.age = 26
    }
    if(randomPlayer == "takehiroTomiyasu.jpg"){
        player.name = "Takehiro Tomiyasu"
        player.position = "defender"
        player.country = "Japan"
        player.age = 25
    }
    


    console.log(player.name, player.position, player.country, player.age)
}

//Functions setup End------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------


//End of Main Program------------------------------------------------------------------------------------------------------------