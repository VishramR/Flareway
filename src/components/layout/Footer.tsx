import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "@/components/common/Container";
import FluidContainer from "@/components/common/FluidContainer";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            {/* <h3 className="mb-6 text-3xl font-bold">Flareway</h3> */}
            <div className="mb-6">
              <Image
                src="/images/logo/flareway_logo1.png"
                alt="footer_logo"
                width={100}
                height={100}
                // className="w-auto h-auto"
              />
            </div>

            <p className="mb-8 leading-8 text-gray-600">
              We help businesses grow online through web development, digital
              marketing, SEO, and creative solutions.
            </p>

            <div className="flex items-center gap-4">
              <FaFacebookF size={20} />
              <FaInstagram size={20} />
              <FaLinkedinIn size={20} />
              <FaXTwitter size={20} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold">Services</h4>

            <ul className="space-y-4 text-gray-600">
              <li>
                <Link href="/services/web-development">
                  Website Development
                </Link>
              </li>
              <li>
                {/* <Link href="#">E-commerce Website Development</Link> */}
              </li>
              <li>
                <Link href="/services/seo-services">SEO Services</Link>
              </li>
              <li>
                <Link href="/services/local-seo">Local SEO</Link>
              </li>
              <li>
                <Link href="/services/google-ads">Google Ads</Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="#">Branding</Link>
              </li>
              <li>
                <Link href="#">Content Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold">Company</h4>

            <ul className="space-y-4 text-gray-600">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold">Contact Info</h4>

            <div className="space-y-4 text-gray-600">
              <p>Avinashi, Tamil Nadu, India</p>

              <p>+91 88888 99999</p>

              <p>hello@flareway.com</p>
            </div>
          </div>
        </div>
      </Container>

      <FluidContainer className="border-t border-gray-300 py-6">
        <Container>
          <p className="text-center text-sm text-gray-500">
            © 2026 Flareway. All rights reserved.
          </p>
        </Container>
      </FluidContainer>
    </footer>
  );
}
