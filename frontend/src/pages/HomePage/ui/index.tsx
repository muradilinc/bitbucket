import { Repositories } from '../../../widgets/Repositories';
import { UserView } from '../../../widgets/UserView';

export const HomePage = () => {
  return (
    <div className="bg-[rgba(24,24,24,0.93)]">
      <div className="container mx-auto h-screen">
        <div className="max-w-[926px] mx-auto flex flex-col gap-[30px]">
          <UserView/>
          <Repositories/>
        </div>
      </div>
    </div>
  );
};
