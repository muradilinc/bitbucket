import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

export const Modal: React.FC<Props> = ({show, title, onClose, children}) => {

  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed top-[50%] translate-y-[-50%] min-w-[600px] left-[34%] max-w-[570px] bg-[linear-gradient(180deg,_#262D33_-3.38%,_#1D1E20_78.58%)] flex flex-col items-center rounded-[4px] z-[100] p-[20px] border-white border-[1px]"
      style={{display: show ? 'block' : 'none'}}
      onClick={onClose}
    >
      <div onClick={onInnerClick}>
        <div className="flex justify-between items-center mb-[20px]">
          <h2 className="font-bold text-[16px] font-comfort text-white">
            {title}
          </h2>
          <button className="text-white cursor-pointer font-extrabold" onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};