// EXE1
// const people = ["Greg", "Mary", "Devon", "James"];
    // people.splice(0,1)
    // console.log(people)

    // let newName="jason"
    // people[2]=newName
    // console.log(people)

    // people.push("Lior")
    // console.log(people)

    // typeof "mary"
    // console.log("mary is",typeof people[0],)

    5//
    // for (let i of people){
    //     if (i !=people){
    //         console.log(people.slice(1,4))
    //     }
    // }

    // partII
        5//
        // for (let i of people){
        //     if (i !=people){
        //         console.log(people)
        //     }
        // }
        
        // for (let i of people){
        //     console.log(i)
        //     if(i=="Mary"){
        //         break;
        //     }
            
        // }

        // EXE2
        // 1

        // const color=["red" , "yellow" , "green" , "grey"]
        // console.log(color)
        // for(i=0; i<color.length; i++){
        //     console.log("my #"+ i + " "+ "choice is " +color[i])
        // }

        // EXE3

        // 1

        // let usernum=prompt("enter your user name")
        // console.log(typeof(usernum))

        //2
        // let num=prompt("enter youe number")
        // let usernum=null;

        // while(usernum != 10){
            
        // const num=prompt("enter youe number")
        //     usernum=Number(num)
        // }

        // EXE4

        // 1
        // const building = {
        //     numberOfFloors: 4,
        //     numberOfAptByFloor: {
        //         firstFloor: 3,
        //         secondFloor: 4,
        //         thirdFloor: 9,
        //         fourthFloor: 2,
        //     },
        //     nameOfTenants: ["Sarah", "Dan", "David"],
        //     numberOfRoomsAndRent:  {
        //         sarah: [3, 990],
        //         dan:  [4, 1000],
        //         david: [1, 500],
        //     },
        // }
        // console.log(building.numberOfFloors)
        // console.log(building.numberOfAptByFloor.firstFloor)
        // console.log(building.numberOfAptByFloor.thirdFloor)
        // console.log(building.nameOfTenants.splice(1,1))
        // console.log(building.numberOfRoomsAndRent.dan)
        // const sara =building.numberOfRoomsAndRent.sarah[1]
        // const david =building.numberOfRoomsAndRent.david[1]
        // const dan =building.numberOfRoomsAndRent.dan[1]

        // if(sara+david>dan){
        //     console.log("dan's is lower");
        // }


        // EXE5

        // const family={
        //     dad:"moshe",
        //     mom:"dabbi",
        //     son:"david"
        // }
        // for(const key in family){
        //     console.log( 'key:',key)
        //     console.log('value:',family[key] )
        // }

        // EXE6

        // const details = {
        //     my: 'name',
        //     is: 'Rudolf',
        //     the: 'raindeer'
        //   }

        //   for(const i in details){
        //     console.log( i)
        //     console.log( details[i])
        //   }

        // EXE7

        const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
        let name2=" "
        for( const i in names){
            console.log(names[i])
            name2=name2+names[i][0]
               
        }
            console.log(name2)
    
            
        