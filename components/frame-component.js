import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[370px] flex flex-col items-start justify-start gap-[40px] min-w-[370px] max-w-full text-center text-9xl text-white-white font-body-small-regular mq750:min-w-full mq450:gap-[20px] mq1200:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-[65px] px-[45px] pb-[63px] relative mq450:pt-[42px] mq450:px-5 mq450:pb-[41px] mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/shapes-and-bg.svg"
        />
        <div className="flex-1 flex flex-col items-center justify-start gap-[20px] z-[1]">
          <div className="flex flex-col items-center justify-start gap-[6px]">
            <h2 className="m-0 relative text-inherit leading-[40px] font-semibold font-inherit mq450:text-3xl mq450:leading-[32px]">
              Join our newsletter!
            </h2>
            <div className="w-[175px] relative text-base leading-[24px] inline-block">
              <p className="m-0">{`To get news on Gen AI `}</p>
              <p className="m-0">Development on AWS.</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[15px] text-left text-base text-gray-100">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="shadow-[0px_4px_42px_rgba(0,_0,_0,_0.01)] rounded-8xs bg-gray-300 flex flex-row items-center justify-center py-2.5 pr-[15px] pl-[19px] gap-[10px] border-[1px] border-solid border-gray-200" style={{display: "block",margin:"auto"}}>
                    <div className="flex flex-row items-center justify-center py-0 px-[50px]">
                      <div className="relative leading-[24px]">
                        Your email address
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-[11px] px-5 bg-secondary-color rounded-md flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-secondary-color hover:bg-mediumseagreen hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen" style={{display: "block",margin:"auto"}}>
                <div className="relative text-base leading-[24px] font-medium font-body-small-regular text-white-white text-center inline-block min-w-[116px]">
                  Subscribe Now
                </div>
              </button>
            </div>
            <div className="relative text-sm leading-[22px] font-medium text-white-white text-center">
              Don't worry, we don't spam
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-left text-dark-dark mq450:gap-[17px]">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <h2 className="m-0 relative text-inherit leading-[40px] font-semibold font-inherit mq450:text-3xl mq450:leading-[32px]">
            Popular Articles
          </h2>
          <img
            className="w-20 h-px relative"
            loading="lazy"
            alt=""
            src="/line.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[100px] gap-[20px] text-lg mq750:pb-[65px] mq750:box-border">
          <FrameComponent1
            bitmap="/bitmap@2x.png"
            the8BestLandingP="Olio Apps Commits to AWS Partnership in 2024"
            amandaMinorva="Olio Apps"
            showWrtiterImage
            showFrameDiv
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            loading="lazy"
            alt=""
            src="/line-3.svg"
          />
          <FrameComponent1
            bitmap="/bitmap-1@2x.png"
            the8BestLandingP="Celebrating Aaron Whitaker’s AWS Solution Architect Associate Certificate"
            amandaMinorva="Aaron Whitaker"
            showWrtiterImage
            showFrameDiv
            propWidth="unset"
            propHeight="unset"
            propColor="#3758f9"
            propHeight1="unset"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            loading="lazy"
            alt=""
            src="/line-3.svg"
          />
          <FrameComponent1
            bitmap="/bitmap-2@2x.png"
            the8BestLandingP="A Survival Guide for Your Team’s Newest Developer"
            amandaMinorva="Jacob Irwin-Cline"
            showWrtiterImage
            showFrameDiv
            propWidth="unset"
            propHeight="unset"
            propColor="#111928"
            propHeight1="unset"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            loading="lazy"
            alt=""
            src="/line-3.svg"
          />
          <FrameComponent1
            bitmap="pending_I1:2698;934:12646"
            the8BestLandingP="Article 4"
            amandaMinorva="Name 4"
            showWrtiterImage={false}
            showFrameDiv={false}
            propWidth="unset"
            propHeight="unset"
            propColor="#111928"
            propHeight1="48px"
          />
      <img
          className="w-[328px] h-[281px] object-contain z-[3]"
          loading="lazy"
          alt=""
          src="/global-award-badge-1@2x.png"
        />
        </div>
      </div>
    

      </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
