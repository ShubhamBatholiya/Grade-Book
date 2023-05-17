import React from "react"
import './CSS/modaldata.css'

function ModalData(props) {
    return(
      <>
        <div className="modal-wrapper">
          <div className="modaldata">
            <h1>Student Details</h1>
            <hr />
            <br />
            <p> Name : {props.data1[props.index].details.Name}</p> <br />
            <p> Fathers Name : {props.data1[props.index].details["Fathers name"]}</p> <br />
            <p> Address :  {props.data1[props.index].details.Address}</p> <br />
            <p> Contact :  {props.data1[props.index].details.Contact}</p> <br />
            <p> Email :  {props.data1[props.index].details.Email}</p> <br />
            <button className="closePopupBtn" onClick={props.closeTheModal}>Close</button>
          </div>
          </div>
      </>
    )
  }

export default ModalData