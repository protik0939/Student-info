import { useEffect, useState } from 'react'
import './App.css'
import Students from './components/Students/Students'
import Starred from './components/Starred/Starred';

function App() {
  const [sinfo, setSinfo] = useState([]);
  const [starredStudent, setStarredStudent] = useState([]);

  function addToLs(keyy, idd) {
    let iddArray = JSON.parse(localStorage.getItem(keyy)) || [];
    iddArray.push(idd);
    localStorage.setItem(keyy, JSON.stringify(iddArray));
  }

  function removeFromLs(keyy, idd) {
    let iddArray = JSON.parse(localStorage.getItem(keyy)) || [];
    iddArray = iddArray.filter(item => item !== idd);
    localStorage.setItem(keyy, JSON.stringify(iddArray));
  }

  useEffect(() => {
    if (sinfo.length) {
      let iddArray = JSON.parse(localStorage.getItem('Stars')) || [];
      const temp = [];
      for (const id of iddArray) {
        const objc = sinfo.find(objc => objc.id === id);
        if (objc) {
          temp.push(objc);
        }
      }
      setStarredStudent(temp);
    }
  }, [sinfo])

  const handleStarred = starr => {
    if (starredStudent.includes(starr)) {
      const temp = starredStudent.filter(student => student !== starr);
      setStarredStudent(temp);
      removeFromLs('Stars', starr.id);
    } else {
      const temp = [...starredStudent, starr];
      setStarredStudent(temp);
      addToLs('Stars', starr.id);
    }
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/protik0939/student-data/main/student-info.json')
      .then(res => res.json())
      .then(data => setSinfo(data));
  }, [])

  return (
    <>
      <h1 className='headingText'>Students Info</h1>
      <h6 className='headingText'>Tap on star icon to mark as Star/Unstar</h6>
      <div>
        <Starred starredStudent={starredStudent}></Starred>
      </div>
      <div className='sinfoContainerInvisible'>
        <div className='sinfoContainer'>
          {
            sinfo.map(student => <Students handleStarred={handleStarred} key={student.id} student={student}></Students>)
          }
        </div >
      </div>
    </>
  )
}

export default App
