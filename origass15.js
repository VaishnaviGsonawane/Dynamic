console.log('person1: shows ticket');
console.log('person2: shows ticket');


const preMovie = async () => {
    
    const promiseWifeBringingTickets =new Promise((resolve ,reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });


    const getPopcorn =new Promise((resolve,reject) => resolve('popcorn'));
    const addButter =new Promise((resolve,reject) => resolve('butter'));




    let ticket= await promiseWifeBringingTickets;

    console.log(`wife:I have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no, I am hungry');


    let popcorn = await getPopcorn;

    console.log(`husbund : i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife:  I need butter on my popcorn');

    let butter= await addButter;
    
    console.log(`husbund : i got some ${butter}`);
    console.log('husband: anything else ');
    console.log('wife: lets get we are getting late');
    console.log(`husband: thanku for reminder *grins*`);


    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('cold drinks'), 2000);
    });

    let drinks = await getColdDrinks;

    console.log(`husband: I got some ${drinks}`);
    console.log('husband: Here we go, everything is ready!');

    return ticket
};

preMovie().then((m) => console.log(`person 3: shown ${m}`));


console.log('person4: show ticket');
console.log('person5: show ticket');