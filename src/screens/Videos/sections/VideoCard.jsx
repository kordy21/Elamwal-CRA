import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

export default function VideoCard({ videoUrl, imageCover, title, slug }) {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full overflow-hidden duration-300 bg-white rounded-md hover:shadow-md">
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-black rounded-md">
        <div className="relative w-full lg:h-[500px] h-[400px]">
          {/* video */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 object-cover w-full h-full rounded-md"
            poster={imageCover}
            onPause={handlePause}
            onEnded={handlePause}
            controls={isPlaying}
          >
            <source src={videoUrl} type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>

          {/* Icon */}
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/40 hover:bg-black/50"
            >
              <Play
                size={70}
                className="text-white transition-opacity opacity-90 hover:opacity-100"
              />
            </button>
          )}
        </div>
      </div>

      {/* title */}
      <div className="px-4 py-6">
        <h3
          className="text-base font-bold text-gray-800 duration-300 cursor-pointer lg:text-2xl hover:text-primary"
          onClick={() => navigate(`/video/video/${slug}`)}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
