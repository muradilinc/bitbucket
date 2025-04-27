import { Repositories } from '../../../widgets/Repositories';

export const RepositoriesPage = () => {
  return (
    <div className="bg-[rgba(24,24,24,0.93)] min-h-screen">
      <div className="container mx-auto h-full">
        <div className="max-w-[926px] mx-auto flex flex-col gap-[30px] py-[30px]">
          <Repositories/>
        </div>
      </div>
    </div>
  );
};