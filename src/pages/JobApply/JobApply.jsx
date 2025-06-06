import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();

    const handleApplyForSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume);
    }

    return (
        <div>
            <h3 className='text-4xl text-center my-4'>Apply for
                <Link className='text-blue-700 ml-2' to={`/jobDetails/${jobId}`}>this job
                </Link>
            </h3>
            <form onSubmit={handleApplyForSubmit} className='flex flex-col justify-center items-center my-4'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Linkedin Link</label>
                    <input type="url" name='linkedin' className="input" placeholder="Linkedin link" />

                    <label className="label">Github</label>
                    <input type="url" name='github' className="input" placeholder="github link" />

                    <label className="label">Resume</label>
                    <input type="url" name='resume' className="input" placeholder="resume link" />

                    <input type="submit" value="Submit" className='btn btn-primary btn-block my-2' />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;