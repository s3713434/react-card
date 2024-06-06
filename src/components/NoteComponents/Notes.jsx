import React from 'react'
import Note from './Note'
import CreateNote from './CreateNote'

export default function Notes() {
  return (
    <div className='notes'>
      <Note/>
      <CreateNote/>
    </div>
  )
}
