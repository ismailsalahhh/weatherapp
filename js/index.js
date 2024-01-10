var allItems = [];


async function getWeather(term) {
    if (term == "") {
        term = 'cairo'
    }
    let apiRespon = await fetch(`https:api.weatherapi.com/v1/forecast.json?key=f9340398abe34388874172325240201&q=${(term)}&days=3`);
    finalResult = await apiRespon.json();
    allItems = finalResult;
    display();
    display2();
    display3();
}





function display() {
    let cartoona = ``;
    let object;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (allItems.forecast.forecastday.length > 0) {
        object = allItems.forecast.forecastday[0];
        let date = new Date(object.date).getUTCDay();
        console.log(daysOfWeek[date]);

        cartoona += `
        <div class="date-next">
            <h3>${daysOfWeek[date]}</h3>
        </div>
        <div class="country">
                    <h2> ${allItems.location.country}</h2>
                    <p> ${allItems.location.region}</p>
              </div>
              <div class="degree"><sub> <b>o</b></sub>
                <p><b>${allItems.current.temp_c}</b></p>
                </div>
                <p><b>${allItems.current.condition.text}</b></p>
                <p><b>${allItems.forecast.forecastday[0].day.maxtemp_c}</b></p>
                <p><b>${allItems.forecast.forecastday[1].day.mintemp_c}</b></p>

        `;
    }
    document.querySelector('.first-col .location').innerHTML = cartoona;
}
function display2() {
    let cartoonaa = ``;
    let object;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (allItems.forecast.forecastday.length > 0) {
        object = allItems.forecast.forecastday[1];
        let date = new Date(object.date).getUTCDay();
        console.log(daysOfWeek[date]);

        cartoonaa += `
        <div class="date-next">
            <h3>${daysOfWeek[date]}</h3>
        </div>
        <p><b>${allItems.current.condition.text}</b></p>
        <p><b>${allItems.forecast.forecastday[1].day.maxtemp_c}</b></p>
        <p><b>${allItems.forecast.forecastday[1].day.mintemp_c}</b></p>

        `;
    }

    document.querySelector('.sec-col').innerHTML = cartoonaa;
}



function display3() {
    let cartoonaaa = ``;
    let object;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (allItems.forecast.forecastday.length > 0) {
        object = allItems.forecast.forecastday[2];
        let date = new Date(object.date).getUTCDay();
        console.log(daysOfWeek[date]);

        cartoonaaa += `
        <div class="date-next">
            <h3>${daysOfWeek[date]}</h3>
        </div>
        <p><b>${allItems.current.condition.text}</b></p>
        <p><b>${allItems.forecast.forecastday[2].day.maxtemp_c}</b></p>
        <p><b>${allItems.forecast.forecastday[2].day.mintemp_c}</b></p>
        
        `;
    }

    document.querySelector('.third-col').innerHTML = cartoonaaa;
}


let searchInput = document.getElementById('searchweather')
searchInput.addEventListener('keyup', function (e) {
    // console.log(e)
    let inputValue = e.target.value;
    console.log(inputValue)
    getWeather(inputValue);


})
getWeather('cairo');



// function getNextDayOfWeek(day) {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const today = new Date().getDay();
//     const currentDayIndex = daysOfWeek.indexOf(day);
//     let daysUntilNextDay = (currentDayIndex - today + 7) % 7;

//     if (daysUntilNextDay === 0)
//         daysUntilNextDay = 7; // If the next day is today, set it to a week ahead
//     }

//     const nextDayIndex = (today + daysUntilNextDay) % 7;
//     return daysOfWeek[nextDayIndex];
// }

// // Auto run the function and display the result
// const nextDayElement = document.getElementById('nextDay');
// const nextDay = getNextDayOfWeek('Tuesday'); // Change 'Friday' to the desired day

// nextDayElement.textContent = `${nextDay}`;







