import  Groups  from '../components/Groups';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const AllGroups = () => {

    const initialGroups = useLoaderData();
    const [groups,setGroups] = useState(initialGroups);
    return (
        <div>
            {/* All Group Containers */}
            <div className=' gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

           {
           groups.map(group => <Groups group= {group} setGroups={setGroups} key={group._id}></Groups>)
           }
            </div>
        </div>
    );
};

export default AllGroups;