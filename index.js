// Homework practice 1
let myName = "Yuanyuan";
let myLastName = "Han";
let myEnglishName = "Thea"
let myFullName = myName + " " + myEnglishName + " " + myLastName;
console.log("Hello, My full name is:", myFullName);

// birth year exercise
let myAge = 30;
let currentYear = 2022;
let myBirthYear = currentYear - myAge;
console.log("My birth year is:", myBirthYear);

// extra exercise
// let's cook some Spaghetti alla Carbonara
// ingredients for 4 persons
// inputs:
let water = 1200;
let salt = 3;
let spaghetti = 400;
let guanciale = 250;
let veryFreshEggYolks = 6;
let agedGratedPecorinoRomanoCheese = 50;
let rawBlackPepper = 4
// output:
// To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips.

// secondly, mix egg yolks and cheese together:
let combinedEggYolksAndPecorinoRomano = veryFreshEggYolks + agedGratedPecorinoRomanoCheese;
console.log("mixture of egg yolks and cheese:", combinedEggYolksAndPecorinoRomano);
// then Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest.
// by a small amount here we assign it as 1/4 of the total amount:
let smallAmountBlackPepper = 4/rawBlackPepper;
let theRestOfBlackPepper = rawBlackPepper - smallAmountBlackPepper;
let seasonedYolksAndCheesMixture = smallAmountBlackPepper + combinedEggYolksAndPecorinoRomano;
console.log("a small amount (1/4) of raw black pepper:", smallAmountBlackPepper);
console.log("so the rest of raw black pepper is:", theRestOfBlackPepper);
// Brown the strips of guanciale for 3 minutes at medium heat, then 1 minute on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.
// now the strips will shrink after browning:
let brownedGuancialeStrips = 0.8 * guanciale
let theLeftGrease = guanciale - brownedGuancialeStrips;
console.log("the weight of guanciale after browning is:", brownedGuancialeStrips);
console.log("the grease left in pan is:", theLeftGrease);
// Cook the pasta with a pinch of salt in the water (guanciale is already very salty);
let theSaltedWater = water + salt;
console.log("the weight of salted water is:", theSaltedWater);
let theDroppedPasta = spaghetti + theSaltedWater;
console.log("the pasta in the salted water is:", theDroppedPasta);
// now the pasta will absorb water and salt:
let theAbsorbRate = 1.8
let theAbsorbedSalt = 3
let cookedPasta = spaghetti * theAbsorbRate + theAbsorbedSalt;
console.log("the pasta before drainning is:", cookedPasta); 
// set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.
let pastaWater = water - cookedPasta;
console.log("right now the pasta water is:", pastaWater);
// here we assign a ladleful of water is 50g:
let aLadlefulWater = 50;
let theRestOfPastaWater = pastaWater - aLadlefulWater;
let drainRate = 0.8;
let drainedPasta = drainRate * cookedPasta;
console.log("now the reserved hot water is:", theRestOfPastaWater);
console.log("right now the weight of drained pasta is:", drainedPasta);
// Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:
let oneSpoonOfWater = 15;
// this will create a creamy sauce with the pasta starch contained in that water.
let theCreamySauce = 2 * oneSpoonOfWater + brownedGuancialeStrips;
console.log("the weight of our creamy sauce is:", theCreamySauce);
// TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.
let initialPasta = theCreamySauce + drainedPasta;
console.log("we have an initial pasta dish's weight is:", initialPasta);
// Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.
let secondPasta = initialPasta + seasonedYolksAndCheesMixture;
console.log("the weight of pasta without pepper is:", secondPasta);
// It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.
// Add the remaining roasted black pepper and serve immediately.
let finalPastaDish = secondPasta + theRestOfBlackPepper;
console.log("We can now present the final pasta, the weight of this dish is:", finalPastaDish);
