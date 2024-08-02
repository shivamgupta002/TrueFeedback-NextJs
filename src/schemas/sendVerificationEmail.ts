import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { url } from "inspector";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "True Feedback Verification email",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification Email send Successfully" };
  } catch (emailError) {
    console.log("Email sending verification error" + emailError);
    return { success: false, message: "Failed to send verification Email" };
  }
}
