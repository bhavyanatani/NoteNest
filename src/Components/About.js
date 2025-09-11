import React from 'react'
import { useContext } from 'react'
import notecontext from '../Context/Notes/notecontext'
export default function About() {
  const a  =  useContext(notecontext)
  return (
    <div>
      Hello My name is {a.name} and my rollno is {a.rollno}
    </div>
  )
}
