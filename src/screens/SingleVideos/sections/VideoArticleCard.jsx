import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

const VideoArticleCard = ({
  title,
  author,
  date,
  video,
  ArticleImage,
  imageCover,
}) => {
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
  // console.log(title);
  // console.log(author);
  // console.log(date);
  // console.log(video);
  // console.log(imageCover);
  return (
    <div
      className="w-full overflow-hidden transition rounded-md"
      // onClick={() => link && window.open(link, "_blank")}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold leading-snug text-gray-800 lg:text-4xl">
          {title}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-3">
            {ArticleImage && (
              <img
                src={ArticleImage}
                alt="sub"
                className="w-6 h-6 rounded-full"
              />
            )}
            <span className="text-lg leading-snug text-gray-800 transition-colors cursor-pointer font-base hover:text-primary">
              {author}
            </span>
          </div>
          <div className="flex items-center gap-3 ">
            <FontAwesomeIcon icon={faClock} />
            <span>{date}</span>
          </div>
        </div>

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
            <source src={video} type="video/mp4" />
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
    </div>
  );
};

export default VideoArticleCard;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faPlay } from "@fortawesome/free-solid-svg-icons";

// const VideoArticleCard = ({
//   title,
//   author,
//   date,
//   video,
//   ArticleImage,
//   coverImage,
//   duration = "3:25", // 👈 لو عندك وقت الفيديو ثابت أو جاهز من الـ API
// }) => {
//   return (
//     <div className="w-full overflow-hidden transition rounded-md">
//       <div className="flex flex-col gap-3">
//         {/* ✅ صورة الكافر + أيقونة التشغيل */}
//         <div className="relative w-full h-[400px] overflow-hidden rounded-md bg-black">
//           <img
//             src={coverImage || "/images/default-cover.jpg"}
//             alt={title}
//             className="object-cover w-full h-full"
//           />

//           {/* زر التشغيل */}
//           <button
//             onClick={() => window.open(video, "_blank")}
//             className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black/40 hover:bg-black/60"
//           >
//             <FontAwesomeIcon
//               icon={faPlay}
//               className="text-5xl text-white opacity-90 hover:opacity-100"
//             />
//           </button>
//         </div>

//         {/* ✅ وقت الفيديو */}
//         <div className="flex items-center gap-2 px-1 text-gray-500">
//           <FontAwesomeIcon icon={faPlay} className="text-sm text-primary" />
//           <span className="text-sm">{duration}</span>
//         </div>

//         {/* ✅ عنوان الفيديو */}
//         <h2 className="text-2xl font-bold leading-snug text-gray-800 lg:text-4xl">
//           {title}
//         </h2>

//         {/* ✅ بيانات الكاتب والتاريخ */}
//         <div className="flex items-center justify-between text-sm text-gray-500">
//           <div className="flex items-center gap-3">
//             {ArticleImage && (
//               <img
//                 src={ArticleImage}
//                 alt="sub"
//                 className="w-6 h-6 rounded-full"
//               />
//             )}
//             <span className="text-lg leading-snug text-gray-800 transition-colors cursor-pointer font-base hover:text-primary">
//               {author}
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <FontAwesomeIcon icon={faClock} />
//             <span>{date}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoArticleCard;
