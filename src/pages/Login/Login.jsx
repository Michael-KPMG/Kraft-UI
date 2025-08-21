import { useState } from "react";
import { Input, Switch } from "@mui/joy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import LoginImage from "@/assets/LoginImage.png";
import Logo from "@/assets/kraftLogo.png";

import "./Login.scss";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="container">
      <div className="img_cotainer">
        <img src={LoginImage} alt="login banner" />
      </div>
      <div className="form_container">
        <img src={Logo} alt="Kraft AI Logo" />
        <div className="form_heading">Nice to see you again</div>
        <div className="text_box_container">
          <label htmlFor="emailOrPhn">Login</label>
          <Input
            type="text"
            placeholder="Email or phone number"
            variant="soft"
            size="lg"
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "#808080", // Light gray background
              },
            }}
          />
        </div>
        <div className="text_box_container">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Email or phone number"
            variant="soft"
            size="lg"
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "#808080", // Light gray background
              },
            }}
          />
          {showPass ? (
            <VisibilityIcon onClick={() => setShowPass((prev) => !prev)} />
          ) : (
            <VisibilityOffIcon onClick={() => setShowPass((prev) => !prev)} />
          )}

          {/* <input type="password" id='password' placeholder='Email or phone number' /> */}
        </div>
        <div className="pass_info">
          <div className="remember_pass">
            <Switch
              size="lg"
              variant="soft"
              sx={{
                "& .MuiSwitch-thumb": {
                  backgroundColor: "#fff", // Thumb color
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "#E5E5E5", // Track color when off
                },
                "&.Mui-checked .MuiSwitch-track": {
                  backgroundColor: "#1976d2", // Track color when on
                },
              }}
            />
            <label htmlFor="">Remember me</label>
          </div>
          <div className="forgot_pass_link">
            <a href="">Forgot password?</a>
          </div>
        </div>
        <button className="btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Login;
