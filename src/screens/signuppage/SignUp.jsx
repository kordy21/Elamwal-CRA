import React, { useState } from "react";
import HeaderLayout from "../../components/layout/HeaderLayout";
import { Footer } from "../../components/layout/Footer";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import google from "../../assets/images/google.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/7-auth/1-login/thunk";

const SignUp = ({ login }) => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState(login ? "login" : "signup");
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.auth);

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("كلمة المرور وتأكيدها غير متطابقين!");
      return;
    }
    // console.log("Sign Up Data:", signUpData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/my-account");
      } else {
        alert("فشل تسجيل الدخول. تأكد من البيانات.");
      }
    });
  };
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  if (token) {
    navigate("/my-account");
  }
  return (
    <section>
      <HeaderLayout />

      <div className="flex justify-center gap-4 pt-8 bg-[#F8F8FA]">
        <button
          className={`px-6 py-3 rounded-lg font-bold transition-colors ${
            activeForm === "signup" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setActiveForm("signup");
            navigate("/sign-up");
          }}
        >
          إنشاء حساب جديد
        </button>
        <button
          className={`px-6 py-3 rounded-lg font-bold transition-colors ${
            activeForm === "login" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setActiveForm("login");
            navigate("/login");
          }}
        >
          تسجيل الدخول
        </button>
      </div>

      <div className="flex items-center justify-center py-8 bg-gray-50">
        {activeForm === "signup" && (
          <form
            onSubmit={handleSignUpSubmit}
            className="w-full max-w-2xl px-8 pt-6 pb-8 bg-white shadow-md rounded-2xl"
          >
            <h2 className="mb-6 text-2xl font-bold text-center text-primary">
              إنشاء حساب جديد
            </h2>
            <p className="mb-5 text-xl font-base">مرحبًا بك في موقع الأموال.</p>
            <p className="mb-5">
              من فضلك قم بملء البيانات التالية لإنشاء حساب جديد:
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="الاسم الأول"
                  value={signUpData.firstName}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  الاسم الأخير
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="الاسم الأخير"
                  value={signUpData.lastName}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="اسم المستخدم"
                  value={signUpData.username}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="relative">
                <label className="block mb-2 text-sm text-gray-700">
                  كلمة المرور
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" // pl-10 بدل pr-10
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-12 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeIcon className="w-6 h-6" />
                  ) : (
                    <EyeSlashIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm text-gray-700">
                  تأكيد كلمة المرور
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="********"
                  value={signUpData.confirmPassword}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" // pl-10 بدل pr-10
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-12 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeIcon className="w-6 h-6" />
                  ) : (
                    <EyeSlashIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-6 font-bold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
            >
              إنشاء حساب
            </button>
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-gray-500">أو</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              className="flex items-center justify-center w-full gap-3 py-3 mt-4 font-bold text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              <img src={google} alt="Google" className="w-5 h-5" />
              قم بتسجيل الدخول باستخدام جوجل
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-[#3B5998] border border-gray-300 hover:bg-black text-white font-bold py-3 rounded-lg mt-4 transition-colors"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              قم بتسجيل الدخول باستخدام فيسبوك
            </button>

            <div className="flex items-center justify-center gap-2 mt-4 text-sm">
              <p className="text-gray-600">لديك حساب بالفعل؟</p>
              <button
                type="button"
                onClick={() => setActiveForm("login")}
                className="font-semibold text-green-600 hover:underline"
              >
                تسجيل الدخول
              </button>
            </div>
          </form>
        )}

        {activeForm === "login" && (
          <form
            onSubmit={handleLoginSubmit}
            className="w-full max-w-2xl px-8 pt-6 pb-8 bg-white shadow-md rounded-2xl"
          >
            <h2 className="mb-6 text-2xl font-bold text-center text-primary">
              تسجيل الدخول
            </h2>
            <p className="mb-5 text-xl font-base">مرحبًا بك في موقع الأموال.</p>
            <p className="mb-5">
              من فضلك قم بملء البيانات التالية لإنشاء حساب جديد:
            </p>

            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-700">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="relative mb-6">
              <label className="block mb-2 text-sm text-gray-700">
                كلمة المرور
              </label>
              <input
                type={showLoginPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-12 hover:text-gray-700"
              >
                {showLoginPassword ? (
                  <EyeIcon className="w-6 h-6" />
                ) : (
                  <EyeSlashIcon className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between py-5">
              <div className="flex items-center gap-2">
                <label className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-gray-300 rounded appearance-none peer checked:bg-green-500 checked:border-green-500"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100">
                    ✓
                  </span>
                </label>
                <span className="text-sm text-gray-900">تذكرني</span>
              </div>
              <span className="text-sm text-black cursor-pointer">
                هل نسيت كلمة المرور؟
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 font-bold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
            >
              {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
            </button>
            {error && <p className="mt-4 text-center text-red-600">{error}</p>}
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-gray-500">أو</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full gap-3 py-3 mt-4 font-bold text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              <img src={google} alt="Google" className="w-5 h-5" />
              قم بتسجيل الدخول باستخدام جوجل
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-[#3B5998] border border-gray-300 hover:bg-black text-white font-bold py-3 rounded-lg mt-4 transition-colors"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              قم بتسجيل الدخول باستخدام فيسبوك
            </button>
          </form>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default SignUp;
