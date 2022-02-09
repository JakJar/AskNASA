import './App.css';
import React, {useEffect, useState} from "react";
import TodayDateString from "./components/TodayDateString";
import Header from "./components/Header";
import ShowStatusOrContent from "./components/ShowStatusOrContent";

export default function App() {
    const baseApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=Fuzjtf3URitjt26HFWWQgQqsLVNZTdfBTcVFcMah';

    const [data, setData] = useState("Loading...");
    const [ApiUrl, setApiUrl] = useState(baseApiUrl)
    const [inputDate, setInputDate] = useState(TodayDateString());

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
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setApiUrl(`${baseApiUrl}&date=${inputDate}`);
                }}>
                <label>
                    Search APOD by date:
                    <br/>
                    <input
                        type="date"
                        value={inputDate}
                        onChange={e => {
                            setInputDate(e.target.value);
                        }}
                    />
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}