import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = ({
  firstName,
  rating,
  date,
  comment,
}: {
  firstName: any;
  rating: any;
  date: any;
  comment: any;
}) => {
  const formattedDate = (date: string) =>
    date
      .split(" ")
      .slice(1, 4)
      .reverse()
      .join(" ")
      .replace(/(\w+) (\w+) (\w+)/, "$2 $3 $1");
  return (
    <div>
      <div className="mb-9 mr-9 pl-8 pr-8 pt-8 pb-8 border shadow-md w-[400px]">
        <div className="mb-6 flex justify-between">
          <img src="/Customer.png" alt="Customer" className="h-9"></img>

          {/* Name of Customer */}
          <div className="ml-2">
            <p className="text-[13px]">{firstName}</p>
            <p className="text-[12px] flex gap-x-[4px]">
              {" "}
              {Array(rating)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-[#FFD700]"
                    fill="#FFD700"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.289a1 1 0 00.95.69h5.564c.969 0 1.371 1.24.588 1.81l-4.497 3.282a1 1 0 00-.364 1.118l1.716 5.29c.3.921-.755 1.688-1.539 1.118l-4.497-3.282a1 1 0 00-1.176 0l-4.497 3.282c-.784.57-1.838-.197-1.539-1.118l1.716-5.29a1 1 0 00-.364-1.118L2.23 10.716c-.784-.57-.38-1.81.588-1.81h5.564a1 1 0 00.95-.69l1.716-5.289z"
                    />
                  </svg>
                ))}
            </p>
          </div>

          {/* Date of Customer response */}
          <div className="ml-[125px] flex items-center">
            <p className="text-[13px] font-light">{formattedDate(date)}</p>
          </div>

          <div className="ml-1">
            <p className="bg-pink-500 h-9 w-[3px]"></p>
          </div>
        </div>

        {/* Customer response */}
        <div className="">
          <p className="text-[13px] font-light">{comment}</p>
        </div>

        {/* Admin response */}
        <div className="mx-auto mt-6 items-center p-4 border shadow-md rounded-lg w-[335px]">
          <div className="flex items-center">
            <img src="/Message.png" alt="Message" className="h-5"></img>

            <div className="ml-2">
              <p className="text-[13px]">Admin</p>
            </div>
          </div>

          <div className="ml-7">
            <p className="text-[13px] font-light">
              Thank you for supporting our store!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
