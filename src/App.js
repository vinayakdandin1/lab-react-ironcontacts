import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import React, {useState} from 'react'

function App() {

  let clonedArray = JSON.parse(JSON.stringify(contacts))

  const [displayContacts, setDisplayContact] = useState(clonedArray.slice(0, 5))

  const sortByNameFunction = () => {
      let sortedContacts = JSON.parse(JSON.stringify(displayContacts))

      sortedContacts.sort((a, b) => {
          if (a.name > b.name) {
              return 1
          } else if (a.name < b.name) {
              return -1
          } else {
              return 0
          }
      })
      setDisplayContact(sortedContacts)   
  }

  const sortByRating = () => {
      let sortedByRating = JSON.parse(JSON.stringify(displayContacts))

      sortedByRating.sort((a, b) => {
          if (a.popularity > b.popularity) {
              return -1
          } else if (a.popularity < b.popularity) {
              return 1
          } else {
              return 0
          }
      })
      setDisplayContact(sortedByRating)
  }

  const deleteOne = (contactId) => {
    let unDeletedContacts = displayContacts.filter((singleContact) => {
      return singleContact.id !== contactId
  })

    setDisplayContact(unDeletedContacts)
  }
  
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={() => {
        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        let updatedContacts = [...displayContacts, randomContact]
        setDisplayContact(updatedContacts)
        
      }} >Add Random</button>

      <button onClick={sortByNameFunction}> Sort by name</button>

      <button onClick={sortByRating}> Sort by Rating </button>
      <div>

     { displayContacts.map((singleContact, index) => {
        
        return(
          <div key={index}>
            <img className="singleImage" src={singleContact.pictureUrl} />  
            <span>{" "}{" "}{" "}{" "}{singleContact.name}</span>    
            <span>{" "}{" "}{" "}{" "}{(singleContact.popularity).toFixed(2)}{" "}{" "}{" "}{" "}</span>  
            <button onClick={() => deleteOne(singleContact.id)}>Delete</button>  
          </div>
        )                   
    })}
        
      </div>
    </div>
  );
}

export default App;
