import {Component} from 'react';

import Card from "../Card";

import "./index.css"

const hiringList = [
  {id: 1,
    img : "https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg",
tText: "@engineerHUB",
hiringPosition: "Hiring for Backend developer",
techStack : "TechStack: Node.js",
experience: "Experience: 0-2 years",
eligibility: "Eligibility: Min 60% in 10th and 12th class",
location: "Location: Ghaziabad",
lastDate: "Last Date: 25-02-2023"},

{id: 2,
  img : "https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg",
tText: "@engineerHUB",
hiringPosition: "Hiring for Node.js Developer Intern",
techStack : "TechStack: Express.js Node.js MongoDB",
experience: "Experience: 0-2 years",
eligibility: "Eligibility: Min 6 CGPA",
location: "Location: Ghaziabad",
lastDate: "Last Date: 02-10-2023"},

{id: 3,
  img : "https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg",
tText: "@engineerHUB",
hiringPosition: "Hiring for Campus Ambassador",
techStack : "TechStack: Leadership, Team Work",
experience: "Experience: 0-1 years",
eligibility: "Eligibility: Min 5 CGPA",
location: "Location: Ghaziabad",
lastDate: "Last Date: 10-01-2023"},


{id: 4,
  img : "https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg",
tText: "@engineerHUB",
hiringPosition: "Hiring for DevOps Mentor",
techStack : "TechStack: Docker, Kubernetes",
experience: "Experience: 0-1 years",
eligibility: "Eligibility: Min 6 CGPA",
location: "Location: Ghaziabad",
lastDate: "Last Date: 05-01-2023"},



{id: 5,
  img : "https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg",
tText: "@engineerHUB",
hiringPosition: "Node.js Developer Intern",
techStack : "TechStack: Express.js Node.js MongoDB",
experience: "Experience: 0-2 years",
eligibility: "Eligibility: Min 6 CGPA",
location: "Location: Work From Home",
lastDate: "Last Date: 10/02/2023"},



]



class Home extends Component {


  render(){


    return(
      
        <div className="container-hiring">

        <div className='heading'>We are Hiring !!</div>

        
        
        <div className='paragraph'>engineerhub is hiring students to encourage their efforts & help them excel in the following domains.</div>
        
        <ul className='hiring-card-ui'>
        {
          hiringList.map(each=>
            <Card hiringDetails={each} key={each.id}/>)
          
        }
          </ul>
      </div>
    )
  }
}

export default Home