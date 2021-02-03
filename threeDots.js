const ages = [12, 22, 24, 55];
const ages2 = [ 21, 43, 54, 67];
const ages3 = [ 12, 34, 45, 77];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [ ...ages, ...ages2, ...ages3];
// console.log(allAges2);

const takaPoysa = [222, 444, 5343, 232];
const maximum = Math.min(...takaPoysa);

console.log(maximum);