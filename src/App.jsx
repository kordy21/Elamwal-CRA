import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Video } from "./screens/Videos/Video";
import { SingleNew } from "./screens/SingleNew/SingleNew";
import { Categorey } from "./screens/Categorey/Categorey";
import { SingleVideos } from "./screens/SingleVideos/SingleVideos";
import Images from "./screens/Images/Images";
// import { Profile } from "./screens/Profile/Profile";
import SignUp from "./screens/signuppage/SignUp";
import PrivacyPolice from "./screens/Privacypolicy/PrivacyPolice";
import TermsConditions from "./screens/TermsConditions/TermsConditions";
import WhoWeAre from "./screens/Who we are/WhoWeAre";
import Author from "./screens/Author/Author";
import Characters from "./screens/Characteries/Characters";
import CharacterSingle from "./screens/CharacterSingle.jsx/CharacterSingle";
import AuthorMoney from "./screens/AuthorMoneyPage/AuthorMoney";
import ComingSoon from "./screens/CommingSoon/ComingSoon";
import NewsPaper from "./screens/newspaper/NewsPaper";
import NewsPaperSingle from "./screens/NewsPaperSingle/NewsPaperSingle";
import Advertise from "./screens/AdvertiseOurpage/Advertise";
import Hiring from "./screens/Hiring/Hiring";
import ContactUs from "./screens/ContactUs/ContactUs";
import Profiles from "./screens/Profiles/Profiles";
import Tags from "./screens/Tags/Tags";
import News from "./screens/News/News";
import FinancialFootprint from "./screens/Financialprint/FinancialFootprint";
import SingleImages from "./screens/ImagesDetails/SingleImages";
import MyAccount from "./screens/MyAccount/MyAccount";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { SingleProfile } from "./screens/SingleProfile/SingleProfile";
import { SearchPost } from "./screens/Search/SearchPost";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* News Routes */}
        <Route path="/:categorySlug/:subcategorySlug" element={<Categorey />} />
        <Route
          path="/:categorySlug/breaking"
          element={<Categorey other="breaking" />}
        />
        <Route
          path="/:categorySlug/on-trend"
          element={<Categorey other="on-trend" />}
        />
        {/* <Route path="/:categorySlug/:subcategorySlug" element={<Categorey />} /> */}
        <Route
          path="/:categorySlug/:subcategorySlug/:postSlug"
          element={<SingleNew />}
        />
        {/* Video Routes */}
        <Route path="/video/:subcategorySlug" element={<Video />} />
        <Route path="/video/video/:postSlug" element={<SingleVideos />} />
        {/* Image Routes */}
        <Route path="/:categorySlug/photo-album" element={<Images />} />
        <Route
          path="/:categorySlug/photo-album/:postSlug"
          element={<SingleImages />}
        />
        {/* Newspaper */}
        <Route path="/more/newspaper" element={<NewsPaper />} />
        <Route path="/more/newspaper/:postSlug" element={<NewsPaperSingle />} />
        {/* profiles */}
        <Route
          path="/banks/banking-footprints"
          element={<Profiles typeProfile="banker" />}
        />
        <Route
          path="/investment-and-stock-exchange/companies"
          element={<Profiles typeProfile="company" />}
        />
        <Route
          path="/investment-and-stock-exchange/businessmen"
          element={<Profiles typeProfile="person" />}
        />
        <Route
          path="/banks/banking-footprints/:profileSlug"
          element={<SingleProfile />}
        />
        <Route
          path="/investment-and-stock-exchange/companies/:profileSlug"
          element={<SingleProfile />}
        />
        <Route
          path="/investment-and-stock-exchange/businessmen/:profileSlug"
          element={<SingleProfile />}
        />
        {/* Search */}
        <Route path="/search" element={<SearchPost />} />

        {/* Tags */}
        <Route path="/tag/:tagSlug" element={<Tags />} />

        {/* Author */}
        <Route path="/author/:slugAuthor" element={<Author />} />

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* Stop Here */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <Route path="/about-us" element={<WhoWeAre />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/:categorySlug/money-book" element={<AuthorMoney />} />
        {/* <Route path="/:categorySlug/money-book/:slug" element={<Author />} /> */}
        {/* <Route path="/:categorySlug/businessmen" element={<ComingSoon />} /> */}
        <Route path="/advertise-with-us" element={<Advertise />} />
        <Route path="/employment" element={<Hiring />} />
        {/* <Route path="/company" element={<Company />} /> */}
        <Route path="/login" element={<SignUp login={true} />} />
        <Route path="/sign-up" element={<SignUp login={false} />} />
        <Route path="/privacy-police" element={<PrivacyPolice />} />
        <Route path="/terms-condition" element={<TermsConditions />} />
        <Route path="/charactersingle" element={<CharacterSingle />} />
        <Route path="/comming-soon" element={<ComingSoon />} />
        {/* <Route path="/newspaper" element={<NewsPaper />} /> */}
        <Route path="/news" element={<News />} />
        <Route path="/financial" element={<FinancialFootprint />} />
        {/* Page Protected */}
        <Route
          path="/my-account"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />
        {/* remove */}
        {/* <Route path="/:categorySlug/businessmen" element={<Characters />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
