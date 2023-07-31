/* MANIPULATE DATES IN JAVASCRIPT */


// Basic command to get the date
let data = new Date();
console.log(data);

// Get Year with 4 digits
let year = data.getFullYear();
console.log(year);

// Get Month (Number)
    // Takes the number from 0 to 11. With that, the count starts at zero, always putting the current month one number less
let mes = data.getMonth();
console.log(mes);

// Get Month (Written)
//                         0          1         2        3       4       5      6        7           8           9          10          11
const mothOfTheYear = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let writtenMonth = mothOfTheYear[data.getMonth()];
let monthCurrent = writtenMonth;
console.log(monthCurrent)

// Get Day of the month (1 - 31)
let day = data.getDate();
console.log(day);

// Get Day of the Week [0 - 6] [Start in Sunday = 0]
let dayOfTheWeek = data.getDay();
console.log(dayOfTheWeek);

//                        0          1         2            3           4          5          6   
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let writtenDaysOfTheWeek = daysOfTheWeek[data.getDay()];
let weekCurrent = writtenDaysOfTheWeek;
console.log(weekCurrent);

// Get Hour 0 - 23
let hour = data.getHours();
console.log(hour);

// Get minutes 0 - 59
let minutes = data.getMinutes();
console.log(minutes);

// Get seconds 0 - 59
let seconds = data.getSeconds();
console.log(seconds);

// Get milliseconds - 0 até 999
let milliseconds = data.getMilliseconds();
console.log(milliseconds);

// Get date in Brazil Standart - Day / Month / Year
let brazilDate = data.toLocaleString('pt-br', {dateStyle: 'short'});  // You can use timeStyle for hours
console.log(brazilDate);

// Get a date in Brazil Standart using concat
    dateBrazil = new Date(); // First

    daysMonth = dateBrazil.getDate();
    month = dateBrazil.getMonth() + 1;
    year = dateBrazil.getFullYear();

    function addZero(x) {return x < 10 ? '0' + x : '' + x};


    let dataStandartBR = addZero(daysMonth) + '/' + addZero(month) + '/' + year;
    console.log(dataStandartBR); // Second

// Compare Dates - Bigger or Smaller - EX: Salaries

var today = new Date();
var salaries = new Date(2023, 11, 23);

if ( today > salaries) { 
    console.log('Your account is expired!');
}else {
    console.log("Haven't won yet, it's alright");
}

// Diference in between two dates in days

var initialDate = new Date();
var finalDate = new Date(2022, 11, 31);

var timeDiference = finalDate.getTime() - initialDate.getTime();
var daysDiference = Math.ceil(timeDiference / (24 * 60 * 60 * 1000));

console.log(daysDiference + " Dias");