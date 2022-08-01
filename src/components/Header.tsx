import React from "react";
import { useNavigate } from "react-router";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

const Header = () => {

  const { loggedIn } = useAppSelector(state => state.auth)
  const navigate = useNavigate()
  const { authorize } = useActions()

  const logout = () => {
    navigate('/')
    authorize(false)
  }

  return (
    <div className="w-full h-[100px] bg-[#E4B062] flex justify-between items-center">
      <div className="w-[380px] flex justify-center">
        <img
          src={require('../logo.png')}
          alt="No Logo"
        />
      </div>
      {loggedIn &&
        <div className="w-[380px] flex justify-center items-center">
          <span className="text-2xl uppercase font-bold"> logout </span>
          <button onClick={logout}>
            <img
              src={require('../logout.png')}
              alt="No Logo"
            />
          </button>
        </div>
      }
    </div >
  )
}

export default Header;
