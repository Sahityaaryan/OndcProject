import Cards from "./Cards";

export default function About(){


    return (
        <>
        <section className="text-gray-600 body-font">
   

  

      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-white lg:text-7xl md:text-6xl">
       About us
      </h2>

      <p className="about_desc" >
        
We are a group of aspiring developers, committed to learning and mastering the latest web development technologies. Our team is passionate about creating innovative and dynamic web applications that solve real-world problems. We work together to leverage our individual strengths and skills in engineering web development, from front-end design and user experience to back-end architecture and database management. As a team, we are dedicated to continuous learning and improvement, and we strire to deliver high-quality web solutions that exceed our clients' expectations.
      </p>
      <br></br>
      
      
    <div >
        <div>
        <Cards details={{'name':'Sahitya Aryan','description':'Full Stack Developer'}}/>
            </div>
        <Cards details={{'name':'Shivam Singh','description':'Full Stack Developer'}}/>
        <Cards details={{'name':'Yash Gupta','description':'Full Stack Developer'}}/>
        <Cards details={{'name':'Piyush Kumar Prasad','description':'Full Stack Developer'}}/>
    </div>


   

    </section>
        </>
    )
}