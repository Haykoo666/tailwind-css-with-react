import React from "react"
import aboutPhoto from "../assets/images/about.jpg"
import Button from "../shared/Button"

const Content = () => {
  return (
    <main>
      <section id="hero">
        <article className="container">
          <h1 className="pt-24 font-[900] text-5xl max-w-2xl text-center mx-auto leading-snug lg:text-4xl lg:pt-16 md:text-3xl md:pt-14 md:max-w-full sm:text-2xl sm:pt-12">
            Grow your business online.
            Get. More. Leads.
          </h1>
          <p className="text-xl text-center tracking-tight max-w-xl mx-auto mt-[18px] md:text-lg md:mt-4 sm:mt-2 sm:text-base">
            Wanna get serious into digital marketing? Then you need leads and this is where we can help you.
          </p>
          <article className="flex justify-center gap-7 mt-8 sm:flex-col sm:gap-3">
            {/* <a href="#" className="btn sm:text-center sm:text-base">
              Start here.
            </a> */}
            <Button text="Start here." media="sm:text-center sm:text-base sm:max-w-full"/>
            <a 
              href="#" 
              className="py-[10px] px-6 text-lightRed rounded-2xl text-xl tracking-tight border-2 border-lightRed sm:text-center sm:text-base hover:text-[darkgoldenrod] transition duration-300 hover:shadow-btnShadow"
            >
              Learn More  
            </a>
          </article>
        </article>
      </section>

      <section id="about" className="mt-40 md:mt-28">
        <article className="container">
          <div className="flex justify-between pb-32 lg:flex-col lg:gap-y-9 lg:mt-32 lg:pb-28 sm:pb-20">
          
            <div className="flex flex-col w-1/2 lg:w-full">
              <p className="font-bold text-xl text-darkRed tracking-tight dark:text-[forestgreen]">about us</p>
              <p className="font-black text-4xl mt-[2px] lg:text-3xl sm:text-2xl">The team behind the brand.</p>
              <p className="max-w-sm mt-[10px] text-lg lg:max-w-full sm:text-base">
                Proin elementum fermentum auctor. Nulla semper, est eget congue pellentesque, erat nulla molestie mi, in finibus leo nisl ac lectus. Praesent non urna. Nulla congue porta lectus in laoreet. Aenean pellentesque vitae metus id porttitor.t
              </p>
              <Button text="Learn More" classes="mt-6" media="sm:max-w-full"/>
            </div>

            <div className="flex flex-col max-w-[450px] lg:max-w-full">
              <img src={aboutPhoto} alt="about photo" />
            </div>

          </div>
        </article>
      </section>

      
    </main>
  )
}

export default Content
