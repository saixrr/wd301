// import React from 'react';
import { useMembersState } from  "../../context/members/context";
import { SubmitHandler } from "react-hook-form";
import { useMembersDispatch } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";

type Inputs = {
  id: number;
}

export default function MemberListItems() {
  const state: any = useMembersState();
  const dispatchMembers=useMembersDispatch();
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

  const onSubmit:SubmitHandler<Inputs>=async (Id)=>{
    const {id} = Id;
    const response = await deleteMember(dispatchMembers,id);
    if(response.ok){
      console.log("user deleted")
    }else {
      console.log("user not deleted")
    }
  }

  return (
    <>
      {members.map((member:any) => (
        <div 
          key={member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
          <p className="text-gray-600 dark:text-gray-300">{member.email}</p>
          <button id ="delete-member-btn" type="submit" onClick={()=>onSubmit({id:member.id})} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
}
