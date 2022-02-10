import './App.css';
import React, {useEffect, useState} from "react";
import TodayDateString from "./components/TodayDateString";
import Header from "./components/Header";
import ShowStatusOrContent from "./components/ShowStatusOrContent";
import DatePicker from "./components/DatePicker";

export default function App() {
    const baseApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Fuzjtf3URitjt26HFWWQgQqsLVNZTdfBTcVFcMah';
    const [data, setData] = useState("Loading...");
    const [ApiUrl, setApiUrl] = useState(baseApiUrl)
    const [inputDate, setInputDate] = useState(TodayDateString());

    const handleSubmit = (e) => {
        e.preventDefault();
        setApiUrl(`${baseApiUrl}&date=${inputDate}`);
    }

    const handleDateChange = (e) => {
        setInputDate(e.target.value);
    }

    useEffect(() => {
        fetch(ApiUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setData("Error!");
            })
    }, [ApiUrl])

    return (
        <div className="App">
            <Header/>
            <ShowStatusOrContent data={data}/>
            <DatePicker
                inputDate={inputDate}
                handleDateChange={handleDateChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}