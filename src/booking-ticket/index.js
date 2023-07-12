import React, { Component } from 'react';
import Seat from './seat';

export default class Booking extends Component {
  render() {
    return (
       <div>
  <h1>Movie Seat Selection</h1>
  <div className="container">
    <div className="w3ls-reg">
      {/* input fields */}
      <div className="inputForm">
        <h2>fill the required details below and select your seats</h2>
        <div className="mr_agilemain">
          <div className="agileits-left">
            <label> Name
              <span>*</span>
            </label>
            <input type="text" id="Username" required />
          </div>
          <div className="agileits-right">
            <label> Number of Seats
              <span>*</span>
            </label>
            <input type="number" id="Numseats" required min={1} />
          </div>
        </div>
        <button onclick="takeData()">Start Selecting</button>
      </div>
      {/* //input fields */}
      {/*-728x90-*/}
      {/* seat availabilty list */}
      <ul className="seat_w3ls">
        <li className="smallBox greenBox">Selected Seat</li>
        <li className="smallBox redBox">Reserved Seat</li>
        <li className="smallBox emptyBox">Empty Seat</li>
      </ul>
      {/* seat availabilty list */}
      {/* seat layout */}
      <Seat/>
      {/* //seat layout */}
      {/* details after booking displayed here */}
      <div className="displayerBoxes txt-center" style={{overflowX: 'auto'}}>
        <table className="Displaytable w3ls-table" width="100%">
          <tbody><tr>
              <th>Name</th>
              <th>Number of Seats</th>
              <th>Seats</th>
            </tr>
            <tr>
              <td>
                <textarea id="nameDisplay" defaultValue={""} />
              </td>
              <td>
                <textarea id="NumberDisplay" defaultValue={""} />
              </td>
              <td>
                <textarea id="seatsDisplay" defaultValue={""} />
              </td>
            </tr>
          </tbody></table>
      </div>
      {/* //details after booking displayed here */}
    </div>
  </div>
</div>

    )
  }
}
