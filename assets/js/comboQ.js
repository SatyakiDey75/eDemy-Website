// RIASEC

var A = ["Graphic Designer", "Fashion Business Management", "Fashion Designer", "Interior Designer", "Jewellery Designer", "Broadcasting", "Advertisement", "UI/UX Designer", "Writer Editor Copywriter", "Product Designer", "Radio Jockey", "Mass Communication", "Journalism", "Language", 'Digital Marketing', 'Archaeology', 'Home Science']

var C = ['Customs and Excises', 'Chartered Accountant', 'Chartered Market Technician', 'Chartered Financial Analyst', 'Cost Accountant', 'Certified Public Accountant', 'Income Tax Service']

var E = ['Business Administration', 'Project Management', 'Event Management', 'Entrepreneurship', 'Sales', 'Marketing', 'Digital Marketing', 'Customs and Excises', 'Civil Services', "Fashion Business Management", "Fashion Designer", "Interior Designer", "Jewellery Designer", "Broadcasting", "Advertisement", 'Indian Economic System', "Railway Services", "Pilot", 'Teacher', 'Public Relations', 'Cabin Crew/Flight Attendant', 'Public Administration', 'Political Science', 'International Relations', 'Sports Management']

var I = ["Artificial Intelligence & Machine Learning", "Pathology", "Ophthalmology", "Zoology", "Botany", "Physics Hons.", "Chemistry Hons.", "UI/UX Designer", "Writer Editor Copywriter", "Product Designer", 'Archaeology', 'Chartered Accountant', 'Chartered Market Technician', 'Chartered Financial Analyst', 'Cost Accountant', 'Certified Public Accountant', 'Income Tax Service', 'Indian Economic System', 'Computer Science and Engineering', 'Surgeon', 'Orthopaedic', 'Geography', 'Doctor', 'Veterinary', 'Professor', "Electrical and Instrumentation Engineering", "Air Traffic Controller", "Aircraft Maintenance Engineer"]

var R = ['Artificial Intelligence & Machine Learning', 'Computer Science and Engineering', 'Surgeon', 'Geography', "Electronics and Communication Engineering", "Electrical Engineering", "Aerospace Engineering", "Mechanical Engineering", "Civil Engineering", "Railway Services", "Pilot", "Electrical and Instrumentation Engineering", "Air Traffic Controller", "Aircraft Maintenance Engineer"]

var S = ["Radio Jockey", "Mass Communication", "Journalism", "Language", 'Civil Services', 'Doctor', 'Veterinary', 'Professor', 'Nursing', 'Counselor', 'Special Educator', 'Sociology', 'Home Science', 'Teacher', 'Public Relations', 'Cabin Crew/Flight Attendant', 'Public Administration', 'Political Science', 'International Relations', 'Sports Management']

// GETELEMENTS

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var or = document.getElementById("or");

// COMB IS RISHI'S OUTPUT AND SUBARRAY FROM RIASEC

let comb = "I";
let arr;
let val;

// SETTING ARRAY ACCORDING TO RISHI'S OUTPUT

if (comb == 'R'){
    arr = R;
    val = 10;
}

if (comb == 'I'){
    arr = I;
    val = 10;
}

if (comb == 'A'){
    arr = A;
    val = 3;
}

if (comb == 'S'){
    arr = S;
    val = 3;
}

if (comb == 'E'){
    arr = E;
    val = 5;
}

if (comb == 'C'){
    arr = C;
    val = 3;
}

// MAKING ALL POSSIBLE 2 SET COMBINATION ARRAY INSIDE AN ARRAY ACCORING TO RISHI'S OUTPUT FROM RIASEC

function combinations(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        results.push([arr[i], arr[j]]);
      }
    }
    return results;
}
const combos = combinations(arr);

// FINDING TOP THREE MODES OF AN ARRAY AND RETURNING AS AN ARRAY FOR OUR OUTPUT

function findMode(arr) {
    if (arr.length === 0) {
      return null;
    }
    const occurrences = {};
    for (const element of arr) {
      if (!occurrences.hasOwnProperty(element)) {
        occurrences[element] = 0;
      }
      occurrences[element]++;
    }
    let mode = null;
    let highestOccurrence = 0;
  
    for (const element in occurrences) {
      if (occurrences[element] > highestOccurrence) {
        mode = element;
        highestOccurrence = occurrences[element];
      }
    }
    return mode;
}

function removeItem(array, item) {
    var i = array.length;  
    while (i--) {
      if (array[i] === item) {
        array.splice(i, 1);
      }
    }
}

let Farr = [];

function topmodeA(arr,y){
    for (let i = 0; i < y; ++i){
        var x = findMode(arr);
        Farr.push(parseInt(x));
        removeItem(arr,parseInt(x));
    }
    return Farr;
}

// DICTIONARY OF ALL UNIQUE CAREERS AND THEIR VALUES TO FIND MODE

var dict = {
  "Business Administration":'businessadministration',
  "Sports Management":"sportmanagement",
  "Project Management":"projectm",
  "Event Management":"eventm",
  "Fashion Business Management":"fash",
  "Computer Science and Engineering":"cse",
  "Artificial Intelligence & Machine Learning":"aiml",
  "Electronics and communication Engineering":"ece",
  "Electrical Engineering":"ee",
  "Electrical and Instrumentation engineering":"eie",
  "Aerospace Engineering":"aero",
  "Mechanical engineering":"mech",
  "Civil Engineering":"civil",
  "Doctor":"doctor",
  "Surgeon":"surgeon",
  "Pathology":"pathology",
  "Veterinary":"veterinary",
  "Orthopaedic":"orthopaedic",
  "Ophthalmology":"optha",
  "Nursing":"nursing",
  "Fashion Designer":"fashiondesigner",
  "UI/UX Designer":"uiux",
  "Graphic Designer":"graphic",
  "Interior Designer":"interior",
  "Jewellery Designer":"jewellery",
  "Zoology":"zoo",
  "Botany":"botany",
  "Physics Hons.":"phyhon",
  "Chemistry Hons.":"chemhon",
  "Radio Jockey":"rj",
  "Entrepreneurship":"ent",
  "Chartered Accountant":"ca",
  "Chartered Market Technician":"cmt",
  "Chartered Financial Analyst":"cfa",
  "Cost Accountant":"coa",
  "Certified Public Accountant":"cpa",
  "Counsellor":"counsellor",
  "Teacher":"teacher",
  "Special Educator":"speced",
  "Professor":"prof",
  "Civil Services":"civils",
  "Railway Services":"rails",
  "Customs And Excises":"ces",
  "Income Tax Service":"its",
  "Indian Economic System":"iess",
  "Mass Communication":"mascom",
  "Public Relations":"pr",
  "Writer Editor Copywriter":"writer",
  "Broadcasting, Journalism":"Broadcasting",
  "Journalism" : "journalism",
  "Digital Marketing":"digi",
  "Advertisement":"ad",
  "Sales":"sales",
  "Product Designer":"prod",
  "Marketing":"mark",
  "Air Traffic Controller":"atc",
  "Aircraft Maintanence Engineer": "ame",
  "Cabin Crew": "cc",
  "Flight Attendant" : "fa",
  "Pilot" : "pilot",
  "Archaeology":"arch",
  "Public Administration": "PA",
  "Home Science": "HomeSc",
  "Geography": "Geo",
  "Political Science": "PoliSc",
  "Language": "lang",
  "Sociology": "sociology",
  "International Relation": "intreln",
}

// GETTING RANDOM INDEX WITHIN A VARIABLE RANGE

function getRandom (min,max) {
    let ss_1 = (max - min + 1);
    let ss_2 = (Math.random() * ss_1)
    let res = (Math.floor(ss_2) + min);
    return res;
}

var changeMin = 0;
var p = [];


function choose(){
    var rand1 = combos[getRandom(changeMin,(arr.length - 1))];
    (changeMin = changeMin + val);
    return rand1;
}
function workRiasec(){

    var t = choose();
    
    while (p.includes(t)){
        var t = choose();
    }

    p.push(t);

    console.log(t[0]);
    console.log(t[1]);
    
    btn1.innerHTML = t[0];
    btn2.innerHTML = t[1];
 
    btn1.style.display = "block";
    btn2.style.display = "block";
    or.style.display = "block";

    next1.style.display = "none";
}

// CALLING FUNCTIONS

workRiasec();