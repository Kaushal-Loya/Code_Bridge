"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const UserStatus = () => {
  const { user } = useUser();
  return (
    <div className="mt-5">
      <div className=" flex gap-3 items-center">
        <Image src={"/alex_walk.gif"} alt="walking" width={70} height={70} />
        <h2 className="font-game text-2xl">
          {user?.primaryEmailAddress?.emailAddress}
        </h2>

        <div className="grid grid-cols-2">
          <div>
            <Image src={"/star.png"} alt="star" width={35} height={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
