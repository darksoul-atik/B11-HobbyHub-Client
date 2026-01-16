import  Groups  from '../components/Groups';
import React from 'react';
import { useLoaderData } from 'react-router';

const AllGroups = () => {

    const allGroups = useLoaderData();
    return (
        <div>
            {/* All Group Containers */}
            <div className=' gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

           {
            allGroups.map(group => <Groups group= {group} key={group._id}></Groups>)
           }
            </div>
        </div>
    );
};

export default AllGroups;