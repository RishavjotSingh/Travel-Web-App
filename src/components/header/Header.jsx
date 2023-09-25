import React, { useState } from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom'

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([      /* This is an array and the first element in the array is the object. The name for this constant is 'date' */
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);

    const [options, setOptions] = useState({
            adult:1,
            children:0,
            room:1,
        });

    const handleOption = (name, operation) =>{      /* when the button is clicked, handleOption is called, it sets the options. It takes the prev state (adult: 1, children:0, room:1), then it finds the 'name' ex: 'adult' from the object, checks the operation, if it is "i", then it finds the value of options[name] which is 1 and adds 1 to it, otherwise subtracts 1 from it.*/
        setOptions((prev) =>{
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const navigate = useNavigate();

    const handleSearch = ()=>{
      navigate("/hotels", {state:{destination, date, options}});  
    };

  return (
    <div className='header'>
        <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
            <div className='headerList'>
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            {type !== "list" && 
            <>
                <h1 className="headerTitle">Enjoy heavy discounts for your next vacation</h1>
                <h4 className="headerDesc">
                    Travel planning made simple!
                </h4>
                
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput"
                        onChange={e=>setDestination(e.target.value)}/>
                    </div>
                    <div className="headerSearchItem">  
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>     
                        <span onClick={()=>setOpenDate(!openDate)}className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>   
                        
                        {openDate && <DateRange             /* When openDate is true, show this component */
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}        /* Event. When we change the date, this is going to update the date */
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleOption("adult", "d" )}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>
                        }
                    </div> 
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>                   
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Header