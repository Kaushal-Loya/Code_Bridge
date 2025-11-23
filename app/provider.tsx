"use client"

import NavigationBar from "@/components/landing-page/navigation-bar";
import { UserDetailContext } from "@/context/user-detail-context";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [userDetail, setUserDetail] = useState();

  const { user } = useUser();

  const createNewUser = async () => {
    const result = await axios.post("/api/user", {});
    setUserDetail(result?.data);
  };

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      createNewUser();
    }
  }, [user]);

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <div className="flex flex-col items-center">
          <NavigationBar />
        </div>
        {children}
      </UserDetailContext.Provider>
    </div>
  );
};

export default Provider;
