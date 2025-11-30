import React, { useState, useRef } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import MainTitle from "../../../components/ui/MainTitle";
import { BookmarkIcon, Play } from "lucide-react";
import { ShareIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

export const VideoSection = ({ title, data }) => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoDuration, setVideoDuration] = useState(0);

  if (!data || data.length === 0) return null;

  const mainVideo = data[0];
  const otherVideos = data?.slice(1);

  // console.log(data);
  // console.log(mainVideo);
  // console.log(otherVideos);
  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
  function formatTime(seconds) {
    if (!seconds) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  return (
    <div className="w-full">
      {/* Featured video */}
      <Card className="relative mb-8 duration-300 border-0 rounded shadow-none hover:shadow-md">
        <CardContent className="relative flex flex-col items-end justify-end w-full p-0">
          <div className="relative w-full h-[236px] overflow-hidden bg-black">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 h-[236px] object-cover w-full"
              poster={mainVideo?.image || "/images/default-cover.jpg"}
              controls={isPlaying}
              onPause={handlePause}
              onEnded={handlePause}
              onLoadedMetadata={(e) => setVideoDuration(e.target.duration)}
            >
              <source src={mainVideo?.video} type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>

            {/* button */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 bg-black/40 hover:bg-black/50"
              >
                <Play
                  size={70}
                  className="text-white transition-opacity opacity-90 hover:opacity-100"
                />
              </button>
            )}
          </div>

          {/* Video details */}
          <div className="flex flex-col justify-end w-full px-4 py-4">
            {/* Video duration */}
            <div className="flex items-center ">
              <PlayCircleIcon className="w-8 text-black me-2" />
              <span className="text-base text-black">
                {formatTime(videoDuration)}
              </span>
            </div>

            {/* Video title */}
            <h3
              className="font-bold text-black duration-300 cursor-pointer lg:text-xl hover:text-primary line-clamp-2"
              onClick={() => navigate(`/video/video/${mainVideo.slug}`)}
            >
              {mainVideo.title_AR || mainVideo.title_EN}
            </h3>
          </div>
        </CardContent>
      </Card>

      {/* Video list */}
      <div className="flex flex-col w-full gap-6">
        {otherVideos.map((item, i) => (
          <article
            key={i}
            className="flex flex-col items-center pb-3 border-b cursor-pointer last:border-none"
          >
            <div className="flex items-center justify-between w-full gap-4">
              <div className="relative w-[120px] h-[75px]  overflow-hidden flex-shrink-0">
                <img
                  src={item.image || "/images/default-cover.jpg"}
                  alt={item.title_AR}
                  className="object-cover w-full h-full"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/30 hover:opacity-100"
                  onClick={() => navigate(`/video/video/${item.slug}`)}
                >
                  <PlayCircleIcon className="w-8 text-white " />
                </button>
              </div>

              {/* title */}
              <div className="flex-1">
                <div className="flex items-center ">
                  <PlayCircleIcon className="w-6 text-black me-2" />
                  <span className="text-sm text-black">
                    {formatTime(videoDuration)}
                  </span>
                </div>
                <h4
                  className="text-base font-medium text-black transition-colors duration-300 line-clamp-2 hover:text-primary"
                  onClick={() => navigate(`/video/video/${item.slug}`)}
                >
                  {item.title_AR || item.title_EN}
                </h4>
              </div>
            </div>

            <div className="flex items-center justify-between w-full mt-2 text-sm text-gray-500">
              <span>١٢ مايو ٢٠٢٤</span>
              <div className="flex items-center gap-3">
                <BookmarkIcon
                  size={18}
                  className="cursor-pointer hover:text-primary"
                />
                <div className="relative group">
                  <ShareIcon
                    className="w-5 h-5 text-gray-500 transition-colors duration-300 cursor-pointer hover:text-green-500"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: "شوف الرابط ده",
                          url: window.location.href,
                        });
                      } else {
                        alert("المشاركة غير مدعومة في هذا المتصفح");
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Post copy notification */}
      {copied && (
        <div className="fixed z-50 px-4 py-2 text-white bg-green-600 rounded shadow-md top-10 right-10 animate-bounce">
          ✅ تم نسخ الرابط!
        </div>
      )}
    </div>
  );
};
