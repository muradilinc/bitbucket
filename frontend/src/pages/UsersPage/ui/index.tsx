import { useAppSelector } from '../../../app/store/hooks';
import {
  selectSearchUsersLoading,
} from '../../../features/Users/UsersSlice';
import { Loader } from '../../../shared/Loader';
import { UsersList } from '../../../widgets/UsersList';
import SearchForm from '../../../widgets/SearchForm/ui';

export const UsersPage = () => {
  const loading = useAppSelector(selectSearchUsersLoading);

  return (
    <div className="bg-[rgba(24,24,24,0.93)] min-h-screen">
      <div className="container mx-auto h-full">
        <div className="max-w-[926px] mx-auto flex flex-col gap-[30px] py-[30px]">
          <SearchForm/>
          {
            loading &&
            <Loader/>
          }
          <UsersList/>
        </div>
      </div>
    </div>
  );
};