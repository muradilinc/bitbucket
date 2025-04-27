import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { searchUsers } from '../../../features/Users/UsersThunk';
import {
  selectSearchUsers,
  selectSearchUsersLoading,
  selectSearchUsersTotal
} from '../../../features/Users/UsersSlice';
import { Loader } from '../../../shared/Loader';

export const UsersPage = () => {
  const [state, setState] = useState('');
  const users = useAppSelector(selectSearchUsers);
  const total = useAppSelector(selectSearchUsersTotal);
  const loading = useAppSelector(selectSearchUsersLoading);
  const dispatch = useAppDispatch();

  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const searchHandle = async () => {
    await dispatch(searchUsers(state));
  };


  return (
    <div className="bg-[rgba(24,24,24,0.93)] min-h-screen">
      <div className="container mx-auto h-full">
        <div className="max-w-[926px] mx-auto flex flex-col gap-[30px] py-[30px]">
          <div className="flex gap-[15px] justify-center">
            <input
              type="text"
              value={state}
              onChange={changeFields}
              className="bg-[#274e68] text-[#909090] border border-black min-w-[250px] w-[50%] text-[14px] pl-[30px] rounded-[3px] h-[28px] outline-none"
              style={{boxShadow: '1px 1px 0px rgba(255, 255, 255, 0.2)'}}
              placeholder="Search users by name or login"
            />
            <button
              onClick={searchHandle}
              className="bg-gradient-to-r from-[#75b022] to-[#588a1b] py-[0px] px-[10px] rounded-[2px] text-[15px] text-[#d2efa9]"
              disabled={loading}
            >Search
            </button>
          </div>
          {
            loading &&
            <Loader/>
          }
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
        </div>
      </div>
    </div>
  );
};