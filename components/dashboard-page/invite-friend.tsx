"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

const InviteFriend = () => {
  const { user } = useUser();
  const [inviteEmail, setInviteEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendInvite = async () => {
    if (!inviteEmail) return alert("Enter an email.");

    setLoading(true);

    const templateParams = {
      sender_name: user?.fullName || "A CodeBridge User",
      sender_email: user?.primaryEmailAddress?.emailAddress,
      invitee_email: inviteEmail,
      time: new Date().toLocaleString(),
      invite_link: "https://codebridge.vercel.app/signup",
    };

    emailjs
      .send(
        process.env.SERVICE_ID!,
        process.env.TEMPLATE_ID!,
        templateParams,
        process.env.PUBLIC_KEY!
      )
      .then(() => {
        toast.success("Invite Link Sent Successfully!");
        setInviteEmail("");
      })
      .catch(() => {
        alert("Something went wrong.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center text-center bg-zinc-900 border rounded-xl p-8 gap-4">
      <Image src="/mail.png" alt="mail" width={90} height={90} />

      <h2 className="font-game text-3xl">Invite a Friend</h2>

      <p className="font-game text-gray-300 max-w-md leading-relaxed">
        Having fun learning? Invite a friend and help them start their coding
        journey on CodeBridge.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-3">
        <Input
          placeholder="Enter email..."
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
          className=" text-lg py-5 px-4 rounded-xl"
        />

        <Button
          variant="pixel"
          disabled={loading}
          onClick={sendInvite}
          className="font-game text-xl px-8 py-6 cursor-pointer"
        >
          {loading ? "Sending..." : "Invite"}
        </Button>
      </div>
    </div>
  );
};

export default InviteFriend;
