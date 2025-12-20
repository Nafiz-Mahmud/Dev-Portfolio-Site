"use client";

import { useActionState } from "react";
import { sendMailTestAction } from "@/action";
export default function TestPage() {
  const [state, actionState, pending] = useActionState(sendMailTestAction, {});
  return (
    <div className="test_page flex flex-col text-white h-screen flex items-center justify-center">
      <h2>Test Pages</h2>
      <form
        action={actionState}
        className="flex flex-col mt-4 items-center gap-8"
      >
        <label htmlFor="email">Your Email:</label>
        <input type="text" name="email" id="email" placeholder="Enter email" />
        <button type="submit" className="bg-blue-500 px-8 py-4 cursor-pointer">
          Send Email
        </button>
      </form>
    </div>
  );
}
