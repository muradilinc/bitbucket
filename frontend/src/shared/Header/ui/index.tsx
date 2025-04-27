import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { logoutState, selectUser } from '../../../features/Auth/AuthSlice';

export const Header = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();

  return (
    <div className="bg-[#171d25]">
      <div className="container mx-auto flex gap-[30px] justify-center py-[30px]">
        <a href="/"
           className={`${pathname === '/' ? 'text-[#1a9fff] underline' : 'text-[#dcdedf]'} text-[16px] font-medium uppercase`}>{user?.name}</a>
        <a href="/repos"
           className={`${pathname === '/repos' ? 'text-[#1a9fff] underline' : 'text-[#dcdedf]'} text-[16px] font-medium uppercase`}>Repositories</a>
        <a href="/users"
           className={`${pathname === '/users' ? 'text-[#1a9fff] underline' : 'text-[#dcdedf]'} text-[16px] font-medium uppercase`}>Search</a>
        <button onClick={() => dispatch(logoutState())}
                className="text-[#dcdedf] text-[16px] font-medium uppercase cursor-pointer">Sign out
        </button>
      </div>
    </div>
  );
};