import React, { useState } from 'react';
import './WorkPage.css';

const WorkPage = () => {
  const [description, setDescription] = useState('Hover over a job to see more details.');
  
  const jobs = [
    {
      position: 'Substitute Teacher',
      company: 'Richmond Community Schools',
      image: 'job1.jpg',
      description: 'Worked with children in order to ensure that they were taught base skills properly, and met individual student needs to keep students safe.',
    },
    {
      position: 'Undergraduate Teaching Assistant',
      company: 'Indiana University',
      image: 'job2.jpg',
      description: 'Assisted in teaching and guiding students in understanding fundamental concepts of low-level computing and programming languages',
    },
  ];

  // Function to handle hover
  const handleHover = (jobDescription) => {
    setDescription(jobDescription);
  };

  return (
    <div className="work-page">
      <h1>Work Experience</h1>
      <div className="work-container">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="work-box"
            onMouseEnter={() => handleHover(job.description)}
            onMouseLeave={() => setDescription('Hover over a job to see more details.')}
          >
            <div className="position">{job.position}</div>
            <div className="image-container">
              <img src={`./images/${job.image}`} alt={job.position} className="job-image" />
            </div>
            <div className="company">{job.company}</div>
          </div>
        ))}
      </div>
      <div className="description-box">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkPage;
