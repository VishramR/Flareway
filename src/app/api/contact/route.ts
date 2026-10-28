import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_for_build");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      companyName,
      email,
      phone,
      service,
      budget,
      message,
    } = result.data;

    const { error } = await resend.emails.send({
      from: "Flareway <onboarding@resend.dev>",
      to: "rvishram17@gmail.com", // Change after domain verification
      replyTo: email,
      subject: `🚀 New Contact Enquiry - ${fullName}`,

      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:40px;">
        <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:12px;padding:32px;border:1px solid #e5e7eb;">

          <h1 style="margin:0;color:#1d4ed8;">
            New Website Enquiry
          </h1>

          <p style="color:#64748b;margin-top:10px;">
            Someone submitted the contact form on the Flareway website.
          </p>

          <hr style="margin:30px 0;border:none;border-top:1px solid #e5e7eb;" />

          <table width="100%" cellpadding="10" cellspacing="0">

            <tr>
              <td width="180"><strong>Full Name</strong></td>
              <td>${fullName}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${companyName || "-"}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Service Required</strong></td>
              <td>${service}</td>
            </tr>

            <tr>
              <td><strong>Budget</strong></td>
              <td>${budget || "-"}</td>
            </tr>

            <tr>
              <td valign="top"><strong>Message</strong></td>
              <td>${message.replace(/\n/g, "<br/>")}</td>
            </tr>

          </table>

          <hr style="margin:30px 0;border:none;border-top:1px solid #e5e7eb;" />

          <p style="font-size:14px;color:#64748b;">
            Submitted from <strong>Flareway Technologies Website</strong>
          </p>

        </div>
      </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}