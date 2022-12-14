import "./header.css" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import {format} from "date-fns"


const Header = () => {

  const[openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const[openOptions, setOpenOptions] = useState(false);
  const[options, setOptins] = useState({
    adult:1,
    children:0,
    room:1
  })

  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
              <div className="headerListItem active">
              <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
              </div>
              </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flight</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Atractions</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi</span>
                </div>  
            </div>
            <h1 className="headerTitle">New web page</h1>
            <p className="headerDecr">About page</p>
            <button className="headerButton">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input 
                type="text"
                placeholder="Where are you going"
                className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon"/>
                <span onClick={()=>setOpenDate(!openDate)}
              className="headerSerachText">{`${format(date[0].startDate, "MM/dd/yyyy")} 
                to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span className="headerSerachText">{`${options.adult} adult . ${options.children} 
                children . ${options.room} room`}</span>
                <div className="options">
                  <div className="optionItems">
                    <span className="optionText">Adult</span>
                    <button className="optionButtonCounter">-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionButtonCounter">+</button>
                  </div>
                  <div className="optionItems">
                    <span className="optionText">Children</span>
                    <button className="optionButtonCounter">-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionButtonCounter">+</button>
                  </div>
                  <div className="optionItems">
                    <span className="optionText">Room</span>
                    <button className="optionButtonCounter">-</button>
                    <span className="optionCounterNumber">1</span>
                    <button className="optionButtonCounter">+</button>
                  </div>
                </div>
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header