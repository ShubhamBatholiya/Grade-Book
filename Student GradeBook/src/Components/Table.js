/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import data from '../data.json'
import './CSS/table.css'
import ModalData from './ModalData';
import Statistics from './Statistics';


function Table() {

  const [data1, setdata1] = useState(data);
  const [order, setorder] = useState("ASC");
  const [searchValue, setSearchValue] = useState("");
  const [NoButton, setNoButton] = useState("0 - 10");
  const [NameButton, setNameButton] = useState("A - Z");
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(null);
  const [showStatistics, setShowStatistics] = useState(false)
  const [statisticsBtnContent, setStatisticsBtnContent] = useState("Show Statistics")

  const handleRow = (e, i) => {
    e.target.parentNode.classList.toggle('active')
    console.log(e.target.parentNode)
  }

  const showTheModal = (i, e) => {
    e.stopPropagation();
    setIndex(i)
    setShowModal(true);
  }
  const closeTheModal = () => setShowModal(false);

  let status, finalGrade;
  let tdata = data1.map((student, i) => {
    finalGrade = (0.6 * (student.examGrade) + 0.4 * (student.ratingGrade)).toFixed(2);
    if (finalGrade > 4) {
      status = "Passed";
    } else {
      status = "Failed";
    }
    return (
      <tr key={student.id} className='tdRow' onClick={(e) => handleRow(e, i)}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.ticketNo}</td>
        <td>{student.ratingGrade}</td>
        <td>{student.examGrade}</td>
        <td>{finalGrade}</td>
        <td>{status}</td>
        <td><button onClick={(e) => showTheModal(i, e)} className="detailBtn">Details</button></td>
      </tr>
    )
  })

  // Sort By Name
  const sortByName = (name) => {
    if (order === "ASC") {
      const sorted = data1.sort((a, b) => {
        return a[name].toLowerCase() < b[name].toLowerCase() ? 1 : -1;
      })
      setdata1(sorted);
      setorder("DSC")
      setNameButton("A - Z")
    }
    if (order === "DSC") {
      const sorted = data1.sort((a, b) => {
        return a[name].toLowerCase() > b[name].toLowerCase() ? 1 : -1;
      })
      setdata1(sorted);
      setorder("ASC")
      setNameButton("Z - A")
    }
  }
  // Sort By Final Grade
  const sortByNo = (examgrade, ratinggrade) => {
    if (order === "ASC") {
      const sorted = data1.sort((a, b) => {
        a = Number(a[examgrade]) * 0.6 + Number(a[ratinggrade]) * 0.4;
        b = Number(b[examgrade]) * 0.6 + Number(b[ratinggrade]) * 0.4;
        return a > b ? 1 : -1;
      })
      setdata1(sorted);
      setorder("DSC")
      setNoButton("10 - 0")
    }
    if (order === "DSC") {
      const sorted = data1.sort((a, b) => {
        a = Number(a[examgrade]) * 0.6 + Number(a[ratinggrade]) * 0.4;
        b = Number(b[examgrade]) * 0.6 + Number(b[ratinggrade]) * 0.4;
        return a < b ? 1 : -1;
      })
      setdata1(sorted);
      setorder("ASC")
      setNoButton("0 - 10")
    }
  }
  // All Students
  const All = () => {
    setdata1(data)
  }
  // Passed Students
  const Passed = () => {
    const passedStudents = data.filter((student) => {
      let finalGrade = (0.6 * (student.examGrade) + 0.4 * (student.ratingGrade)).toFixed(2);
      if (finalGrade > 4) {
        return student;
      }
    })
    setdata1(passedStudents)
  }
  // Failed Students
  const Fail = () => {
    const failedStudents = data.filter((student) => {
      let finalGrade = (0.6 * (student.examGrade) + 0.4 * (student.ratingGrade)).toFixed(2);
      if (finalGrade <= 4) {
        return student;
      }
    })
    setdata1(failedStudents)
  }
  // Statistics Show and Hide
  const showHideStatistics = () => {
    if (showStatistics) {
      setShowStatistics(false)
      setStatisticsBtnContent("Show Statistics")

    }
    else {
      setShowStatistics(true)
      setStatisticsBtnContent("Hide Statistics")

    }
  }
  // Search By name or id
  const searchHandle = (e) => {
    e.preventDefault();
    let searchedStudents = data.filter((student) => {
      if (searchValue === '')
        return student
      else if (student.name.toLowerCase() === searchValue.toLowerCase() || student.id === searchValue)
        return student
    })
    setdata1(searchedStudents);
    setSearchValue('')
  }

  const Reset = () => {
    setdata1(data)
    setSearchValue('')
  }


  return (
    <>
      <div>
        <div className="btn-div">
          <button className="sort-btn" onClick={All}>All</button>
          <button className="sort-btn" onClick={Passed}>Pass</button>
          <button className="sort-btn" onClick={Fail}>Fail</button>
          <button className="sort-btn" onClick={() => sortByNo("examGrade", "ratingGrade")}>{NoButton}</button>
          <button className="sort-btn" onClick={() => sortByName("name")}>{NameButton}</button>
          <form action="" className='search-form' onSubmit={searchHandle}>
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type="search" name="" id="search" placeholder='Search By Name or Id' />
            <button type="submit" id="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>

            <button onClick={Reset} id="reset-btn">
              RESET
            </button>
          </form>
        </div>
      </div>
      <table className='table'>
        <thead>
          <tr className='headRow'>
            <th>No</th>
            <th>Name</th>
            <th>Ticket's No</th>
            <th>Rating Grade</th>
            <th>Exam Grade</th>
            <th>Final Grade</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tdata}
        </tbody>
      </table>

      {/* detail btn component */}

      {showModal && <ModalData index={index} data1={data1} closeTheModal={closeTheModal} />}

      {/* Statistics */}

      <div className='statisticsBtnDiv'>
        <button className='statisticsBtn' onClick={showHideStatistics}>{statisticsBtnContent}</button>
      </div>
      {showStatistics && <Statistics />}
    </>
  )
}

export default Table
