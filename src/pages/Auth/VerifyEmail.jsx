
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useVerifyEmailMutation } from "../../redux/features/authSlice";
// import toast from "react-hot-toast";

// export default function VerifyEmail() {
//   const [otp, setOtp] = useState(Array(6).fill(""));
//   const [isLoading, setIsLoading] = useState(false);
//   const inputRefs = useRef([]);
//   const navigate = useNavigate();

//   const [verifyEmail] = useVerifyEmailMutation();

//   useEffect(() => {
//     inputRefs.current = inputRefs.current.slice(0, 6);
//   }, []);

//   const handleChange = (index, value) => {
//     if (!/^\d*$/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value.substring(0, 1);
//     setOtp(newOtp);

//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData("text");
//     if (!/^\d+$/.test(pastedData)) return;

//     const digits = pastedData.substring(0, 6).split("");
//     const newOtp = [...otp];

//     digits.forEach((digit, index) => {
//       if (index < 6) newOtp[index] = digit;
//     });

//     setOtp(newOtp);

//     const lastFilledIndex = Math.min(digits.length - 1, 5);
//     if (lastFilledIndex < 5) {
//       inputRefs.current[lastFilledIndex + 1]?.focus();
//     } else {
//       inputRefs.current[5]?.focus();
//     }
//   };

//   const handleVerify = async () => {
//     setIsLoading(true);
//     try {
//       const res = await verifyEmail({ otp: String(otp) }).unwrap()


//       if(res?.success === true) {
//         toast.success(res?.message, 'otp verified successfully')
//         navigate(`/auth/reset-password`)
//       }

//       console.log(res?.message, 'forgot res')
//    } catch (error) {
//   const errorMessage =
//     error?.errors?.non_field_errors?.[0] || 
//     error?.data?.message ||                       
//     "Something went wrong";    
//     console.log(error, 'message')            

//   toast.error(errorMessage, "otp failed")
//   console.error("Otp failed:", errorMessage)
// }
//  finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-white">
 
//       {/* Verification Form Section */}
//       <div className="w-full  flex items-center justify-center bg-[#E6E6E6] p-4">
//         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
//           <div className="mb-6 flex items-center justify-center">
       
//             <h1 className="text-[30px] font-bold">Verify Email</h1>
//           </div>

//           <div className="mb-6">
//             <div className="flex justify-center space-x-2 md:space-x-4">
//               {[0, 1, 2, 3, 4, 5].map((index) => (
//                 <div key={index} className="w-10 h-10 md:w-12 md:h-12">
//                   <input
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     maxLength={1}
//                     value={otp[index]}
//                     onChange={(e) => handleChange(index, e.target.value)}
//                     onKeyDown={(e) => handleKeyDown(index, e)}
//                     onPaste={index === 0 ? handlePaste : undefined}
//                     className={`w-full h-full text-center text-lg font-semibold border ${
//                       otp[index] ? "border-gray-400" : "border-gray-300"
//                     } rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={handleVerify}
//             disabled={isLoading}
//             className="w-full py-3 bg-[#3698dc] hover:bg-red-600 text-white font-semibold rounded-full transition duration-200"
//           >
//             {isLoading ? "Verifying..." : "Verify"}
//           </button>

//           <p className="text-sm text-gray-500 text-center mt-4">
//             Please enter the OTP we have sent you in your email.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../../redux/features/authSlice";
import toast from "react-hot-toast";

export default function VerifyEmail() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const [verifyEmail] = useVerifyEmailMutation();

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(0, 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.substring(0, 6).split("");
    const newOtp = [...otp];

    digits.forEach((digit, index) => {
      if (index < 6) newOtp[index] = digit;
    });

    setOtp(newOtp);

    const lastFilledIndex = Math.min(digits.length - 1, 5);
    if (lastFilledIndex < 5) {
      inputRefs.current[lastFilledIndex + 1]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async () => {
    setIsLoading(true);
    try {
      const otpValue = otp.join(""); // ✅ 

      const res = await verifyEmail({ otp: Number(otpValue) }).unwrap();
      console.log(res, "res");

      if (res?.success === true) {
        toast.success(res?.message || "OTP verified successfully");
        localStorage.setItem("accessToken", res?.access_token);
        navigate("/auth/reset-password");
      } else {
        toast.error(res?.message || "OTP verification failed");
      }

      console.log(res?.message, "forgot res");
    } catch (error) {
      let errorMessage =
        error?.data?.message ||
        error?.errors?.non_field_errors?.[0] ||
        "Something went wrong";

      // ✅ Handle field-specific errors (like otp length)
      if (error?.data?.errors) {
        const fieldErrors = Object.values(error.data.errors)
          .flat()
          .join(", ");
        errorMessage = fieldErrors || errorMessage;
      }

      toast.error(errorMessage || "OTP verification failed");
      console.error("Otp failed:", errorMessage, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
      {/* Verification Form Section */}
      <div className="w-full flex items-center justify-center bg-[#E6E6E6] p-4">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
          <div className="mb-6 flex items-center justify-center">
            <h1 className="text-[30px] font-bold">Verify Email</h1>
          </div>

          <div className="mb-6">
            <div className="flex justify-center space-x-2 md:space-x-4">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-10 h-10 md:w-12 md:h-12">
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`w-full h-full text-center text-lg font-semibold border ${
                      otp[index] ? "border-gray-400" : "border-gray-300"
                    } rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleVerify}
            disabled={isLoading}
            className="w-full py-3 bg-[#3698dc] hover:bg-red-600 text-white font-semibold rounded-full transition duration-200"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Please enter the OTP we have sent you in your email.
          </p>
        </div>
      </div>
    </div>
  );
}
