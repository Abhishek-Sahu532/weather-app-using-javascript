#Weather app

This app is able to provide you the some details of weather like temp, wind speed etc.

App has one input line to enter the city name, Once you type the correct city name.
Then click to the submit button and wait for a while, In the next aside box a text "Loading..." is showning that means data is taking some to extract data from API.

Once the data received it is shown in the same box. 

And if you type the wrong city name it will show the popup box with text "Please enter the correct city name" and also in the next aside box it will show "City not found".

The app use the free weather API from the Internet.

api_key = `3265874a2c77ae4a04bb96236a642d2f`

url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

This link is work for image - https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png
