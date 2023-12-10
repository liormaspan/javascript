// firstPart
function playTheGame(){
    // let numsum=6
    const answer=confirm("would you like to play?")
    if (!answer){
        alert("No problem, Goodbye")
     return answer   
    }
    const enter=prompt("enter a number between 0 and 10")
    if(isNaN(enter)||enter<0||enter>10){
        alert("Sorry Not a Number, Goodbye")
        return enter
        compareNumbers(user,computer);
    }
    let computerNumber=2.52
    console.log(Math.floor(computerNumber)*enter)
}
playTheGame()

// SecondPart
function compareNumbers(user,computer){
    let tries=0
    
 while(tries>3 && user!== computer, tries++){
    if(user>compareNumbers){
        alert("too big")
        return
    }else(user<compareNumbers)
        alert("too small")
        return tries
 }
        
}
compareNumbers(1,1)