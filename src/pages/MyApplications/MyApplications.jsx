import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationPromise } from '../../api/applicationsApi';

const MyApplications = () => {

    const { user } = useAuth();

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense
                fallback={'loading your applications...'}>
                <ApplicationList
                    myApplicationPromise={myApplicationPromise(user.email)}>
                </ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;