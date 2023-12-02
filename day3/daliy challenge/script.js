// exe1,2
// let sentence="The movie is not that bad, I like it"
// let notword=sentence.search("not")
// let notbad=sentence.search("bad")
// console.log(notword)

// exe4
let sentence="The movie is not that bad, I like it"
let notword=sentence.search("not")
let wordbad=sentence.search("bad")

let one= sentence.slice(0,notword)
let two= sentence.slice(wordbad,+2)
console.log(one + "good"+ " "+ two)


// if(wordbad<notword){
//     console.log("wordbad", wordbad)
//     console.log("notword", notword)

// }