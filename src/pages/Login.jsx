import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [userPw, setPwd] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);

  const [notAllow, setNowAllow] = useState(true);

  // function loginSubmit() {
  //   login({
  //     email,
  //     userPw,
  //   });
  // }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      // eslint-disable-next-line
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePwd = (e) => {
    setPwd(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    if (regex.test(userPw)) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  };

  useEffect(() => {
    if (emailValid && pwdValid) {
      setNowAllow(false);
      return;
    }
    setNowAllow(true);
  }, [emailValid, pwdValid]);

  return (
    <StyledLogin>
      <div className="button">
        <button className="google">
          {/* <FcGoogle className="google-icon" /> */}
          Login with Google
        </button>
        <button className="git">
          {/* <GoMarkGithub className="git-icon" /> */}
          Login with Github
        </button>
      </div>
      <div className="page">
        <div className="contentWrap">
          UserName
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {/* ????????? ??????????????? */}
            {!emailValid && email.length > 0 && (
              <div>????????? ???????????? ??????????????????.</div>
            )}
          </div>
          PassWord
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="??????,??????,???????????? ?????? 8?????? ??????"
              value={userPw}
              onChange={handlePwd}
            />
          </div>
          <div className="errorMessageWrap">
            {/* ???????????? ??????????????? */}
            {!pwdValid && userPw.length > 0 && (
              <div>??????,??????,???????????? ?????? 8??? ?????? ??????????????????.</div>
            )}
          </div>
          <button
            // onClick={loginSubmit}
            // disabled={notAllow}
            className="bottomButton"
          >
            Login
          </button>
          <Link to="/signup" className="signup">
            sign up
          </Link>
        </div>
      </div>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  display: flex;
  display: block;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 25px rgb(0 0 0 / 5%), 0 20px 48px rgb(0 0 0 / 5%),
    0 1px 4px rgb(0 0 0 / 10%);
  padding: 24px;
  margin: 3rem auto 3rem;
  border-radius: 7px;
  box-sizing: inherit;

  .button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
  }
  .google {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #bf360c;
    border-radius: 64px;
    color: white;
    margin-top: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .git {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #2f3337;
    border-radius: 64px;
    color: white;
    margin-top: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .google-icon {
    display: inline-block;
    font-size: large;
    margin-right: 3px;
  }

  .git-icon {
    display: inline-block;
    font-size: large;
    margin-right: 3px;
  }

  .contentWrap {
    margin-top: 26px;
    flex: 1;
  }

  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0e0;
  }

  .password {
    margin-top: 10px;
  }

  .input {
    width: 100%;
    outline: none;
    border: none;
    height: 15px;
    font-size: 14px;
    font-weight: 400;
  }
  .input::placeholder {
    color: white;
  }
  .errorMessageWrap {
    margin-top: 8px;
    color: red;
    font-size: 12px;
  }
  .bottomButton {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #0a95ff;
    border-radius: 64px;
    color: white;
    margin-top: 16px;
    cursor: pointer;
  }
  .signup {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;
