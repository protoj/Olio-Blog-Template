import { useMemo } from "react";
import PropTypes from 'prop-types';


const FrameComponent1 = ({
  className = "",
  bitmap,
  the8BestLandingP,
  amandaMinorva,
  showWrtiterImage,
  showFrameDiv,
  propWidth,
  propHeight,
  propColor,
  propHeight1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const the8BestStyle = useMemo(() => {
    return {
      color: propColor,
      height: propHeight1,
    };
  }, [propColor, propHeight1]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[20px] text-left text-lg text-dark-dark font-body-small-regular mq450:flex-wrap ${className}`}
      style={frameDivStyle}
    >
      {showWrtiterImage && (
        <div className="h-20 w-20 relative">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src={bitmap}
          />
        </div>
      )}
      {showFrameDiv && (
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[175px]">
          <div
            className="self-stretch relative leading-[26px] font-medium"
            style={the8BestStyle}
          >
            {the8BestLandingP}
          </div>
          <div className="relative text-sm leading-[22px] text-primary-text-color inline-block min-w-[64px]">
            {amandaMinorva}
          </div>
        </div>
      )}
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  bitmap: PropTypes.string,
  the8BestLandingP: PropTypes.string,
  amandaMinorva: PropTypes.string,
  showWrtiterImage: PropTypes.bool,
  showFrameDiv: PropTypes.bool,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propColor: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default FrameComponent1;
