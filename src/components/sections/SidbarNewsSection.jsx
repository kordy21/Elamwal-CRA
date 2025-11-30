import React, { useEffect } from "react";
// import Banks_insurance_1 from "../../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_1 from "../../assets/images/Banks_insurance_1.webp";
import Banks_insurance_2 from "../../assets/images/Banks_insurance_2.webp";
import Banks_insurance_3 from "../../assets/images/Banks_insurance_3.webp";
import Banks_insurance_4 from "../../assets/images/Banks_insurance_4.webp";
import NewsWidgets from "../ui/NewsWidgets";
import MainTitle from "../ui/MainTitle";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../slices/4-post/thunk";

export const SidbarNewsSection = ({ title }) => {
  const dispatch = useDispatch();
  const { postsByParams } = useSelector((state) => state.Posts);
  useEffect(() => {
    if (title === "اخترنا لكم") {
      dispatch(getPosts({ type: "default", is_active: 1, limit: 6 }));
    }
    dispatch(getPosts({ type: "default", is_trending: 1, limit: 6 }));
  }, [title, dispatch]);
  const activePosts = postsByParams[JSON.stringify({ type: "default",  is_active: 1, limit: 6 })];

  return (
    <section className="flex flex-col w-full gap-4">
      <MainTitle title={title} Sidbar={true} noMore={true} />
      <div className="flex flex-col gap-4 p-3 bg-white rounded md:gap-6 hover:shadow-md">
        <div className="flex flex-col gap-4">
          <NewsWidgets data={activePosts} />
        </div>
      </div>
    </section>
  );
};
