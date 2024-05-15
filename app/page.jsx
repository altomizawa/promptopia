'use client'

import Feed from "@components/Feed";
import { useState } from "react";

function Home() {
  const[email, setEmail] = useState('')
  const[form, setForm] = useState({})
  const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

  const validateEmail = (email) => {
    if (email === ''){
      return true
    }
    const isEmailValid = regexEmail.test(email)
    return isEmailValid
  }

  const handleInput = (e) => {
    const {name, value} =  e.target;
    setEmail(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(signin)
    setForm({
      name: formData.get('name'),
      email: formData.get('email')
    })
  }

  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI prompting tool
        for the modern world to discover, create and share creative prompts
      </p>
      
      <Feed />
    </section>
  )
}

export default Home
