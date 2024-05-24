import PropTypes from 'prop-types';

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1170px] flex flex-row items-start justify-start relative max-w-full text-left text-base text-white-white font-body-small-regular ${className}`}
    >
      <img
        className="h-[562px] flex-1 relative rounded-8xs max-w-full overflow-hidden object-cover"
        alt=""
        src="/rectangle-4381@2x.png"
      />
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs [background:linear-gradient(180deg,_rgba(48,_86,_211,_0)_46.88%,_rgba(13,_21,_49,_0.75)_93.23%)] z-[1]" />
      <div className="!m-[0] absolute bottom-[30px] left-[30px] flex flex-row items-center justify-start gap-[40px] z-[2] mq750:flex-wrap">
        <div className="flex flex-row items-center justify-start py-0 pr-0.5 pl-0 gap-[15px]">
          <img
            className="h-10 w-10 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-2714@2x.png"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[123px]">
            By Laurie Waller
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[25px] text-sm">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/calenderalt2.svg"
            />
            <div className="relative leading-[22px] font-medium inline-block min-w-[80px]">
              8 May 2024
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/commentsalt.svg"
            />
            <div className="relative leading-[22px] font-medium inline-block min-w-[13px]">
              --
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/eyealt.svg"
            />
            <div className="relative leading-[22px] font-medium inline-block min-w-[13px]">
              --
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
