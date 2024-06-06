import { React,useEffect,useState } from 'react'
import Note from './Note'
import CreateNote from './CreateNote'
import '../css/Note.css'
import { v4 as uuidv4 } from 'uuid'

export default function Notes() {
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState(true)
  const [inputText,setInputText] = useState('')

  // Get text and store in state
  const textHandler = (e)=>{
    setInputText(e.target.value)
  }

  // Add new note to the state Array
  const saveHandler = ()=>{
    setNotes((prevState)=>[
      ...prevState,
      {
        id:uuidv4(),
        text:inputText
      }
    ])
    // clear the textarea
    setInputText('')
  }

  const deleteNote =(id)=>{
    const filterNotes = notes.filter((note)=>note.id !== id)
    setNotes(filterNotes)
  }


  useEffect(()=>{
    // Check if there are notes in localStorage
    // if can't fine anything then return null
    const data = JSON.parse(localStorage.getItem('Notes'))
    if(Array.isArray(data) && data.length > 0){
      setNotes(data)
    }
    setLoading(false)
  },[])

  useEffect(()=>{
    if(!loading){
      localStorage.setItem('Notes',JSON.stringify(notes))
    }
  },[notes,loading])

  if(loading){
    return <div>loading...</div>
  }

  return (
    <div className='notes'>
      {notes.map((note)=>(
        <Note
        key={note.id}
        id={note.id}
        text={note.text}
        deleteNote={deleteNote}
        />
      ))}
      <CreateNote
      textHandler={textHandler}
      saveHandler={saveHandler}
      inputText={inputText}/>
    </div>
  )
}
