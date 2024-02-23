import Cards from "./Cards";

import SahityaImg from "../../public/images/sahitya.png"

import ShivamImg from "../../public/images/shivam.jpg"

import YashImg from "../../public/images/yash.jpg"

import PiyushImg from "../../public/images/piyush.jpg"

export default function About() {


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
                    <Cards details={{ 'name': 'Sahitya Aryan', 'description': 'Full Stack Developer', 'img': SahityaImg ,'github':'https://github.com/Sahityaaryan' , 'linkedIn':'https://www.linkedin.com/in/sahityaaryan/','twitter':'https://twitter.com/SahityaAryan'}} />
                    <Cards details={{ 'name': 'Shivam Singh', 'description': 'Full Stack Developer', 'img': ShivamImg, 'github':'https://github.com/shivamsinghsr' , 'linkedIn':'https://www.linkedin.com/in/shivam-singh-90658a256/','twitter':'https://x.com/shivams_24?s=08' }} />
                    <Cards details={{ 'name': 'Yash Gupta', 'description': 'Full Stack Developer', 'img': YashImg,'github':'https://github.com/Yashgupta9798','linkedIn':'https://www.linkedin.com/in/yash-gupta-y2519s/' , 'twitter':'' }} />
                    <Cards details={{ 'name': 'Piyush Kumar Prasad', 'description': 'Full Stack Developer', 'img': PiyushImg,'github':'https://github.com/PiyushPrasad01' , 'linkedIn':'https://www.linkedin.com/in/piyushkumarprasad/','twitter':'https://x.com/piyush_pd_01?t=1Bh8fFnw4y2yTzqOv7La8w&s=09' }} />
                </div>

            </section>
        </>
    )
}