import React, { useEffect } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  faXTwitter,
  faWhatsapp,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sun from "../../assets/icons/Sun cloud angled rain.svg";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import CurrentDate from "../../utils/CurrentDate";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../slices/8-externalFactorsSlice/thunk";
export const Header = () => {
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector(
    (state) => state.externalFactors
  );

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await dispatch(getWeather());
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchWeather();
  }, [dispatch]);
  // console.log("weather in header:", weather);
  return (
    <header className="hidden w-full border-b bg-primary border-white/20 lg:block">
      <div className="container flex h-[35px] items-center justify-between py-0">
        {/* Right side - Date and weather (RTL) */}
        <div className="flex items-center h-full gap-2 md:gap-2">
          <CalendarIcon className="w-4 h-4 text-white" />

          <div className="text-xs text-white md:text-sm">
            <CurrentDate />
          </div>
        </div>

        {/* Center side  */}
        <div className="flex items-center h-full gap-4 md:gap-8">
          {loading ? (
            <div className="text-white"></div>
          ) : (
            <div className="items-center justify-center hidden gap-1 md:inline-flex ">
              <img
                className="w-[26px] h-[26px]"
                alt="Sun cloud angled"
                src={weather?.logo}
              />
              <div className="text-xs text-white md:text-sm whitespace-nowrap">
                {weather?.city_AR} {weather?.temp}C°
              </div>
            </div>
          )}
          {/* {error && <div className="text-white">Error loading weather</div>} */}
          {/* Left side Social Media */}
          <div className="flex h-full">
            <div className="flex items-center justify-center me-2 group">
              {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
              <a
                href="https://www.linkedin.com/in/اسم_الحساب"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="w-5 h-4 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>
            <div className="flex items-center justify-center me-2 group">
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>
            <div className="flex items-center justify-center me-2 group">
              <a
                href="https://www.tiktok.com/@اسم_الحساب"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>

            <div className="flex items-center justify-center me-2 group">
              <a
                href="https://twitter.com/اسم_الحساب"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  // icon={faTwitter}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>
            <div className="flex items-center justify-center me-2 group">
              <a href="">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-5 h-5 p-1 text-lg text-white duration-300 group-hover:text-gray-700 "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
