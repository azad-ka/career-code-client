import React from 'react';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {
    const { user } = useAuth();

    const handleJobSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const { salaryMin, salaryMax, currency, ...newJob } = data;
        newJob.salaryRange = { salaryMin, salaryMax, currency };

        newJob.requirements = newJob.requirements.split(',').map(req => req.trim());
        console.log(newJob);
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-4xl text-center mb-8 font-bold">Please Add A Job</h2>
            <form onSubmit={handleJobSubmit} className="space-y-8">

                {/* Basic Info */}
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 space-y-4">
                    <legend className="text-lg font-semibold">Basic Job Details</legend>

                    <div>
                        <label htmlFor="title" className="label">Job Title</label>
                        <input id="title" name="title" type="text" className="input input-bordered w-full" placeholder="Job title" />
                    </div>

                    <div>
                        <label htmlFor="company" className="label">Company</label>
                        <input id="company" name="company" type="text" className="input input-bordered w-full" placeholder="Company name" />
                    </div>

                    <div>
                        <label htmlFor="location" className="label">Location</label>
                        <input id="location" name="location" type="text" className="input input-bordered w-full" placeholder="Location" />
                    </div>

                    <div>
                        <label htmlFor="logo" className="label">Company Logo URL</label>
                        <input id="logo" name="logo" type="text" className="input input-bordered w-full" placeholder="https://logo-url.com" />
                    </div>
                </fieldset>

                {/* Job Type */}
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 space-y-4">
                    <legend className="text-lg font-semibold">Job Type</legend>
                    <div className="flex flex-wrap gap-2">
                        <input className="btn" type="radio" name="jobType" value="All" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" value="OnSite" aria-label="OnSite" />
                        <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid" />
                    </div>
                </fieldset>

                {/* Job Category */}
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 space-y-4">
                    <legend className="text-lg font-semibold">Job Category</legend>
                    <select name="category" className="select select-bordered w-full" defaultValue="">
                        <option disabled value="">Pick a Job</option>
                        <option>Sales</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>IT Job</option>
                        <option>Finance</option>
                    </select>
                </fieldset>

                {/* Deadline */}
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 space-y-4">
                    <legend className="text-lg font-semibold">Application Deadline</legend>
                    <input type="date" className="input input-bordered w-full" name="deadline" />
                </fieldset>

                {/* Salary Range */}
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6">
                    <legend className="text-lg font-semibold mb-4">Salary Range</legend>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="salaryMin" className="label">Minimum Salary</label>
                            <input id="salaryMin" name="salaryMin" type="text" className="input input-bordered w-full" placeholder="50000" />
                        </div>
                        <div>
                            <label htmlFor="salaryMax" className="label">Maximum Salary</label>
                            <input id="salaryMax" name="salaryMax" type="text" className="input input-bordered w-full" placeholder="100000" />
                        </div>
                        <div>
                            <label htmlFor="currency" className="label">Currency</label>
                            <select id="currency" name="currency" className="select select-bordered w-full">
                                <option>Dollar</option>
                                <option>BDT</option>
                                <option>Euro</option>
                                <option>GBP</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Description */}
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 space-y-4">
                    <legend className="text-lg font-semibold">Job Description</legend>
                    <textarea className="textarea textarea-bordered w-full" name="description" rows="4" placeholder="Job description..."></textarea>
                </fieldset>

                {/* Requirements */}
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 space-y-4">
                    <legend className="text-lg font-semibold">Requirements</legend>
                    <textarea className="textarea textarea-bordered w-full" name="requirements" rows="4" placeholder="Job requirements..."></textarea>
                </fieldset>

                {/* Responsibilities */}
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 space-y-4">
                    <legend className="text-lg font-semibold">Responsibilities</legend>
                    <textarea className="textarea textarea-bordered w-full" name="response" rows="4" placeholder="Job responsibilities..."></textarea>
                </fieldset>

                <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 space-y-4">
                    <legend className="text-lg font-semibold">Hr info</legend>
                    <div>
                        <label htmlFor="title" className="label">Hr Email</label>
                        <input id="title" name="hr_email" type="text" className="input input-bordered w-full" placeholder="hr email" defaultValue={user.email} />
                    </div>

                    <div>
                        <label htmlFor="company" className="label">HR Name</label>
                        <input id="company" name="hr_name" type="text" className="input input-bordered w-full" placeholder="hr name" />
                    </div>

                </fieldset>

                {/* Submit */}
                <div className="text-center">
                    <input type="submit" value="Add Job" className="btn btn-primary w-full md:w-1/3" />
                </div>

            </form>
        </div>
    );
};

export default AddJob;
