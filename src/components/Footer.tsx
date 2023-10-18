import uuid from "react-uuid";
import { FooterEmail } from "./FooterEmail";

import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoMailSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';

/* footer component */
export default function Footer({ className }: any): JSX.Element {
  const data = [
    {
      heading: "Reach us",
      l1: "+1012 3456 789",
      l2: "demo@gmail.com",
      l3: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
      l4: null,
      l5: null
    },
    {
      heading: "Company",
      l1: "About",
      l2: "Contact",
      l3: "Blogs",
      l4: null,
      l5: null
    },
    {
      heading: "Legal",
      l1: "Privacy Policy",
      l2: "Terms & Services",
      l3: "Terms of Use",
      l4: "Refund Policy",
      l5: null,
    },
    {
      heading: "Quick Links",
      l1: "Techlabz Keybox",
      l2: "Downloads",
      l3: "Forum",
      l4: null,
      l5: null,
    },
  ] as const;

  const mappedData = data.map((e, idx) => (
    <div key={uuid()} className={`${idx !== 0 && idx !== 4 ? 'pl-[25px]' : ''}`}>
      <h6 className="font-bold uppercase p-4 sm:pt-2">{e.heading}</h6>
      <ul>
        {idx === 0 ? (
          <>
            <li className="py-1 flex items-center">
              <BiSolidPhoneCall className="mr-2" />
              {e.l1}
            </li>
            <li className="py-1 flex items-center">
              <IoMailSharp className="mr-2" />
              {e.l2}
            </li>
            <li className="py-1 flex items-center">
              <FaLocationDot className="mr-2" />
              {e.l3}
            </li>
            <li className="py-1">{e.l4}</li>
            <li className="py-1">{e.l5}</li>
          </>
        ) :
          <ul>
            <li className="py-1">{e.l1}</li>
            <li className="py-1">{e.l2}</li>
            <li className="py-1">{e.l3}</li>
            <li className="py-1">{e.l4}</li>
            <li className="py-1">{e.l5}</li>
          </ul>
        }
      </ul>
    </div>
  ));

  return (
    <div className={className}>
      <div className="w-full bg-black text-white py-y px-2 relative">
        <div className="border-b-2 border-white mt-[130px] font-bold mb-4 text-center text-4xl py-20 mx-20">
          Logo Here
        </div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 border-b-2 border-gray-600 py-8">
          {mappedData}
          {FooterEmail()}
        </div>
      </div>
    </div>
  );
}
