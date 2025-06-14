import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { _id,title, location, requirements, jobType, category, salaryRange, description, company, company_logo } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex gap-2'>
                <figure>
                    <img
                        src={company_logo}
                        alt="job" />
                </figure>
                <div>
                    <h3 className='text-2xl'>{company}</h3>
                    <p className='flex items-center gap-2'><CiLocationOn />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <p className='gap-2'>{category}, {jobType}</p>
                <div className="card-actions">
                    {
                        requirements.map((skill, index) => (<div key={index} className="badge badge-outline">{skill}</div>))
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobDetails/${_id}`}><button className="btn btn-primary">Jobs Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;