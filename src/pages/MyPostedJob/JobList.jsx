import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise);
    return (
        <div>
            <h2 className="text-4xl">jobs Created by {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job</th>
                            <th>Deadline</th>
                            <th>view application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.deadline}</td>
                                <td><Link to={`/applications/${job._id}`}>view application</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;