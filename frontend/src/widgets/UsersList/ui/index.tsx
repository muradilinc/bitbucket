import { useAppSelector } from '../../../app/store/hooks';
import { selectSearchUsers, selectSearchUsersTotal } from '../../../features/Users/UsersSlice';

export const UsersList = () => {
  const users = useAppSelector(selectSearchUsers);
  const total = useAppSelector(selectSearchUsersTotal);

  return (
    <div className="flex flex-col gap-[15px]">
      {
        total &&
        <div className="ml-auto">
          <p className="text-[#969696] text-[14px]">Result: {total}</p>
        </div>
      }
      {
        users.map(user =>
          <a key={user.id} href={`/repos/${user.login}`}>
            <div className="flex gap-[20px] bg-[rgba(0,0,0,0.4)] px-[10px] py-[12px] cursor-pointer">
              <img src={user.avatar_url} alt="avatar" className="w-[64px] h-[69px]"/>
              <div>
                <h4 className="text-[24px] text-[#fff]">{user.login}</h4>
              </div>
            </div>
          </a>
        )
      }
    </div>
  );
};