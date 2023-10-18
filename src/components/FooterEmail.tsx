
/* container for email form */
export function FooterEmail(): JSX.Element {
  return (
    <div className="w-[304px] h-[184px] rounded-[10px] bg-[#131313]">
      <div className="text-white text-lg font-semibold leading-[26px] pl-[14px] pt-[14px]">Join Our Newsletter</div>
      <div className="w-[277px] h-[39px] rounded-[4px] bg-[#1E1E1E] mx-[14px] mt-[33px]">
        <div className="flex">
          <input type="email" className="bg-transparent">
          </input>
          <button className="w-[277px] h-[39px] bg-black border-none px-3 hover:bg-white hover:text-black hover:ease-out duration-500">
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-[277px] pl-[14px] font-medium text-[13px] opacity-50 mt-[14px]">
        * Will send you weekly updates for your better tool management.
      </div>
    </div>
  );
};
