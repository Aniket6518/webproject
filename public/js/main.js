function mydesp(){
    alert("Heyy There\nAknowledge me.....");
};
const city_display=document.getElementById("display_city_name");
const get_city_name=document.getElementById("cityname");
const display_temp=document.getElementById("display_temp");
const weatherer=document.getElementById("weather");

const getdata=async ()=>{
    const city_name_proxy=get_city_name.value;
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city_name_proxy}&units=metric&appid=aefda3160f01ac278731acd4c6de6ea5`;
    try{
        const data=await fetch(api);
        helper=await data.json();
        const citynamer=helper.name;
        if (citynamer==null) {
            city_display.innerHTML=helper.message;
            display_temp.innerHTML="temperature";
            weatherer.innerHTML="atmosphere";
        }else{
        display_temp.innerHTML=`${helper.main.temp}°C`;
        city_display.innerHTML=`${helper.name} ,${helper.sys.country}`;
        weatherer.innerHTML=helper.weather[0].main;
    }
    }catch(err){
        console.log(err);
    }
};