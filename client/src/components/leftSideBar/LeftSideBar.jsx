
const LeftSideBar = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a href="https://github.com/code-owen" target="_blank" rel="noreferrer"><i className="ri-github-fill text-gray text-xl"></i></a>
          <a href="https://www.linkedin.com/in/owen-laing-b793652a4/" target="_blank" rel="noreferrer"><i className="ri-linkedin-box-line text-gray text-xl"></i></a>
        </div>
      </div>
      <div className="h-32 text-center ml-2 w-[1px] bg-[#09606b73] sm:hidden"></div>
    </div>
  );
};

export default LeftSideBar;
