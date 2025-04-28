import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { selectSearchUsersLoading } from '../../../features/Users/UsersSlice';
import { searchUsers } from '../../../features/Users/UsersThunk';

const SearchForm = () => {
  const [state, setState] = useState('');
  const loading = useAppSelector(selectSearchUsersLoading);
  const dispatch = useAppDispatch();

  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const searchHandle = async (event: FormEvent) => {
    event.preventDefault();
    await dispatch(searchUsers(state));
  };

  return (
    <form onSubmit={searchHandle} className="flex gap-[15px] justify-center">
      <input
        type="text"
        value={state}
        onChange={changeFields}
        className="bg-[#274e68] text-[#909090] border border-black min-w-[250px] w-[50%] text-[14px] pl-[30px] rounded-[3px] h-[28px] outline-none"
        style={{boxShadow: '1px 1px 0px rgba(255, 255, 255, 0.2)'}}
        placeholder="Search users by name or login"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-[#75b022] to-[#588a1b] py-[0px] px-[10px] rounded-[2px] text-[15px] text-[#d2efa9] cursor-pointer"
        disabled={loading}
      >Search
      </button>
    </form>
  );
};

export default SearchForm;