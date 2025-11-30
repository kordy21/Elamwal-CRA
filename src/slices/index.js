import { combineReducers } from "redux";

// Front

// Authentication
// import LoginReducer from "./auth/login/reducer";
// import AccountReducer from "./auth/register/reducer";
// import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
// import ProfileReducer from "./auth/profile/reducer";

import TagReducer from "./1-tags/reducer";
import CategoryReducer from "./2-category/reducer";
import SubcategoryReducer from "./3-subcategory/reducer";
import PostReducer from "./4-post/reducer";
// import MediaReducer from "./5-media/reducer";
import ProfileReducer from "./6-profile/reducer";
import authReducer from "./7-auth/1-login/reducer";
import externalFactorsReducer from "./8-externalFactorsSlice/reducer";

const rootReducer = combineReducers({
  // Layout: LayoutReducer,
  // Login: LoginReducer,
  // Account: AccountReducer,
  // ForgetPassword: ForgetPasswordReducer,
  // Profile: ProfileReducer,
  Tags: TagReducer,
  Categories: CategoryReducer,
  SubCategories: SubcategoryReducer,
  Posts: PostReducer,
  Profiles: ProfileReducer,
  auth: authReducer,
  externalFactors: externalFactorsReducer,
});

export default rootReducer;
