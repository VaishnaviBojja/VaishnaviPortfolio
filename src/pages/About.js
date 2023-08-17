import react from "react";


  

const About=()=>{
    const workDetails = [
        {
            Position: "Web data analyst(Nov 2020-july 2023)",
            Company: `Quadrant Resource`,
            Location: "Hyderabad,Telangana.",
            Type: "Freelance"     
          }
    ];
    const eduqualifications = [
          {
            Position: "Frontend Development(June 2019 - Present)",
            Company: "Udemy, YouTube, Google, Medium",
            Location: "Online.",
            Type: "Full Time"
          },
          {
            Position: "Bachelor in Electronics & Communication(Aug 2015-May 2019)",
            Company: `Kakatiya Institute of technology and science for women`,
            Location: "Nizamabad,Telangana.",
            Type: "Full Time"
          },
          {
            Position: "Higher Secondary Class(June 2013-June-2015)",
            Company: "Kakatiya junior college",
            Location: "Nizamabad,Telangana.",
            Type: "Full Time"
          },
          {
            Position: "Secondary class(June 2012-June 2013)",
            Company: "Kakatiya high school",
            Location: "Nizamabad,Telangana.",
            Type: "Full Time"
          }

    ];
    return(
    <main className="container mx-auto max-width pt-10 pb-20">
    <section>
    <h3 className="text-xl text-dark-heading  md:text-4xl xl:text-3xl xl:leading-tight font-bold">
          About Me</h3>
    <p className="text-content  ">Enthusiastic to learn new technologies, posses quick learning ability and adaptabillity. I live in Mumbai.My hobbies are listening to music and I love to make crafts from waste or reusable things.I have done my graduation in Engineering.I done my education Nizamabad,Telangana.I worked as Freelance Web Data Analyst in Quadrant Resource, Hyderabad.I have good knowledge in Java,SQL,Html,Css and basic knowledge in javascript.</p>
    </section>
    <section>
    <h3 className="text-xl text-dark-heading  md:text-4xl xl:text-3xl xl:leading-tight font-bold pt-10">Work Experience</h3>
    
    <ul>
        {workDetails.map((work,index) => (
            <li key={index} className="mb-2">
            <p className="text-lg font-semibold">{work.Position}</p>
            <p className="text-gray-600">
              {work.Company}, {work.Type}, {work.Location}
            </p>
          </li>
       ) )}
    </ul>
    </section>
    <section>
    <h3 className="text-xl pt-10 text-dark-heading  md:text-4xl xl:text-3xl xl:leading-tight font-bold">Education Details</h3>
    <ul>
        {eduqualifications.map((qualification,index) => (
            <li key={index} className="mb-2">
            <p className="text-lg font-semibold">{qualification.Position}</p>
            <p className="text-gray-600">
              {qualification.Company}, {qualification.Type}, {qualification.Location}
            </p>
          </li>
       ) )}
       </ul>
    </section>
    </main>);    
}
export default About;