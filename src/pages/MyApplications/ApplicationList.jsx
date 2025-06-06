import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise);

    return (
        <div>
            <h2 className='text-3xl text-center my-2'>Job Applied So Far: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <JobApplicationRow key={index} application={application}></JobApplicationRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ApplicationList;