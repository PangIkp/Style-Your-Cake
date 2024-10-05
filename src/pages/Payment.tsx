import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SummaryItem from "./Summary";
import { CartItemType } from "../components/CartContext";

interface Tambon {
  id: number;
  zip_code: number;
  name_th: string;
  name_en: string;
  amphure_id: number;
}

interface Amphure {
  id: number;
  name_th: string;
  name_en: string;
  province_id: number;
  tambon: Tambon[];
}

interface Province {
  id: number;
  name_th: string;
  name_en: string;
  geography_id: number;
  amphure: Amphure[];
}

const Payment: React.FC = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalWithVAT, setTotalWithVAT] = useState(0);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<Amphure | null>(null);
  const [subdistricts, setSubdistricts] = useState<Tambon[]>([]);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState<Tambon | null>(null);
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
    province: '',
    district: '',
    subdistrict: '',
  });

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
    fetch("https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json")
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceId = parseInt(event.target.value);
    const selectedProvinceData = provinces.find((p) => p.id === provinceId) || null;
    setSelectedProvince(selectedProvinceData);
    setSelectedDistrict(null); // Reset district
    setSubdistricts([]); // Reset subdistricts
    setSelectedSubdistrict(null);
    setPostalCode(""); // Reset postal code

    // Validate province selection
    setErrors((prev) => ({ ...prev, province: selectedProvinceData ? "" : "Please select a province." }));
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectedProvince) {
      const districtId = parseInt(event.target.value);
      const selectedDistrictData = selectedProvince.amphure.find((d) => d.id === districtId) || null;
      setSelectedDistrict(selectedDistrictData);
      setSubdistricts(selectedDistrictData ? selectedDistrictData.tambon : []);
      setSelectedSubdistrict(null);
      setPostalCode("");

      // Validate district selection
      setErrors((prev) => ({ ...prev, district: selectedDistrictData ? "" : "Please select a district." }));
    }
  };

  const handleSubdistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectedDistrict) {
      const subdistrictId = parseInt(event.target.value);
      const selectedSubdistrictData = selectedDistrict.tambon.find((t) => t.id === subdistrictId) || null;
      setSelectedSubdistrict(selectedSubdistrictData);
      setPostalCode(selectedSubdistrictData ? selectedSubdistrictData.zip_code.toString() : "");

      // Validate subdistrict selection
      setErrors((prev) => ({ ...prev, subdistrict: selectedSubdistrictData ? "" : "Please select a subdistrict." }));
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let formIsValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      province: '',
      district: '',
      subdistrict: '',
    };

    if (!firstName || !validateName(firstName)) {
      newErrors.firstName =
        "First name is required and should contain only letters";
        formIsValid = false;
    }

    if (!lastName || !validateName(lastName)) {
      newErrors.lastName =
        "Last name is required and should contain only letters";
        formIsValid = false;
    }

    if (!email || !validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
      formIsValid = false;
    }

    if (!phone || !validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number (10 digits)";
      formIsValid = false;
    }

    if (!selectedProvince) {
      newErrors.province = 'Please select a province';
      formIsValid = false;
    }

    if (!selectedDistrict) {
      newErrors.district = 'Please select a district';
      formIsValid = false;
    }

    if (!selectedSubdistrict) {
      newErrors.subdistrict = 'Please select a subdistrict';
      formIsValid = false;
    }


    setErrors(newErrors);

    if (formIsValid) {
      alert("Form is valid and ready to submit!");
      // ทำการ submit หรือดำเนินการต่อ
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
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="First name"
                    className="text-[12px] w-full border rounded rounded-[7px] p-3"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.firstName}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="Email address"
                    className="text-[12px] w-full border rounded rounded-[7px] p-3 mt-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="text-[12px] w-full border rounded rounded-[7px] p-3"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.lastName}
                    </p>
                  )}
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="text-[12px] w-full border rounded rounded-[7px] p-3 mt-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {errors.phone}
                    </p>
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
              <div className="flex flex-wrap -mx-2">
                {/* Column 1 */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
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
          <p className="text-red-500 text-[10px] mt-1">{errors.province}</p>
        )}
      </div>

      {/* Column 2 */}
      <div className="w-full sm:w-1/2 px-2 mb-4">
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
          <p className="text-red-500 text-[10px] mt-1">{errors.district}</p>
        )}
      </div>

      {/* Column 1 */}
      <div className="w-full sm:w-1/2 px-2 mb-4">
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
          <p className="text-red-500 text-[10px] mt-1">{errors.subdistrict}</p>
        )}
      </div>

      {/* Postal Code */}
      <div className="w-full sm:w-1/2 px-2 mb-4">
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
                <div className="content-center space-y-4 bg-[#FFCCD2] bg-opacity-50 p-[60px] rounded rounded-[20px] text-center">
                  <img
                    src="/QrScan.png"
                    alt="Thai QR Payment"
                    className="w-full"
                  />
                  <p className="font-medium">Pay by scanning here!</p>
                </div>

                <div className="content-center space-y-4 bg-[#FFCCD2] bg-opacity-50 p-[60px] rounded rounded-[20px] text-center">
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

          <button
            className="mt-5 mb-5 bg-gradient-to-b from-[#D63484] to-[#E06386] text-[14px] hover:from-[#D63484] hover:to-[#FFCCD2] text-white font-bold rounded-[20px] h-[40px] w-full"
            onClick={handleSubmit}
          >
            Confirm transection
          </button>
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
                <span className="text-[14px">300 THB</span>{" "}
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
