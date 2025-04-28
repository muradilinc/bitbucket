import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { selectUser, updateUser } from '../../../features/Auth/AuthSlice';
import { UserState } from '../model/changeUserForm';

interface Props {
  close: () => void;
}

export const ChangeProfileForm: React.FC<Props> = ({close}) => {
  const user = useAppSelector(selectUser);
  const [state, setState] = useState<UserState>({
    name: '',
    bio: '',
    company: '',
    location: ''
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      setState({
        name: user.name || '',
        bio: user.bio || '',
        company: user.company || '',
        location: user.location || ''
      });
    }
  }, [user]);

  const changeFields = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveChangeHandle = (event: FormEvent) => {
    event.preventDefault();
    dispatch(updateUser(state));
    close();
  };

  return (
    <form onSubmit={saveChangeHandle} className="flex flex-col gap-[22px]">
      <div className="flex flex-col gap-[5px]">
        <label htmlFor="name" className="font-light text-[#acb2b8] uppercase text-[13px]">Profile Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={state.name}
          onChange={changeFields}
          className="bg-[rgba(0,0,0,0.25)] border-none shadow-[inset_1px_1px_0px_#000a] text-[#909090] rounded-[3px] p-[10px] outline-none"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <label htmlFor="bio" className="font-light text-[#acb2b8] uppercase text-[13px]">Profile Bio</label>
        <input
          id="bio"
          type="text"
          name="bio"
          value={state.bio}
          onChange={changeFields}
          className="bg-[rgba(0,0,0,0.25)] border-none shadow-[inset_1px_1px_0px_#000a] text-[#909090] rounded-[3px] p-[10px] outline-none"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <label htmlFor="company" className="font-light text-[#acb2b8] uppercase text-[13px]">Profile Company</label>
        <input
          id="company"
          type="text"
          name="company"
          value={state.company}
          onChange={changeFields}
          className="bg-[rgba(0,0,0,0.25)] border-none shadow-[inset_1px_1px_0px_#000a] text-[#909090] rounded-[3px] p-[10px] outline-none"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <label htmlFor="location" className="font-light text-[#acb2b8] uppercase text-[13px]">Profile Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={state.location}
          onChange={changeFields}
          className="bg-[rgba(0,0,0,0.25)] border-none shadow-[inset_1px_1px_0px_#000a] text-[#909090] rounded-[3px] p-[10px] outline-none"
        />
      </div>
      <div className="flex gap-[5px]">
        <button
          type="button"
          onClick={close}
          className="text-[#dfe3e6] text-[14px] text-center w-1/2 rounded-[2px] cursor-pointer bg-[#3d4450]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="cursor-pointer bg-gradient-to-r from-[#06BFFF] w-1/2 to-[#2D73FF] text-[#fff] text-[16px] font-normal p-[12px] text-center rounded-[2px]"
        >Save
        </button>
      </div>
    </form>
  );
};