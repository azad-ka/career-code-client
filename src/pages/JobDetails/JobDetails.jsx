import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, company, _id} = useLoaderData();
    
    return (
        <div>
            <h2 className='text-6xl'>Job Details of: {title}</h2>
            <p className='my-4'>{company}</p>
            <Link to={`/jobApply/${_id}`}><button className='btn btn-primary mb-4'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;