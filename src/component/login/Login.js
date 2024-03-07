import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
// import brandlogo from "../assets/icons/Brand Logo1.svg";
// import logo from "../assets/icons/Brand Logo.svg";
// import rightIcon from "../assets/icons/right icon.svg";
// import line from "../assets/icons/line.svg";
// import { Google } from "components/googleLogin/Google";
// bg-[url('/src/components/assets/login_asset/bg_login.png')]

export const Login = () => {
  return (
    <>
      <div
        className="bg-[#000] h-[100vh] flex justify-center px-[16px] lg:px-[40px]"
      >
        <div className="flex items-center xl:gap-[300px] lg:gap-[100px]">
          <div className="login md:w-[551px] w-[100%] bg-[#fff] rounded-[8px] flex flex-col gap-[10px] xl:gap-[25px] p-[20px] md:p-[30px]">
            <div className="flex flex-col pt-[30px] md:pt-0">
              <div className="md:hidden">
                {/* <img src={logo} alt={logo} /> */}
              </div>
              <h1 className="text-[#1D2023] text-[25.63px] md:text-[28.83px] not-italic font-[600] tracking-[0.256px] md:tracking-normal md:font-[700] leading-[120%]">
                Log in with:{" "}
              </h1>
            </div>
            {/* <Google /> */}
            <div className="flex justify-center items-center gap-[20px] text-[#1D2023] text-[14.22px] md:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] md:tracking-[0.16px]">
              <div className="lg:w-[208] w-[100%]">
                {/* <img src={line} alt={line} /> */}
              </div>
              <p className="flex justify-center">OR</p>
              <div className="lg:w-[208] w-[100%]">
                {/* <img src={line} alt={line} /> */}
              </div>
            </div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
              className="flex flex-col gap-[30px]"
            >
              <div className="flex flex-col md:border md:border-[#C0D1FC] gap-[16px] md:p-[20px] rounded-[8px] text-[18px] not-italic font-[400] leading-[100%] tracking-[0.18px]">
                <TextField
                  id="email"
                  label="Your e-mail address"
                  placeholder="E-mail address"
                  fullWidth
                />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        ></IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
              {/* <Link
                to="/forgot_password"
                className="text-[#595A5E] text-[16px] leading-[140%] not-italic font-[400] tracking-[0.16px]"
              > */}
                Forgot Password?
              {/* </Link> */}
              <button className="py-[8px] px-[16px] flex gap-[8px] h-[56px] rounded-[4px] bg-[#1463F3] justify-center items-center text-[#fff] text-[16px] md:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] md:tracking-[0.18px] w-[100%]">
                Login
                {/* <img src={rightIcon} alt={rightIcon} /> */}
              </button>
            </Box>
            <p className="text-[#1D2023] text-[16px] md:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px ] md:tracking-[0.18px] flex gap-[5px] items-center md:gap-[10px]">
              New user?{" "}
              <span className="md:text-[#1463F3] cursor-pointer">
                {/* <Link to="/register">Create an account</Link> */}
                Create an account
              </span>
            </p>
          </div>
          <div className="hidden md:hidden lg:block">
            {/* <img src={brandlogo} alt={brandlogo} /> */}
            <p className="text-[#FFF] text-[20.25px] not-italic font-[400] leading-[140%]">
              Sign in or create an account
            </p>
            <div className="text-[#fff] flex justify-end text-[18px] not-italic font-[400] leading-[140%] tracking-[0.18px]">
              <p className="absolute bottom-[60px] lg:left-[53rem] xl:left-[67rem]">
                &copy; Rollog
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
