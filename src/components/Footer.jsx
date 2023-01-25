import React from 'react'
import footerLogo from '../assets/images/footer-logo.svg'
import Button from './../shared/Button';

const Footer = () => {
  return (
    <footer className='bg-darkGray py-20 px-5 md:py-10 dark:bg-black'>
      <div className="container ">
        <section className='flex gap-40 md:flex-col md:gap-14'>
          <article className='flex flex-col  text-white max-w-xs md:max-w-full'>
            <figure className='mb-5'>
              <img src={footerLogo} alt="footer logo" />
            </figure>
            <p className='mb-3 text-xl'>
              Sign up for our newsletter to get latest news from us
            </p>
            <input type="email" className='mb-6 bg-[#454545] rounded-xl outline-none text-xl py-3 pl-4 border-[1px] border-[#595959] focus:border-lightRed placeholder:italic sm:text-lg sm:py-2' placeholder='Enter your email'/>
            <Button text="Submit" classes='hover:text-black transition duration-300'/>
          </article>

          <article className='flex flex-col md:text-center md:items-center'>
            <strong className='pb-5 text-lightRed text-xl'>
              Jump to
            </strong>
            <nav className='flex flex-col gap-3 text-white md:items-center'>
              <a href="#" className='hover:text-blue-700 transition duration-300 w-fit'>About</a>
              <a href="#" className='hover:text-blue-700 transition duration-300 w-fit'>Contact</a>
              <a href="#" className='hover:text-blue-700 transition duration-300 w-fit'>Services</a>
              <a href="#" className='hover:text-blue-700 transition duration-300 w-fit'>Case Studies</a>
              <a href="#" className='hover:text-blue-700 transition duration-300 w-fit'>Blog</a>
              </nav>
          </article>

        </section>
      </div>
    </footer>
  )
}

export default Footer