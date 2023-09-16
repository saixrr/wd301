// import React from 'react';
import { useMembersState } from  "../../context/members/context";

// type Inputs = {
//   id: number;
// }

export default function MemberListItems() {
  const state: any = useMembersState();
  if (!state) {
    return <span>Loading...</span>; // Or handle the loading state accordingly
  }


  
  console.log(state)
  const { members, isLoading, isError, errorMessage } = state;
  console.log(members)

  if (isLoading && members.length === 0) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member:any) => (
        <div
          key={member.id}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
          <p className="text-gray-600 dark:text-gray-300">{member.email}</p>
        </div>
      ))}
    </>
  );
}
