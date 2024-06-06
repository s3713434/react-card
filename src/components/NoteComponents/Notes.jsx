import { React,useEffect,useState } from 'react'
import Note from './Note'
import CreateNote from './CreateNote'
import '../css/Note.css'

export default function Notes() {
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    // Check if there are notes in localStorage
    // if can't fine anything then return null
    
  },[])
  return (
    <div className='notes'>
      <Note/>
      <CreateNote/>
    </div>
  )
}
