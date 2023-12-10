const answer=prompt("enter a word")
const words=answer.split(",")
const star="*"
for(const word of words){
    console.log(word);

    if(answer>star){
        console.log("*");
    }

}
