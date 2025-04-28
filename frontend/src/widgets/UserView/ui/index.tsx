import { useAppSelector } from '../../../app/store/hooks';
import { selectUser, selectUserLoading } from '../../../features/Auth/AuthSlice';
import { Loader } from '../../../shared/Loader';
import { ChangeProfileForm } from '../../../entities/ChangeProfile';
import { Modal } from '../../../shared/Modal';
import { useState } from 'react';

export const UserView = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectUserLoading);

  if (loading || !user) {
    return <Loader/>;
  }

  return (
    <>
      <Modal show={showModal} title="Chage Profile" onClose={() => setShowModal(false)}>
        <ChangeProfileForm close={() => setShowModal(false)}/>
      </Modal>
      <div className="flex gap-[30px] pt-[24px]">
        <img className="w-[166px] h-[166px] border border-sky-500"
             src={user.avatar_url ? user.avatar_url : user.gravatar_id} alt="avatar"/>
        <div className="text-[#fff]">
          <h4 className="font-extralight text-[24px]">{user.login}</h4>
          <p className="text-[#c4c4c4] text-[13px]">{user.location}</p>
          <p className="text-[#c4c4c4] text-[13px]">{user.email}</p>
          <p className="text-[#c4c4c4] text-[13px]">{user.name}</p>
          <p className="text-[#c4c4c4] text-[13px]">{user.bio}</p>
        </div>
        <div className="text-[#fff] flex flex-col min-w-[300px]">
          <div className="rounded-[3px] bg-[rgba(0,0,0,0.3)] p-[8px] w-full">
            <h4 className="font-extralight text-[24px]">Company</h4>
            <p className="text-[#c4c4c4] text-[13px]">{user.company ? user.company : 'not have'}</p>
            <a className="font-extralight text-[24px]" href={user.html_url}>Github profile</a>
          </div>
          <div className="mt-[10px]">
            <button onClick={() => setShowModal(true)}
                    className="px-[10px] rounded-[2px] text-[#d3d3d3] cursor-pointer bg-black">Edit profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};