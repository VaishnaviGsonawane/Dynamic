console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

const getPopcorn = promiseWifeBringingTickets.then((t) => {
    console.log('wife:I have ticks');
    console.log('husband: we should go in');
    console.log('wife: no, I am hungry');

    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husbund : i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife:  I need butter on my popcorn');

    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});


const getColdDrinks = getButter.then((t) => {
    console.log('husband: I got some butter');
    console.log('husband: anything else?');
    console.log('wife: let\'s get we are getting late');

    return new Promise((resolve, reject) => {
        // Simulate getting cold drinks after getting butter
        setTimeout(() => resolve(`${t} and cold drinks`), 2000);
    });
});

getColdDrinks.then((t) => {
    console.log(`husband: I got some ${t}`);
    console.log('husband: Here we go, everything is ready!');
});

getButter.then((t) => console.log(t))
console.log('person4: show ticket');
console.log('person5: show ticket');
