import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function Note({id,text,deleteNote}) {
  return (
    <div className='note'>
      <div className="note__body">
        {text}
      </div>
      <div className="note__footer" style={{justifyContent:'flex-end'}}>
        <DeleteForeverOutlinedIcon
        className='note__delete'
        aria-hidden='true'
        onClick={()=>deleteNote(id)}/>
      </div>
    </div>
  )
}
