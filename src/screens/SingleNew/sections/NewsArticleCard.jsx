import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NewsArticleCard = ({ title, author, date, image, subimage, slug }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full overflow-hidden transition rounded-xl"
      // onClick={() => link && window.open(link, "_blank")}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold leading-snug text-gray-800 lg:text-4xl">
          {title}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-3">
            {subimage && (
              <img src={subimage} alt="sub" className="w-6 h-6 rounded-full" />
            )}
            <p href="/">
              <span
                className="text-lg leading-snug text-gray-800 transition-colors cursor-pointer font-base hover:text-primary"
                onClick={() => navigate(`/author/${slug}/`)}
              >
                {author}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faClock} />
            <span>{date}</span>
          </div>
        </div>
        <img
          src={image}
          alt={title}
          className="w-full lg:h-[400px] h-[230px] object-cover"
        />
      </div>
    </div>
  );
};

export default NewsArticleCard;
