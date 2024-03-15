import { useState, useEffect } from "react";
import { BackgroundBeamsDemo } from "../components/BackgroundBeamsDemo";
import SideBar from "../components/SideBar";
import { Auth } from "./Login";
import useAuthToken from "../hooks/useAuth";
function HomePage() {
  const { getItem } = useAuthToken();
  const { token } = getItem();
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      {token !== null ? (
        <>
          <div className="text-3xl font-bold bg-[alice-blue] w-full h-full flex flex-col ">
            <div className="flex flex-row">
              <SideBar />
              <BackgroundBeamsDemo />
            </div>
          </div>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default HomePage;
