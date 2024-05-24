import PropTypes from 'prop-types';

const TeamGrid = ({ className = "" }) => {
  return (
    <div
      className={`w-[733px] h-[333px] absolute !m-[0] bottom-[70px] left-[115px] max-w-full z-[3] text-left text-lg text-dark-dark font-body-small-regular mq750:h-auto mq750:min-h-[333] ${className}`}
    >
      <img
        className="absolute h-[27.06%] w-[11.92%] top-[72.94%] right-[0%] bottom-[0%] left-[88.08%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/group-1000004102.svg"
      />
      <div className="absolute h-[72.76%] w-[88.43%] top-[19.19%] right-[8.7%] bottom-[8.05%] left-[2.86%] flex flex-row items-start justify-start gap-[27.2px] max-w-full z-[1] mq750:flex-wrap">
        <div className="h-[242.3px] w-64 flex flex-col items-start justify-start pt-[13.8px] px-0 pb-0 box-border min-w-[256px] mq750:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq750:self-stretch mq750:w-auto"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[237px] max-w-full shrink-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
            <div className="w-[157px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[4px]">
              <b className="self-stretch relative leading-[26px] font-semibold">
                Laurie Waller
              </b>
              <div className="relative text-xs leading-[20px] capitalize font-medium text-primary-text-color inline-block min-w-[129px]">
                SOFTWARE ENGINEER
              </div>
            </div>
            <p className="m-0 self-stretch relative text-sm leading-[22px] text-primary-text-color">
              Laurie is a full stack engineer at Olio Apps with a background in
              publishing and editing. Of her many passions for development, she
              enjoys figuring out problems and being a lifelong learner.
            </p>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[14px]">
            <img
              className="h-8 w-8 relative min-h-[32px]"
              loading="lazy"
              alt=""
              src="/group-1000004099.svg"
            />
            <img
              className="h-8 w-8 relative min-h-[32px]"
              loading="lazy"
              alt=""
              src="/group-1000004100.svg"
            />
            <img
              className="h-8 w-8 relative min-h-[32px]"
              loading="lazy"
              alt=""
              src="/group-1000004101.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TeamGrid.propTypes = {
  className: PropTypes.string,
};

export default TeamGrid;
