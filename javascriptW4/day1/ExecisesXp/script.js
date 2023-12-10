// 1
// function infoAboutMe(){
//     console.log(`my name is lior, my age is 31 and my hobbies is palying football`)
// }
// infoAboutMe()

// 2
// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(`your name is ${personName}, your age is ${personAge} and your favorite color is ${personFavoriteColor}`)
// }
// infoAboutPerson("moshe",21,"purple")

// exe2
// 1

// function calculateTip(){
//     let bill=prompt("enter your bill")
//     let tip=0
//     if(bill<50)tip=0.20
//     if(bill>50&&bill<200)tip=0.15
//     if(bill>200)tip=0.10
//      const tipAmount=bill*tip
//      console.log(tipAmount)
// }


// calculateTip()

// exe3
    //  function isDivisible(){
    //     let sum = 0 
    //     for(i=0; i<501; i++){
    //         if(i%23==0){
    //             sum=sum +i
    //             // console.log(i)
    //             console.log(sum)
    //         }
    //     }
    //  }
    //  isDivisible()

    // exe4

    // const stock = { 
    //     "banana": 6, 
    //     "apple": 0,
    //     "pear": 12,
    //     "orange": 32,
    //     "blueberry":1
    // }  
    
    // const prices = {    
    //     "banana": 4, 
    //     "apple": 2, 
    //     "pear": 1,
    //     "orange": 1.5,
    //     "blueberry":10
    // } 

    // const shoppingList=["banana","apple" ,"orange"]
    // // console.log(shoppingList)
    
    // function bill(){
    //    const fruit=shoppingList[0]
    // //    console.log(fruit);
    //    const inStock=stock[fruit]
    //    if(inStock>0){
    //    const price=prices[fruit]
    //     console.log(`the fruit is ${fruit}, its cost ${price}$`)
    //    }else{
    //     console.log(`is no ${fruit} in stock`);
    //    }
        
    // }

    // bill()

    // exe5

    // function changeEnough(itemPrice, amountOfChange){
    //  const sum=sumOfChange(amountOfChange)
    //  if(sum > itemPrice){
    //     return true
    //  }else{
    //     return false
    //  }
     
    // }
    // changeEnough()

    // function sumOfChange(arr){
    //     let sum=0
    //     for(const i of arr){
    //     sum=+i
    // }
    //     return sum  
    // }
    //  sumOfChange()

    // exe6

    function hotelCost(){
        let answer=""
        const numOfNigth=Number(prompt("enter a number"))
        while(answer=numOfNigth){
            console.log(answer)
        }
    }
    hotelCost()