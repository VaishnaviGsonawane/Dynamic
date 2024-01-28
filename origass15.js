console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
});

const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 2000);
});

const getCandy = new Promise((resolve, reject) => resolve('candy'));

const getCoke = new Promise((resolve, reject) => resolve('coke'));

const addButter = new Promise((resolve, reject) => resolve('butter'));

const preMovie = async () => {
    try {
        let ticket = await promiseWifeBringingTickets;

        let [popcorn, candy, coke, drinks] = await Promise.all([getPopcorn, getCandy, getCoke, getColdDrinks]);

        console.log(`${popcorn}, ${candy}, ${coke}, ${drinks}`);
        return ticket;
    } catch (error) {
        
        console.error('An error occurred:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

preMovie().then((m) => console.log(`person 3: shown ${m}`));

console.log('person4: show ticket');
console.log('person5: show ticket');
