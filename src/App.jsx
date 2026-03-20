import { useState } from 'react'
import './App.css'
import GroupCard from './groups/group-card'
import { Link } from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  const groupList = ["Best Group", "Stupid Group", "Normal Group", "Psycho Group", "Delulu Group"]

  return (
    <>
      <Link to='/counter'>Go to counter</Link>
      {
        groupList.map((group) => <GroupCard grpName={group} />)
      }
    </>
  )
}

export default App
