import React from 'react'
import { LinearProgress } from '@mui/material'

export default function CreateNote({textHandler,saveHandler,inputText}) {
  // Character limit
  const charLimit = 100
  const charLeft = charLimit - inputText.length
  
  return (
    <div className='note' style={{background:'rgba(255,255,255,0)'}}>
      <textarea
      cols='10'
      rows='5'
      value={inputText}
      placeholder='Type...'
      onChange={textHandler}
      maxLength={charLimit}></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} Left</span>
          <button className="note__save" onClick={saveHandler}>Save</button>
      </div>
      <LinearProgress 
      className='char__progress' 
      variant='determinate' 
      color='secondary'
      value={charLeft}/>
    </div>
  )
}
