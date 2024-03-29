import { Button } from "@material-tailwind/react";
import img1 from "../../../assets/images/home/official-wellpaper/wimg1.png";
import img2 from "../../../assets/images/home/official-wellpaper/wimg2.png";
import img3 from "../../../assets/images/home/official-wellpaper/wimg3.png";
import { useNavigate } from "react-router-dom";

const OfficialWallpapers = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-white text-center font-bakbak-one text-[15px] md:text-[35px] leading-[21px] mt-[27px] mb-[24px] md:mt-[103px] md:mb-[58px] font-normal">
        Official Wallpapers
      </h1>

      <div className="md:grid grid-cols-2 gap-x-[36px] hidden md:inline-block">
        <div className="min-h-[335px] max-h-[535px] max-w-[796px] rounded-[30px] overflow-hidden">
          <img
            src={img1}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-[30px]">
          <div className="h-[253px] max-w-[796px] rounded-[30px] overflow-hidden">
            <img
              src={img2}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
          <div className="h-[253px] max-w-[796px] rounded-[30px] overflow-hidden">
            <img
              src={img3}
              alt="img"
              className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* // sm */}
      <div className="grid grid-cols-2 gap-x-[9px] gap-y-[10px] md:hidden">
        <div className="max-h-[196px] w-full rounded-[12px] overflow-hidden">
          <img
            src={img2}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="max-h-[196px] w-full rounded-[12px] overflow-hidden">
          <img
            src={img3}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
        <div className="min-h-[131px] max-h-[131px] w-full rounded-[12px] overflow-hidden col-span-2">
          <img
            src={img1}
            alt="img"
            className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex justify-center items-center pt-[22px] md:pt-[46px]">
        <Button
          onClick={() => navigate("/wallpapers/search")}
          className="w-[171px] h-[37px] md:w-[225px] md:h-[49px] shadow-none hover:shadow-none font-lato font-bold !text-white md:!text-[#949494] text-[12px]  md:text-[15px] leading-[14.4px] normal-case p-0 rounded-[100px] bg-[#00000080]"
        >
          More Official Wallpapers
        </Button>
      </div>
    </div>
  );
};

export default OfficialWallpapers;
