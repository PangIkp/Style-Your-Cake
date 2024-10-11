import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SummaryItem from "./Summary";
import { CartItemType, OrderSummaryType, Province, Amphure, Tambon, ReviewType } from "../interfaces";
import { useMainStore } from "../mainStore";

const Payment: React.FC = () => {
  const { setOrderDetail, setItems:clearItems, addOrderDetail, reviewDetailList, addReviewDetail } = useMainStore();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalWithVAT, setTotalWithVAT] = useState(0);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    null
  );
  const [selectedDistrict, setSelectedDistrict] = useState<Amphure | null>(
    null
  );
  const [subdistricts, setSubdistricts] = useState<Tambon[]>([]);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState<Tambon | null>(
    null
  );
  const [postalCode, setPostalCode] = useState<string>("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    district: "",
    subdistrict: "",
  });

  const generateOrderID = () => {
    const prefix = "OR"; // คำเริ่มต้นสำหรับ Order ID
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // สุ่มตัวเลข 5 หลัก
    return `${prefix}${randomNumber}`;
  };

  useEffect(() => {
    // ตรวจสอบว่า location.state มีข้อมูลหรือไม่
    if (location.state) {
      const { items, subtotal, totalWithVAT } = location.state;
      setItems(items);
      setSubtotal(subtotal);
      setTotalWithVAT(totalWithVAT);
    }
  }, [location.state]);

  // ดึงข้อมูลจากลิ้ง JSON
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const provinceId = parseInt(event.target.value);
    const selectedProvinceData =
      provinces.find((p) => p.id === provinceId) || null;
    setSelectedProvince(selectedProvinceData);
    setSelectedDistrict(null); // Reset district
    setSubdistricts([]); // Reset subdistricts
    setSelectedSubdistrict(null);
    setPostalCode(""); // Reset postal code

    // Validate province selection
    setErrors((prev) => ({
      ...prev,
      province: selectedProvinceData ? "" : "Please select a province.",
    }));
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (selectedProvince) {
      const districtId = parseInt(event.target.value);
      const selectedDistrictData =
        selectedProvince.amphure.find((d) => d.id === districtId) || null;
      setSelectedDistrict(selectedDistrictData);
      setSubdistricts(selectedDistrictData ? selectedDistrictData.tambon : []);
      setSelectedSubdistrict(null);
      setPostalCode("");

      // Validate district selection
      setErrors((prev) => ({
        ...prev,
        district: selectedDistrictData ? "" : "Please select a district.",
      }));
    }
  };

  const handleSubdistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (selectedDistrict) {
      const subdistrictId = parseInt(event.target.value);
      const selectedSubdistrictData =
        selectedDistrict.tambon.find((t) => t.id === subdistrictId) || null;
      setSelectedSubdistrict(selectedSubdistrictData);
      setPostalCode(
        selectedSubdistrictData
          ? selectedSubdistrictData.zip_code.toString()
          : ""
      );

      // Validate subdistrict selection
      setErrors((prev) => ({
        ...prev,
        subdistrict: selectedSubdistrictData
          ? ""
          : "Please select a subdistrict.",
      }));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/; // เบอร์โทรควรเป็นตัวเลข 10 หลัก
    return phoneRegex.test(phone);
  };

  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-z]+$/; // ชื่อควรเป็นตัวอักษรเท่านั้น
    return nameRegex.test(name);
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let formIsValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      province: "",
      district: "",
      subdistrict: "",
    };

    // Validate First Name
    if (!firstName || !validateName(firstName)) {
      newErrors.firstName = "First name is required and must be letters only.";
      formIsValid = false;
    }

    // Validate Last Name
    if (!lastName || !validateName(lastName)) {
      newErrors.lastName = "Last name is required and must be letters only.";
      formIsValid = false;
    }

    // Validate Email
    if (!email || !validateEmail(email)) {
      newErrors.email = "A valid email is required.";
      formIsValid = false;
    }

    // Validate Phone
    if (!phone || !validatePhone(phone)) {
      newErrors.phone = "A valid 10-digit phone number is required.";
      formIsValid = false;
    }

    // Validate Province
    if (!selectedProvince) {
      newErrors.province = "Please select a province.";
      formIsValid = false;
    }

    // Validate District
    if (!selectedDistrict) {
      newErrors.district = "Please select a district.";
      formIsValid = false;
    }

    // Validate Subdistrict
    if (!selectedSubdistrict) {
      newErrors.subdistrict = "Please select a subdistrict.";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      // ส่งข้อมูลไปยังหน้า Order
      alert("We have received your order!");

      console.log("Form submitted successfully!", {
      firstName,
      lastName,
      email,
      phone,
      selectedProvince,
      selectedDistrict,
      selectedSubdistrict,
      postalCode,
      items, // ส่งข้อมูลสินค้าไปด้วย
      subtotal,
      totalWithVAT
      });

      const orderDetail: OrderSummaryType = {
        orderId: generateOrderID(),
        firstName,
        lastName,
        email,
        phone,
        address: {
          province: selectedProvince,
          district: selectedDistrict,
          subdistrict: selectedSubdistrict,
          postalCode,
        },
        items, // ส่งข้อมูลสินค้าไปด้วย
        subtotal,
        totalWithVAT,
      };
      const reviewDetail : ReviewType = {
        orderId: orderDetail.orderId,
        firstName,
        rating: 0,
        comment: "",
        date: "",
      }
  
      // อัพเดต orderDetail ใน store
      // setOrderDetail(orderDetail);
      clearItems([]);
      addOrderDetail(orderDetail);
      addReviewDetail(reviewDetail);
      navigate("/order");
    }
  };

  return (
    <div>
      <div className="mt-[140px]">
        <div className="fixed top-0 z-10 w-full ">
          <NavBar onSearch={() => {}} />
        </div>
      </div>

      <div className="flex space-x-10 pl-20 pr-20 pt-10 pb-10">
        <div className="w-3/5">
          {/* ข้อมูลสำหรับการกรอกข้อมูลการจัดส่งและการชำระเงิน */}
          <div className="">
            <h1 className="text-[26px] font-semibold mb-8">Checkout</h1>
            <div className="mb-5 border border-[0.5px] border-solid border-gray-400 w-full h-[0.5px]" />

            <div className="flex items-center space-x-2 mb-5">
              <img src="/Shipping.png" alt="Shipping" className="w-5"></img>
              <p className="font-semibold text-[15px]">Shipping Details</p>
            </div>

            <p className="font-medium text-[14px] mb-5">Customer Information</p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="text-[12px] border rounded-[7px] p-3"
                  />
                  {errors.firstName && (
                    <span
                      style={{
                        color: "red",
                        marginTop: "5px",
                        fontSize: "10px",
                      }}
                    >
                      {errors.firstName}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="text-[12px] border rounded-[7px] p-3"
                  />
                  {errors.lastName && (
                    <span
                      style={{
                        color: "red",
                        marginTop: "5px",
                        fontSize: "10px",
                      }}
                    >
                      {errors.lastName}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-[12px] border rounded-[7px] p-3"
                  />
                  {errors.email && (
                    <span
                      style={{
                        color: "red",
                        marginTop: "5px",
                        fontSize: "10px",
                      }}
                    >
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-[12px] border rounded-[7px] p-3"
                  />
                  {errors.phone && (
                    <span
                      style={{
                        color: "red",
                        marginTop: "5px",
                        fontSize: "10px",
                      }}
                    >
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="font-medium text-[14px] mt-5 mb-5">
              Customer Address
            </p>

            <textarea
              id="message"
              className="w-full mb-2 p-3 border text-[12px] rounded-[7px]"
              maxLength={100}
              placeholder="Address Detail such as House number, Apartment name, Condo, Village name "
            ></textarea>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <select
                    className="text-gray-500 border text-[12px] rounded-[7px] p-3 w-full"
                    onChange={handleProvinceChange}
                    value={selectedProvince ? selectedProvince.id : ""}
                  >
                    <option value="">Province</option>
                    {provinces.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name_th}
                      </option>
                    ))}
                  </select>
                  {errors.province && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.province}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <select
                    className="text-gray-500 border text-[12px] rounded-[7px] p-3 w-full"
                    onChange={handleDistrictChange}
                    value={selectedDistrict ? selectedDistrict.id : ""}
                    disabled={!selectedProvince}
                  >
                    <option value="">District</option>
                    {selectedProvince &&
                      selectedProvince.amphure.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.name_th}
                        </option>
                      ))}
                  </select>
                  {errors.district && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.district}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <select
                    className="text-gray-500 border text-[12px] rounded-[7px] p-3 w-full"
                    onChange={handleSubdistrictChange}
                    value={selectedSubdistrict ? selectedSubdistrict.id : ""}
                    disabled={!selectedDistrict}
                  >
                    <option value="">Subdistrict</option>
                    {subdistricts.map((subdistrict) => (
                      <option key={subdistrict.id} value={subdistrict.id}>
                        {subdistrict.name_th}
                      </option>
                    ))}
                  </select>
                  {errors.subdistrict && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.subdistrict}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <select
                    className="text-gray-500 border text-[12px] rounded-[7px] p-3 w-full"
                    disabled
                  >
                    <option>{postalCode || "Postal code"}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="">
              <div className="mb-5 mt-5 border border-[0.5px] border-solid border-gray-400 w-full h-[0.5px]" />
              <div className="flex items-center space-x-2 mb-5">
                <img src="/Payment.png" alt="Shipping" className="w-5"></img>
                <p className="font-semibold text-[15px]">Payment Method</p>
              </div>

              <div className="flex space-x-4">
                <div className="content-center space-y-4 bg-[#FFCCD2] bg-opacity-50 p-[80px] rounded rounded-[20px] text-center">
                  <img
                    src="/QrScan.png"
                    alt="Thai QR Payment"
                    className="w-full"
                  />
                  <p className="font-medium">Pay by scanning here!</p>
                </div>

                <div className="content-center space-y-4 bg-[#FFCCD2] bg-opacity-50 p-[80px] rounded rounded-[20px] text-center">
                  <img
                    src="/QrLine.png"
                    alt="Send proof of payment online"
                    className="w-full"
                  />
                  <p className="font-medium">Send proof of payment online</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[12px] mt-8">
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="ml-2">
              <p>
                1. Gravida aliquam sit laoreet sem nunc morbi gravida purus
                lacinia.{" "}
              </p>
              <p>2. Vel tortor sapien eu dignissim elit nullam. </p>
              <p>
                3. Elementum risus nulla arcu aliquam. Sollicitudin urna nisi
                duis congue mollis viverra.{" "}
              </p>
              <p>
                4. Sapien quis in massa vel nibh. Eu est arcu eget viverra
                aenean quisque pretium.{" "}
              </p>
              <p>5. Sapien ac nisl sed leo.</p>
            </div>
          </div>

          <Link to="/order">
            <button
              className="mt-5 mb-5 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[40px] w-full"
              onClick={handleSubmit}
            >
              Confirm transection
            </button>
          </Link>
        </div>

        {/*ข้อมูลจากตระกร้าสินค้า*/}
        <div className="w-2/5">
          <div className="w-full h-auto border border-gray-300 shadow-md rounded p-5 sticky top-10">
            <h2 className="font-semibold text-[16px]">In your Cart</h2>
            <div className="mt-2 bg-[#E06386] p-1 w-[95px] rounded text-center">
              <p className="text-white text-[13px] font-medium">
                Quantity :{" "}
                {items.reduce(
                  (acc: number, item: CartItemType) => acc + item.quantity,
                  0
                )}
              </p>
            </div>

            <div className="mt-4">
              {items.map(
                (
                  item: CartItemType // Specify the type for item
                ) => (
                  <SummaryItem key={item.id} {...item} />
                )
              )}
            </div>
            <div className="mt-10 space-y-2">
              <p className="font-semibold text-[15px]">Price</p>
              <div className="flex justify-between mb-2">
                <span className="text-[14px]">Subtotal</span>
                <span className="text-[14px]">{subtotal} THB</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-[14px]">Shipping fee</span>
                <span className="text-[14px]">300 THB</span>{" "}
                {/* Adjust if necessary */}
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-[14px]">Vat</span>
                <span className="text-[14px]">7%</span>
              </div>

              <div className="border border-[0.5px] border-solid border-[#666666] border-opacity-50 w-full h-[0.5px]" />

              <div className="flex justify-between mb-2">
                <span className="font-semibold text-[15px]">Total</span>
                <span className="font-semibold text-[14px]">
                  {totalWithVAT} THB
                </span>{" "}
                {/* Display total */}
              </div>

              <div className="border border-[0.5px] border-solid border-[#666666] border-opacity-50 w-full h-[0.5px]" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Payment;
