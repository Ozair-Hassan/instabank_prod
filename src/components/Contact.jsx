import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles, { layout } from '../styles'
import { contactImg } from '../assets'

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_1td2a0x',
        'template_tpibdud',
        form.current,
        'I8_6WL1cu64Q_sju2'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section
      id="contact"
      className={layout.section2}
    >
      <div
        className={` flex justify-center items-center flex-col relative sm:w-[50%] xs:w-[75%] xxs:w-[100%] `}
      >
        <h2 className={styles.heading4}>Contact Us</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" border-2 border-yellow-200 rounded-[20px]  flex xs:w-full flex-col items-start xxs:px-2 xxs:w-[250px]  xxs:py-5  xs:pr-16 xs:pl-6"
        >
          <label className={`${styles.heading3} text-[10px]`}>Name</label>
          <input
            type="text"
            name="user_name"
            className={`w-[100%] h-[35px] p-[2px] ${styles.formInput} `}
          />
          <label className={`${styles.heading3}`}>Email</label>
          <input
            type="email"
            name="user_email"
            className={`w-[100%] h-[35px] p-[2px]  ${styles.formInput} `}
          />
          <label className={`${styles.heading3}`}>Message</label>
          <textarea
            className={`max-w-[100%] min-w-[100%] py-[2px] px-[2px]  ${styles.paragraph} ${styles.formInput}`}
            name="message"
          />
          <input
            className={`mt-[30px] py-4 px-10 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] cursor-pointer`}
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={contactImg}
          alt="card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  )
}

export default Contact
