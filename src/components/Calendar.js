import React from "react";
import dateFns from "date-fns";

const myData = "Mon Feb 11 2019 00:00:00 GMT-0800 (Pacific Standard Time)"
const myMessage = "Endoscopy appointment"

class Calendar extends React.Component {
    //by default use today's date
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };
    //Render the Calendar Header for display
    renderHeader() {
        const formatDate = "MMMM YYYY";
        return (<div className="header row flex-middle">
            <div className="col col-start">
                <div className="icon" onClick={this.nextMonth}>
                    chevron_left
        </div>
            </div>
            <div className="col col-center">
                <span>
                    {dateFns.format(this.state.currentMonth, formatDate)}
                </span>
            </div>
            <div className="col col-end" onClick={this.prevMonth}>
                <div className="icon">chevron_right</div>
            </div>
        </div>
        );
    }
    //render the names of the day of the week and display them
    renderDays() {
        //date format and days in a week list
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);
        //iterate through 7 days and format it to display starting from the beginning of the week
        //format the output
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }
    renderCells() {
        //constants for the current days, months and start dates
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";
        //found this online but it seems to select the date with an onclick
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        { (day == myData) && <span className="dot"></span>}
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }
    //select the date with the onclick event, defined
    onDateClick = day => {
        this.setState({selectedDate: day}); 
        if ( day == myData ) {
            alert(myMessage)
        }
    }
    nextMonth = () => {
        this.setState({ currentMonth: dateFns.subMonths(this.state.currentMonth, 1) });
    }
    prevMonth = () => {
        this.setState({ currentMonth: dateFns.addMonths(this.state.currentMonth, 1) });
    }

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}
export default Calendar