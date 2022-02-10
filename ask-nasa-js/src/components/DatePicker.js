import React, {useState} from 'react';
import TodayDateString from "./TodayDateString";

export default function DatePicker({inputDate, handleDateChange, handleSubmit}) {
    // const checkIsDateInRange = (e) => {
    //     if (e.target.value > maxDate || e.target.value < minDate) {
    //         setDisable(true);
    //     }
    // }

    return (
        <form
            onSubmit={handleSubmit}>
            <label>
                Search APOD by date:
                <br/>
                <input
                    type="date"
                    value={inputDate}
                    onChange={handleDateChange}
                />
            </label>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}