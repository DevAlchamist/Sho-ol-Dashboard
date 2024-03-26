"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  RadioGroup,
  TextField,
} from "@mui/material";
import BoxImage from "@/assets/Saly-10.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData } from "../../Interface";
import { AppDispatch } from "@/Store/store";
import { useDispatch, useSelector } from "react-redux";
import authServices, { RegisterData } from "@/services/auth.services";
import TokenHelpers from "@/helpers/Token.helpers";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { getUsersAsync } from "../Store/userSlice";
import { useAppDispatch } from "@/helpers/hooks";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({});
  const [change, setChange] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleChange = () => {
    setChange(!change);
  };

  const handleLogin = async (data: LoginData) => {
    if (!change) {
      try {
        const response = await authServices.login(data);
        const token = response?.data?.result?.accessToken;
        if (token) {
          TokenHelpers.create(token);
          router.push("/");
        }
        reset();
        useEffect(() => {
          dispatch(getUsersAsync(token));
        }, [token]);
      } catch (error) {
        toast.error("An error Occurred");
        reset();
      }
    }
  };
  const handleRegister = async (data: RegisterData) => {
    console.log(data);
    try {
      const response = await authServices.register(data);
      console.log(response);
      const token = response?.data?.result?.accessToken;
      if (token) {
        console.log(token);
        TokenHelpers.create(token);
        router.push("/");
      }
      reset();
      useEffect(() => {
        dispatch(getUsersAsync(token));
      }, [token]);
    } catch (error) {
      toast.error("An error Occurred");
      reset();
    }
  };

  return (
    <Box className="flex justify-between items-center">
      <Box className="flex flex-col w-full h-screen">
        <strong className="pl-5 pt-5">Sho-ol</strong>
        <Box className="flex flex-col w-full h-full justify-center items-center">
          <Box className="text-3xl flex flex-col w-full lg:w-[431px] px-2 lg:px-0 text-start  ">
            {change ? "Sign Up" : "Sign In"}
            <Box className="text-base font-thin mt-5 w-full lg:w-[308px]">
              {change
                ? "If you do have an account You can"
                : "If you don't have an account register You can"}
              <span className="text-[#4D44B5]" onClick={handleChange}>
                {" "}
                {change === true ? "Login here !" : "Register here !"}
              </span>
            </Box>
          </Box>
          <form
            onSubmit={handleSubmit((data: any) => {
              if (change) {
                handleRegister(data);
              } else {
                handleLogin(data);
              }
            })}
            className="w-full px-2 lg:px-0 lg:w-[431px] mt-5"
          >
            <label id="email" className="text-[#999999]">
              Email
            </label>
            <Box className="relative">
              <FormControl fullWidth>
                <Input
                  id="email"
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className="outline-none mt-4 pl-6 mb-8"
                />
              </FormControl>
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-6"
              >
                <path
                  d="M1.49414 0.676514H15.5059C16.3297 0.676514 17 1.34679 17 2.17065V10.8294C17 11.6533 16.3297 12.3236 15.5059 12.3236H1.49414C0.670271 12.3236 0 11.6533 0 10.8294V2.17065C0 1.34679 0.670271 0.676514 1.49414 0.676514ZM1.68914 1.67261L1.88856 1.83866L7.90719 6.85037C8.25071 7.13638 8.74936 7.13638 9.09281 6.85037L15.1114 1.83866L15.3109 1.67261H1.68914ZM16.0039 2.39172L11.1001 6.47514L16.0039 9.73878V2.39172ZM1.49414 11.3275H15.5059C15.7465 11.3275 15.9478 11.1559 15.9939 10.9287L10.3014 7.14017L9.73018 7.61583C9.37377 7.9126 8.93685 8.06099 8.49997 8.06099C8.06308 8.06099 7.62619 7.9126 7.26976 7.61583L6.69853 7.14017L1.00605 10.9286C1.05221 11.1559 1.25348 11.3275 1.49414 11.3275ZM0.996094 9.73878L5.89993 6.47517L0.996094 2.39172V9.73878Z"
                  fill="#000842"
                />
              </svg>
            </Box>
            {change === true && (
              <>
                <label id="email" className="text-[#999999]">
                  UserName
                </label>
                <Box className="relative ">
                  <FormControl fullWidth>
                    <Input
                      {...register("username", { required: true })}
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      placeholder="Enter your UserName"
                      className="outline-none mt-4 pl-6 mb-8"
                    />
                  </FormControl>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-6"
                  >
                    <path
                      d="M7.88599 7.70726C8.94482 7.70726 9.86157 7.3275 10.6108 6.57823C11.3599 5.82909 11.7397 4.91247 11.7397 3.85351C11.7397 2.79492 11.36 1.87817 10.6107 1.12878C9.86145 0.37976 8.9447 0 7.88599 0C6.82703 0 5.9104 0.37976 5.16125 1.1289C4.41211 1.87805 4.03223 2.79479 4.03223 3.85351C4.03223 4.91247 4.41211 5.82921 5.16125 6.57836C5.91064 7.32738 6.82739 7.70726 7.88599 7.70726ZM5.82434 1.79187C6.39917 1.21704 7.07349 0.93762 7.88599 0.93762C8.69836 0.93762 9.3728 1.21704 9.94775 1.79187C10.5226 2.36682 10.8021 3.04125 10.8021 3.85351C10.8021 4.66601 10.5226 5.34032 9.94775 5.91527C9.3728 6.49022 8.69836 6.76964 7.88599 6.76964C7.07373 6.76964 6.39941 6.4901 5.82434 5.91527C5.24939 5.34044 4.96985 4.66601 4.96985 3.85351C4.96985 3.04125 5.24939 2.36682 5.82434 1.79187Z"
                      fill="black"
                    />
                    <path
                      d="M14.629 12.3031C14.6074 11.9913 14.5637 11.6512 14.4994 11.2921C14.4344 10.9303 14.3508 10.5883 14.2507 10.2756C14.1472 9.95251 14.0067 9.63342 13.8328 9.32763C13.6525 9.01025 13.4406 8.73388 13.2028 8.50647C12.9541 8.26855 12.6497 8.07727 12.2976 7.93774C11.9468 7.79895 11.558 7.72864 11.1421 7.72864C10.9788 7.72864 10.8208 7.79565 10.5157 7.99426C10.328 8.1167 10.1084 8.2583 9.86328 8.41492C9.65369 8.54846 9.36975 8.67358 9.01904 8.78686C8.67688 8.89758 8.32947 8.95373 7.98645 8.95373C7.64368 8.95373 7.29626 8.89758 6.95386 8.78686C6.60352 8.6737 6.31946 8.54858 6.11023 8.41504C5.86743 8.25989 5.64771 8.11829 5.45715 7.99414C5.15234 7.79553 4.99438 7.72852 4.83105 7.72852C4.41504 7.72852 4.02637 7.79895 3.67566 7.93787C3.32385 8.07715 3.01929 8.26843 2.77039 8.50659C2.53259 8.73413 2.32068 9.01037 2.1405 9.32763C1.9668 9.63342 1.82617 9.95239 1.72266 10.2758C1.62268 10.5884 1.53906 10.9303 1.47412 11.2921C1.40967 11.6507 1.36609 11.991 1.34448 12.3035C1.32324 12.609 1.3125 12.927 1.3125 13.2483C1.3125 14.0835 1.578 14.7596 2.10156 15.2583C2.61865 15.7504 3.30273 15.9999 4.13489 15.9999H11.839C12.6709 15.9999 13.355 15.7504 13.8722 15.2583C14.3959 14.76 14.6614 14.0836 14.6614 13.2482C14.6613 12.9258 14.6504 12.6078 14.629 12.3031ZM13.2257 14.579C12.884 14.9042 12.4304 15.0622 11.8389 15.0622H4.13489C3.54321 15.0622 3.0896 14.9042 2.74805 14.5791C2.41296 14.2601 2.25012 13.8247 2.25012 13.2483C2.25012 12.9485 2.26001 12.6525 2.27979 12.3683C2.29907 12.0895 2.3385 11.7832 2.39697 11.4578C2.45471 11.1363 2.5282 10.8347 2.6156 10.5616C2.69946 10.2998 2.81384 10.0405 2.95569 9.79077C3.09106 9.55273 3.24683 9.34851 3.4187 9.18396C3.57947 9.03003 3.7821 8.90405 4.02087 8.80957C4.2417 8.72217 4.48987 8.67431 4.75928 8.66711C4.79211 8.68457 4.85059 8.71789 4.94531 8.77966C5.13806 8.90527 5.36023 9.04858 5.60583 9.20544C5.88269 9.38195 6.23938 9.54138 6.66553 9.67895C7.1012 9.81982 7.54553 9.89135 7.98657 9.89135C8.42761 9.89135 8.87207 9.81982 9.3075 9.67907C9.73401 9.54126 10.0906 9.38195 10.3678 9.2052C10.6191 9.04455 10.8351 8.90539 11.0278 8.77966C11.1226 8.71802 11.181 8.68457 11.2139 8.66711C11.4834 8.67431 11.7316 8.72217 11.9525 8.80957C12.1912 8.90405 12.3938 9.03015 12.5546 9.18396C12.7264 9.34839 12.8822 9.55261 13.0176 9.79089C13.1595 10.0405 13.274 10.2999 13.3578 10.5615C13.4453 10.835 13.5189 11.1365 13.5765 11.4576C13.6349 11.7837 13.6744 12.0901 13.6937 12.3684V12.3686C13.7136 12.6517 13.7236 12.9476 13.7238 13.2483C13.7236 13.8248 13.5608 14.2601 13.2257 14.579Z"
                      fill="black"
                    />
                  </svg>
                </Box>
              </>
            )}
            <label id="password" className="text-[#999999]">
              Password
            </label>
            <Box className="relative mb-8">
              <FormControl fullWidth>
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="outline-none mt-4  pl-6 placeholder:text-black"
                />
              </FormControl>
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                className="absolute top-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0032 7.2296V4.53742C11.0104 3.31927 10.5238 2.14798 9.65526 1.29383C8.81554 0.457706 7.71632 0 6.55223 0C6.53421 0 6.51259 0 6.49457 0C4.01142 0.00360399 1.99319 2.03625 1.99319 4.53742V7.2296C1.05616 7.34132 0.371399 8.12699 0.371399 9.07844V15.1259C0.371399 16.1531 1.19311 17 2.22024 17H10.7797C11.8068 17 12.6286 16.1531 12.6286 15.1259V9.07844C12.6249 8.13059 11.9402 7.34132 11.0032 7.2296ZM2.71039 4.53742H2.71399C2.71399 2.43269 4.41147 0.709985 6.49817 0.709985H6.50178C7.49287 0.706381 8.44433 1.09922 9.1471 1.79839C9.87871 2.52279 10.286 3.51028 10.2788 4.53742V7.2332H9.48588V4.53742C9.49309 3.71931 9.16873 2.93364 8.58849 2.35701C8.04068 1.8092 7.29826 1.49926 6.5234 1.49926H6.50178C4.84394 1.49926 3.50326 2.86156 3.50326 4.53381V7.2332H2.71039V4.53742ZM8.76868 4.53742V7.2332H4.22766V4.53742C4.22766 3.26161 5.24399 2.22366 6.50538 2.22366H6.52701C7.11085 2.22366 7.67307 2.45792 8.08753 2.87238C8.52722 3.31206 8.77589 3.91393 8.76868 4.53742ZM11.9402 15.1367C11.9402 15.7674 11.4284 16.2792 10.7977 16.2792H2.23466C1.60396 16.2792 1.0922 15.7674 1.0922 15.1367V9.09646C1.0922 8.46576 1.60396 7.954 2.23466 7.954H10.7977C11.4284 7.954 11.9402 8.46576 11.9402 9.09646V15.1367Z"
                  fill="#000842"
                />
                <path
                  d="M7.74516 11.8933C7.58659 11.3347 7.07843 10.9526 6.49818 10.9526C5.78099 10.9526 5.19714 11.5329 5.19714 12.2537C5.19714 12.8339 5.57917 13.3421 6.13778 13.5007V14.5098C6.13778 14.708 6.29996 14.8702 6.49818 14.8702C6.6964 14.8702 6.85858 14.708 6.85858 14.5098V13.5007C7.54694 13.3024 7.94699 12.5816 7.74516 11.8933ZM6.49818 12.8303C6.17743 12.8303 5.91794 12.5708 5.91794 12.2501C5.91794 11.9293 6.17743 11.6698 6.49818 11.6698C6.81894 11.6698 7.07842 11.9293 7.07842 12.2501C7.07842 12.5708 6.81894 12.8303 6.49818 12.8303Z"
                  fill="#000842"
                />
              </svg>
              {!change && (
                <Box className="flex w-full justify-between items-center">
                  <Box>
                    <Checkbox /> <span className="">Remember Me</span>
                  </Box>
                  <Box className=" text-[#999999]">Forgot Password ?</Box>
                </Box>
              )}
            </Box>
            {/* {change && (
            )} */}
            <Button
              type="submit"
              className="w-full lg:w-[429px] rounded-3xl shadow-2xl py-3 bg-[#4D44B5] text-white"
            >
              {change ? "Register" : "Login"}
            </Button>
          </form>
          {change === false && (
            <Box className="text-[#999999] mt-5">Or Continue with</Box>
          )}
          {change === false && (
            <Box className="flex justify-between w-[165px] mt-5">
              <svg
                width="42"
                height="43"
                viewBox="0 0 42 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="20.7287"
                  cy="19.7286"
                  rx="18.1376"
                  ry="18.1376"
                  fill="url(#paint0_linear_24_121)"
                />
                <path
                  d="M27.4832 26.9337L28.2889 21.8144H23.2488V18.4938C23.2488 17.093 23.9515 15.7267 26.209 15.7267H28.5019V11.3684C28.5019 11.3684 26.4219 11.0225 24.4342 11.0225C20.2815 11.0225 17.5697 13.4748 17.5697 17.9127V21.8144H12.9554V26.9337H17.5697V39.3099C18.4961 39.4517 19.4438 39.5243 20.4092 39.5243C21.3747 39.5243 22.3224 39.4517 23.2488 39.3099V26.9337H27.4832Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_24_121"
                    x1="20.7287"
                    y1="1.59106"
                    x2="20.7287"
                    y2="37.7586"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.0521 20.7286C39.0521 30.7405 30.9356 38.8662 20.9146 38.8662C10.8936 38.8662 2.77701 30.7405 2.77701 20.7286C2.77701 10.7076 10.8936 2.59106 20.9146 2.59106C30.9356 2.59106 39.0521 10.7076 39.0521 20.7286Z"
                  fill="#283544"
                />
                <path
                  d="M29.416 16.1391C29.317 16.1968 26.9609 17.4153 26.9609 20.117C27.072 23.1981 29.9342 24.2786 29.9833 24.2786C29.9342 24.3364 29.5512 25.7506 28.4166 27.233C27.5162 28.51 26.5167 29.7975 24.9991 29.7975C23.5555 29.7975 23.0373 28.9464 21.3716 28.9464C19.5828 28.9464 19.0766 29.7975 17.707 29.7975C16.1894 29.7975 15.116 28.441 14.1664 27.176C12.9328 25.5204 11.8843 22.9222 11.8473 20.4275C11.8224 19.1055 12.0944 17.806 12.7848 16.7022C13.7593 15.1613 15.499 14.1153 17.3989 14.0808C18.8545 14.0351 20.1501 15.0121 21.0384 15.0121C21.8898 15.0121 23.4815 14.0808 25.2824 14.0808C26.0597 14.0815 28.1325 14.2997 29.416 16.1391ZM20.9153 13.8168C20.6562 12.6096 21.3716 11.4024 22.0379 10.6323C22.8892 9.70096 24.2338 9.06885 25.3934 9.06885C25.4674 10.2761 24.9983 11.4601 24.1598 12.3224C23.4074 13.2537 22.1119 13.9548 20.9153 13.8168Z"
                  fill="white"
                />
              </svg>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.4108 21.1314C39.4108 19.6401 39.2873 18.5519 39.02 17.4233H21.6434V24.1543H31.8431C31.6375 25.8271 30.5271 28.3462 28.0593 30.0389L28.0247 30.2643L33.5189 34.4354L33.8996 34.4726C37.3954 31.3086 39.4108 26.6533 39.4108 21.1314Z"
                  fill="#4285F4"
                />
                <path
                  d="M21.6422 38.8662C26.6392 38.8662 30.8342 37.2538 33.8984 34.4728L28.0581 30.039C26.4953 31.1072 24.3977 31.8528 21.6422 31.8528C16.748 31.8528 12.5941 28.6889 11.1133 24.3157L10.8963 24.3337L5.18338 28.6667L5.10867 28.8702C8.15212 34.7951 14.4036 38.8662 21.6422 38.8662Z"
                  fill="#34A853"
                />
                <path
                  d="M11.1144 24.3158C10.7237 23.1873 10.4976 21.978 10.4976 20.7286C10.4976 19.479 10.7237 18.2699 11.0939 17.1414L11.0835 16.901L5.29899 12.4985L5.10973 12.5868C3.85537 15.0454 3.13562 17.8064 3.13562 20.7286C3.13562 23.6507 3.85537 26.4116 5.10973 28.8703L11.1144 24.3158Z"
                  fill="#FBBC05"
                />
                <path
                  d="M21.6423 9.60421C25.1176 9.60421 27.4619 11.0754 28.7986 12.3048L34.0219 7.30683C30.814 4.38468 26.6393 2.59106 21.6423 2.59106C14.4037 2.59106 8.15214 6.66191 5.10867 12.5868L11.0928 17.1414C12.5941 12.7682 16.7481 9.60421 21.6423 9.60421Z"
                  fill="#EB4335"
                />
              </svg>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="w-full hidden lg:flex md:flex p-[5px] h-screen ">
        <Box className="flex flex-col w-full justify-around items-center bg-[#4D44B5] rounded-lg  ">
          <Box className="w-full flex text-white justify-end items-end pb-5 -mt-16 pr-5">
            +91 82877 *****
          </Box>
          <Box className="w-full flex flex-col items-center justify-between">
            <Image
              src={BoxImage}
              height={521}
              width={521}
              alt="BoxImage"
              className=""
            />
            <Box className="text-white w-full px-16 pt-16 text-4xl">
              {change ? "Sign Up to name" : "Sign In to name"}
              <Box className=" text-sm font-thin">
                Lorem ipsum dolor sit amet.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
