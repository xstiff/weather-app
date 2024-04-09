<br />
<center>


# Weather dashboard


<hr />

### How to run:<br />
Python version: 3.12.1
<br /> <i>It was not tested on other versions.</i>
<br />

```
clone this repo
```

<b>Client (React & Next):</b>
```
npm install
npm run dev
```



Server (DRF):

```
pip install -r requirements.txt
py manage.py runserver
```


<hr/>
</center>



### Technologies used: <br />

<li>Frontend: <b>React, Typescript, Next.js, Zustand</b></li>
<li>Backend: <b>Django Rest Framework</b></li>

<hr/>




### Frontend
<p>The frontend presents a user-friendly dashboard displaying weather information. It dynamically showcases data for the currently selected city and provides a list of previously searched cities. Users can filter and sort the list of cities based on city name or sort by any chosen column. The entire frontend communicates with the backend API, ensuring real-time data retrieval and display.</p>

### Backend
<p>The backend is developed using Django Rest Framework (DRF) and offers two main routes:

```/api/weather/<city>```: Retrieves weather data for the specified<city>. </br>
```/api/search/<query>```: Facilitates city search functionality with autocomplete feature</p>


### Screenshots
Below are screenshots:</br>
<img src="https://github.com/xstiff/weather-app/blob/main/photos/fe1.png?raw=true" alt="Photo"/></br>
<img src="https://github.com/xstiff/weather-app/blob/main/photos/fe%20sort.png?raw=true" alt="Photo"/></br>
<img src="https://github.com/xstiff/weather-app/blob/main/photos/fe%20search.png?raw=true" alt="Photo"/></br>
<img src="https://github.com/xstiff/weather-app/blob/main/photos/fe%20search%20no%20data.png?raw=true" alt="Photo"/></br>

<hr/>

<img src="https://github.com/xstiff/weather-app/blob/main/photos/ExampleResponse.png" alt="Photo"/></br>
<img src="https://github.com/xstiff/weather-app/blob/main/photos/example%20search.png?raw=true" alt="Photo"/></br>
<img src="https://github.com/xstiff/weather-app/blob/main/photos/server%20response.png?raw=true" alt="Photo"/>