//e0002e40708ac870f1db36f0a57fc410

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCMonth() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`

const app = document.getElementById('app');

const getWeather = async () => {
    try {
        const res = await fetch(`https://api.openweathermap.org/
            data/2.5/weather?q=Nairobi&appid=e0002e40708ac870f1db36f0a57fc410&units=metric`)
            if (!res.ok) throw new Error(`Status: ${res.status}`)
              const data = await res.json()
            console.log(data);
    } catch (error) {
        
    }
}
