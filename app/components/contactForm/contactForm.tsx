"use client"
import React, { useState } from 'react';
import DisplayContact from '../displayContact';
import { onEventType } from '@/app/types/componentsTypes';


const ContactForm = () => {
  const [userName, setuserName] = useState<string>("")
  const [userEmail, setuserEmail] = useState<string>("")
  const [userMsg, setuserMsg] = useState<string>("")

  const getUser = (event:onEventType) =>{
    setuserName(event.target.value)
  }

  const getEmail = (event:onEventType) =>{
    setuserEmail(event.target.value)
  }

  const getMsg = (event:onEventType) =>{
    setuserMsg(event.target.value)
  }
  const onClickHandler = () =>{
    alert("clicked")
  }
  return (
    <>
    <div className="max-w-md w-96 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form action="#" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
            Name
          </label>
          <input onChange={getUser}
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input onChange={getEmail}
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">
            Message
          </label>
          <textarea onChange={getMsg}
            id="message"
            name="message"
           className="w-full px-2 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={onClickHandler}
            type="submit"
            className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    
    </>
  );
};

export default ContactForm;
