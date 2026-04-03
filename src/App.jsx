import { useState } from 'react'
import './App.css'
import GroupCard from './groups/group-card'
import { Link } from 'react-router';

function App() {
  const initialState = {
    searchText: '',
    selectedGroupId: undefined
  }

  const [state, setState] = useState(initialState);

  const groupList = [
    { id: 1, name: "Best Group" },
    { id: 2, name: "Stupid Group" },
    { id: 3, name: "Normal Group" },
    { id: 4, name: "Psycho Group" },
    { id: 5, name: "Delulu Group" }]

  return (
    <>
      <Link to='/counter'>Go to counter</Link>
      <input type='text'
        onChange={({ target: { value } }) => setState({ ...state, searchText: value })} />
      {
        groupList.map(({name, id}) => {
          // return group.includes(state.searchText) ?
          //   <GroupCard grpName={group} /> :
          //   undefined;
          return name.includes(state.searchText) &&
            <GroupCard
              key={id}
              grpName={name}
              isSelected={state.selectedGroupId === id}
              id={id}
              onCardClick={(id) => setState({ ...state, selectedGroupId: id })}
            />;
        })
      }
    </>
  )
}

export default App
