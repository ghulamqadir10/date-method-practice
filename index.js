
function continoustimer() {
    const date = new Date();
    var arr_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["Junuary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "december"];


    var fullyear = date.getFullYear();
    var months = months[date.getMonth()];
    var currentdate = date.getDate();
    var day = arr_days[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // var milelse
    milliseconds = date.getMilliseconds();

    // console.log(date)
    // console.log(fullyear)
    // console.log(months)
    // console.log(currentdate)
    // console.log(day)
    // console.log(hours)
    // console.log(minutes)
    // console.log(seconds)
    // console.log(milliseconds)
    let timePeriod;

    if (hours >= 12) {
        timePeriod = "PM"
    } else {
        timePeriod = "AM"
    }
    if (hours >= 12) {
        hours = hours % 12
    } else {
        hours = hours
    }
    if (hours === 0) {
        hours = 12;
    } else {
        hours = hours
    }
    if (hours <= 9) {
        hours = "0" + hours
    } else {
        hours = hours
    }
    if (minutes <= 9) {
        minutes = "0" + minutes;
    } else {
        minutes = minutes;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds
    } else {
        seconds = seconds
    }

    document.getElementById("date").innerHTML =
        "<h2 class='date'> DATE : " + day + ", " + months + " " + currentdate + ", " + fullyear + "<br>TIME : " + hours + " : " + minutes + " : " + seconds + " " + timePeriod + "</h2>";
}


continoustimer()
setInterval(continoustimer, 1000)  //set interval ma function ko baghair () ma likhna hai to work kr rha hai

//  getting remaining class time practice of question
function get_remaining_time() {
    var class_time = new Date("4,24,2024 11:00")
    var current_time = new Date();
    var class_milli = class_time.getTime();
    var current_milli = current_time.getTime();
    var diff1 = class_milli - current_milli;

    var days_left = Math.floor(diff1 / 1000 / 60 / 60 / 24)
    var hours_left = Math.floor(diff1 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes_left = Math.floor(diff1 % (1000 * 60 * 60) / (1000 * 60));
    var seconds_left = Math.floor(diff1 % (1000 * 60) / (1000));
    // document.write()
    document.getElementById("class_time").innerHTML = "<h2 class='remaining_time'> Next Class Timings </h2>" + "<h4 class='remaining_time'> Remaining Time In Class is : " + days_left + " Day " + hours_left + " Hours " + minutes_left + " minutes " + seconds_left + " seconds </h2>"

    if (diff1 > 0) {

    }else{
        document.getElementById("class_time").innerHTML = " Class Remaining time is Expired" 
    }

}

get_remaining_time();
// setInterval(get_remaining_time,1000);
var intervalid = setInterval(get_remaining_time, 1000);


// / practice birthyear question    ye wala chalana hai

let get_birth_year = prompt("please enter a date of birth separated with spaces like(/ - , spacer) and formatted in (month-date-year) otherwise output will NAN");
function after_birth_days(get_birth) {
    var current_date = new Date();
    var current_year = current_date.getFullYear();
    var current_month = current_date.getMonth();
    var current_day = current_date.getDay();
    var current_minute = current_date.getMinutes();
    var current_second = current_date.getSeconds();
    var current_time = current_date.getTime();
    var birth_date = new Date(get_birth);
    var birth_year = birth_date.getFullYear();
    var birth_month = birth_date.getMonth();
    var birth_day = birth_date.getDay();
    var birth_hour = birth_date.getHours();
    var birth_minute = birth_date.getMinutes();
    var birth_second = birth_date.getSeconds();
    var birth_time = birth_date.getTime();
    var diff = current_time - birth_time;
    var seconds = Math.floor(diff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24)
    var months = Math.floor(days / 30)
    var years = Math.floor(months / 12)
    document.write("<h2 class='BIRTH_YEAR'>Current Year:  ", current_year, "</h2>")
    document.write("<h2 class='BIRTH_YEAR'>Birth Year: ", birth_year, "</h2>")
    document.write("<h4 class='birth_year'>Years After Birth: ", years, "</h4>")
    document.write("<h4 class='birth_year'>Months After Birth:", months, "</h4>")  //another method of month calculation var months = currrent_month-birth_month +(12*(currentyear-birthyear))
    document.write("<h4 class='birth_year'>Days After Birth: ", days, "</h4>")
    document.write("<h4 class='birth_year'>Hours After Birth: ", hours, "</h4>")
    document.write("<h4 class='birth_year'>Minutes After Birth: ", minutes, "</h4>")
    document.write("<h4 class='birth_year'>Seconds After Birth: ", seconds, "</h4>")


}
after_birth_days(get_birth_year)





// // new question   sir,s code
// function getDaysLeft(date) {
//       var futureDate = new Date(date);
//       var currentDate = new Date();
//       var futureMilli = futureDate.getTime();
//       var currentMilli = currentDate.getTime();
//       var diff = futureMilli - currentMilli;
//       var daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
//       console.log(daysLeft);
//     }

//     getDaysLeft("jan 01, 2025");
//     getDaysLeft("may 01, 2024");
// second practice



// function current_time_and_date() {
//     var date = new Date();
//     arr_days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
//     arr_months = ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "octuber", "november", "december"]



//     var days = arr_days[date.getDay()];
//     var currentdate = date.getDate()
//     var month = arr_months[date.getMonth()];
//     var full_year = date.getFullYear();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     var milliseconds = date.getMilliseconds();
//     let timePeriod;
//     if (minutes <= 9) {
//         minutes = "0" + minutes
//     } else {
//         minutes = minutes
//     }
//     if (seconds <= 9) {
//         seconds = "0" + seconds
//     } else {
//         seconds = seconds
//     }


//     document.getElementById("date").innerHTML = "<h2 class='date'> Date: " + days + " , " + month + " " + currentdate + " : " + full_year + "<br> Time: " + hours + " : " + minutes + " : " + seconds + "</h2>"
//     // document.write("kya hal hain")
// }
// current_time_and_date()
// setInterval(current_time_and_date, 1000)

