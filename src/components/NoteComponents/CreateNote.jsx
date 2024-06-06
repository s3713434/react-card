import React from 'react'
import { LinearProgress } from '@mui/material'

export default function CreateNote() {
  return (
    <div className='note'>
      <textarea></textarea>
      <div className="note__footer">
        <span className="label">
          <button className="note__save"></button>
        </span>
      </div>
      <LinearProgress 
      className='char__progress' 
      variant='determinate' 
      value={100}/>
    </div>
  )
}
