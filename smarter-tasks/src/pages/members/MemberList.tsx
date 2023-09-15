import { useEffect } from 'react';
import { fetchMembers } from '../../context/members/actions';
import { useMembersDispatch } from '../../context/members/context';
import MembersListItems from './MemberListItems';

const MembersList: React.FC = () => {
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, []);

  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <MembersListItems />
    </div>
  );
};

export default MembersList;
