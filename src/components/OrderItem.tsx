import { useMainStore } from "../mainStore";
import { useState } from "react";

const OrderSummary = () => {
  const { items, orderDetail, reviewDetail, setReviewDetail } = useMainStore();
  const [rating, setRating] = useState(0); // ใช้ state สำหรับคะแนน
  const [comment, setComment] = useState("");

  // ฟังก์ชันสำหรับตั้งค่าคะแนน
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  // ฟังก์ชันสำหรับจัดการการส่ง
  const handleSubmit = () => {
    if (rating > 0) {
      // console.log("Rating:", rating);
      // console.log("Comment:", comment);
      // สามารถเพิ่มโค้ดสำหรับการส่งข้อมูลได้ที่นี่
      setReviewDetail({
        firstName: orderDetail.firstName,
        rating,
        comment,
        date: new Date().toDateString(),
      });
    }
  };

  return (
    <div className="bg-white border shadow-lg rounded-[5px] mb-10">
      {/* Section for Order ID and Status */}
      <div className="p-3 pl-[60px] bg-[#FFE5E8] w-full">
        <div className="flex justify-between items-center">
          <div className="px-4 py-2 bg-[#FFFFFF] rounded-full">
            <h1 className="text-[13px]">Order ID : #123123123</h1>
          </div>
          <div className="flex justify-center items-center px-4 py-2 bg-[#FFFFFF] text-[13px] rounded-full mr-[60px]">
            <img
              src="/Delivered.png"
              className="w-[18px] mr-2"
              alt="Delivered Icon"
            ></img>
            Delivered
          </div>
        </div>
      </div>

      {/* Section for Order Items */}
      <div className="pl-[60px] pr-[60px] pb-6">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[120px,1fr] gap-8 items-center border-b py-2"
            >
              {/* คอลัมน์สำหรับรูปภาพ */}
              <div>
                <img
                  className="w-[120px] h-[150px] object-cover border rounded-[5px]"
                  src={item.image}
                />
              </div>

              {/* คอลัมน์สำหรับชื่อและราคา */}
              <div className="space-y-2">
                <p className="text-[13px] font-medium">{item.name}</p>
                <p className="text-[13px]">Qty : {item.quantity}</p>
                <p className="text-[13px]">Product ID : {item.productId}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-10 text-[13px]">No items in your order.</p>
        )}

        {/* Section for Total Price */}
        <div className="flex justify-end font-semibold text-[13px] mt-4">
          Total price : {orderDetail.totalWithVAT.toFixed(2)} THB
        </div>

        {/* Section for Review */}
        <div className="mt-4">
          <div className="flex items-center text-pink-600 text-[13px] font-semibold mb-2">
            <img src="/Review.png" className="mr-2 w-5" alt="Review Icon"></img>{" "}
            Review your order
          </div>

          {/* Section for Rating */}
          <div className="flex mb-[8px] gap-x-[4px] ">
            {reviewDetail.rating > 0
              ? Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      className={`w-4 h-4 cursor-pointer ${
                        index < reviewDetail.rating
                          ? "text-[#FFD700]"
                          : "text-gray-400"
                      }`}
                      fill={index < reviewDetail.rating ? "#FFD700" : "none"}
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
                  ))
              : Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      onClick={() => handleRating(index + 1)} // ให้ผู้ใช้กดเลือกดาว
                      className={`w-4 h-4 cursor-pointer ${
                        index < rating ? "text-[#FFD700]" : "text-gray-400"
                      }`}
                      fill={index < rating ? "#FFD700" : "none"}
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
          </div>

          <div className="flex justify-between items-center">
            <textarea
              className="w-[680px] p-2 border rounded text-[12px] text-[#666666]"
              placeholder="Write experience of your order."
              value={comment}
              disabled={reviewDetail.date !== ""}
              onChange={(e) => {
                setComment(e.target.value);
                // console.log(e.target.value)
              }}
            ></textarea>
            <button
              className="hover:bg-[#FFCCD2] px-4 py-4 ml-2 bg-pink-100 rounded flex items-center"
              onClick={handleSubmit}
              disabled={rating === 0} // ปุ่มถูกปิดใช้งานถ้าไม่ได้เลือกดาว
            >
              <img
                src="/Submit.png"
                className="w-5 h-5 mr-2"
                alt="Submit Icon"
              ></img>
              <span className="text-[12px]">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
