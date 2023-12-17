import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const ContactForm = () => {
  const currentDate = new Date();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [showSucessMessage, setShowSuccessMessage] = useState(true)
  const onSubmit = () => {
    setShowSuccessMessage(false)
  }
  return (
    <div>
      <div className="flex flex-wrap gap-6 px-3 border-t border-[#1E2D3D] text-[17px]">
        <div className="lg:w-[47%] w-full md:border-r md:border-[#1E2D3D] sm:w-full flex items-center h-[74vh]">
          {
            showSucessMessage ? (
              <form action="#" className="space-y-3 w-full py-3  px-4" method="POST" onSubmit={handleSubmit(onSubmit)}>

                <div>
                  <label htmlFor="name" className="block mb-2 text-[16px] font-medium text-[#607B96] dark:text-gray-300">name</label>
                  <input type="text" name='name'
                    {...register('name', { required: "true" })}
                    onChange={handleInputChange} value={formData.name} id="name" className="shadow-sm bg-[#011221] border border-[#1E2D3D] text-[#607B96] text-[16px] rounded-lg  block w-full p-2.5" placeholder="name" />
                  {errors.name && <small className='text-red-700'>*Name is required*</small>}
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-[16px] font-medium text-[#607B96] dark:text-gray-300">email</label>
                  <input type="email" name='email'
                    {...register("email", { required: true })}
                    onChange={handleInputChange} value={formData.email} id="email" className=" bg-[#011221] border border-[#1E2D3D] text-[#607B96] text-[16px] rounded-lg  block w-full p-2.5" placeholder="abc@gmail.com" />
                  {errors.email && <small className='text-red-700'>*Email is required*</small>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-[16px] font-medium text-[#607B96] dark:text-gray-400">Your message</label>
                  <textarea id="message"
                    {...register('message', { required: true })}
                    onChange={handleInputChange}
                    value={formData.message} name="message" rows="4" className="block p-2 bg-[#011221] border border-[#1E2D3D] w-full text-[16px] text-[#607B96] rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  {errors.message && <small className='text-red-700'>"Please write the message"</small>}
                </div>
                <div className="sm:col-span-2 py-2">
                <button type="submit" className="py-3 bg-[#1E2D3D] border border-[#1E2D3D] px-5 text-[16px] font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </div>
              </form>
            ) : (
              <div className="text-center w-72 mx-auto">
                <h2 className='text-white text-2xl mb-3'>Thank you! 🤘</h2>
                <p className='mb-3'>Your message has been accepted. You will recieve answer really soon!</p>
                <a href='/ContactPage' type="submit" className="py-3 bg-[#1E2D3D] border border-[#1E2D3D] px-5 text-[16px] font-medium text-center text-white rounded-lg  sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send-new-message</a>
              </div>
            )
          }
        </div>
        <div className="md:mt-8 py-3 lg:w-[457px] sm:w-full px-3 tex-[17px]">
          <ul className='list-decimal h-2'>
            <li className='before:mx-1 h-8'> <span className='text-[#C98BDF]'>return</span> <span className='text-yellow-400'> (</span></li>
            <li className='before:mx-1 h-8'> <span className='text-[#C98BDF] '>const</span> <span className='text-[#5565E8]'>button = document.querySelector</span>(<span className='text-[#FEA55F]'>'#submit'</span> )</li>
            <li className='before:mx-1 h-8'> <span className='text-[#C98BDF] '>const</span>  <span className='text-[#5565E8]'>message = </span> </li> {
              <>
                <li className='before:mx-1'><span className='text-[#5565E8] '>YourName :</span>   <span className='text-[#FEA55F] my-2'>" {formData.name} "</span></li>
                <li className='before:mx-1'><span className='text-[#5565E8] '> Email :</span> <span className='text-[#FEA55F]'>" {formData.email} "</span></li>
                <li className='before:mx-1'><span className='text-[#5565E8] '>Message : </span><span className='text-[#FEA55F]'>" {formData.message} "</span></li>
                <li className='before:mx-1 h-8'><span className='text-[#5565E8]'>Date : </span><span className='text-[#FEA55F]'>{currentDate.toDateString()}</span></li>
              </>
            }
            <li className='before:mx-1 h-8'><span className='text-[#5565E8]'>  button.addEventListner</span>(<span className='text-[#FEA55F]'>'Click', ( )= </span> </li>
            <li className='before:mx-1 h-8'> <span className='text-[#5565E8]'>form.send(message)</span></li>
            <li className='before:mx-1 h-8'>   )  ) </li>
      
          </ul>
        </div>
      </div>
    </div>
  )
}