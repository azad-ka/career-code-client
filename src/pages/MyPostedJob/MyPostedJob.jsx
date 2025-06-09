import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/MyJobsApi';

const MyPostedJob = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className='text-4xl'>My Job Posted : </h2>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;