import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../Shared/Loader";
import { apiConnectorGet, apiConnectorPost } from "../../utils/APIConnector";
import { endpoint } from "../../utils/APIRoutes";
import { enCryptData } from "../../utils/Secret";

function Payout() {
  // const [walletAddress, setWalletAddress] = useState("");
  const [data, setData] = useState("");
  const [loding, setLoding] = useState(false);
  const location = useLocation();

  const [userData, setUserData] = useState();

  // console.log(userData, "wghsfhdsxgqf");

  const params = new URLSearchParams(location?.search);
  const IdParam = params?.get("token");
  const base64String = atob(IdParam);
  const withdrawalType = location.state?.type;
  const fk = useFormik({
    initialValues: {
      amount: "",
      walletAddress: userData?.lgn_wallet_add || "",
    },
    enableReinitialize: true,
  });

  async function Payout() {
    const reqbody = {
      wallet_add: String(fk.values.walletAddress)?.trim(),
      amount: Number(fk.values.amount)?.toFixed(3),
      wallet_type:
        withdrawalType === "jackpot" ? 3 : withdrawalType === "wingo" ? 4 : 2,
    };

    setLoding(true);

    try {
      const res = await apiConnectorPost(
        endpoint?.withdrawal_api,
        {
          payload: enCryptData(reqbody),
        },
        base64String
      );
      setData(res?.data?.result?.[0]);
      Swal.fire({
        title:
          String(res?.data?.success) === "true" ? "🎉 Congratulations!" : "",
        html:
          String(res?.data?.success) === "true"
            ? `
            <p style="font-size:14px; margin-bottom:8px;">${res?.data?.message}</p>
          `
            : `<p style="font-size:14px; margin-bottom:8px;">${res?.data?.message}</p>`,
        icon: String(res?.data?.success) === "true" ? "success" : "",
        confirmButtonColor: "black",
      });
      fk.handleReset();
      if (String(res?.data?.success) === "true") {
        GetWalletUserData();
      }
    } catch (e) {
      console.log(e);
    }
    setLoding(false);
  }

  async function GetWalletUserData() {
    setLoding(true);
    try {
      const res = await apiConnectorGet(
        endpoint?.wallet_user_data,
        {},
        base64String
      );
      setUserData(res?.data?.result?.[0]);
      // toast(res?.data?.message);
    } catch (e) {
      console.log(e);
    }
    setLoding(false);
  }

  useEffect(() => {
    GetWalletUserData();
  }, []);

  // const { data: profile_data } = useQuery(
  //   ["profile_api"],
  //   () => apiConnectorGetWithoutToken(endpoint?.profile_api,{},base64String),
  //   {
  //     refetchOnMount: false,
  //     refetchOnReconnect: false,
  //     retry: false,
  //     retryOnMount: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );
  // const profile = profile_data?.data?.result || [];
  // console.log(userData);

  const { data: profile, refetch: refetchProfile } = useQuery(
    // Added refetch
    ["get_profile"],
    () => apiConnectorGet(endpoint?.profile_api),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const user_profile = profile?.data?.result?.[0] || [];

  return (
    <>
      <Loader isLoading={loding} />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center py-8">
        <div className="w-full max-w-md bg-gradient-to-br from-[#0a1219] via-[#0d1519] to-[#0f1b21] border border-red-400/30 rounded-2xl p-8 shadow-2xl shadow-red-400/20 relative overflow-hidden">

          {/* Animated background effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-rose-500/5 rounded-full blur-2xl"></div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-red-400/20 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-red-400/10 rounded-bl-2xl"></div>

          {/* Accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 via-rose-500 to-transparent"></div>

          {/* Content Container */}
          <div className="relative z-10">

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400/20 to-rose-500/10 flex items-center justify-center border border-red-400/30">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-red-400 to-rose-500 text-2xl font-bold">
                    Withdrawal
                  </h2>
                  <p className="text-gray-400 text-xs">Request payout from wallet</p>
                </div>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                <span className="text-gray-400 text-xs">Secure Transaction</span>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent"></div>
            </div>

            {/* Wallet Balance Display Card */}
            <div className="mb-6 bg-gradient-to-br from-green-950/40 to-emerald-900/30 rounded-xl p-5 border border-green-400/30 relative overflow-hidden group">
              {/* Background shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Available Balance
                  </label>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-emerald-500">
                    ${Number(user_profile?.jnr_curr_wallet || 0).toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">USD</span>
                </div>

                {/* Mini balance indicator */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enter Amount Section */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-gray-300 text-sm mb-3 font-medium">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Withdrawal Amount
              </label>



              <div className="relative group">
                <input
                  placeholder="0.00"
                  id="amount"
                  name="amount"
                  value={fk.values.amount}
                  onChange={fk.handleChange}
                  className="relative z-10 w-full px-4 py-4 rounded-lg 
    bg-gradient-to-r from-blue-950/40 to-indigo-900/30 
    text-white text-lg border-2 border-blue-400/30 
    focus:border-blue-400 focus:outline-none 
    transition-all duration-300 font-semibold 
    placeholder:text-gray-500"
                />

                {/* USDT label */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium pointer-events-none">
                  USDT
                </div>

                {/* ✅ Glow Fix */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 
  rounded-lg opacity-0 group-focus-within:opacity-20 blur 
  transition-opacity duration-300 pointer-events-none"></div>
              </div>


              {/* Quick amount buttons */}
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[25, 50, 100, 'Max'].map((amt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (amt === 'Max') {
                        fk.setFieldValue('amount', user_profile?.jnr_curr_wallet || 0);
                      } else {
                        fk.setFieldValue('amount', amt);
                      }
                    }}
                    className="px-3 py-2 rounded-lg bg-red-900/20 border border-red-400/20 text-red-300 text-xs font-semibold hover:bg-red-900/40 hover:border-red-400/40 transition-all duration-200"
                  >
                    {amt === 'Max' ? 'Max' : `$${amt}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Warning Notice */}
            <div className="mb-6 flex items-start gap-3 bg-amber-950/30 border border-amber-400/30 rounded-lg p-4">
              <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-amber-300 text-xs font-semibold mb-1">Important Notice</p>
                <p className="text-amber-400/80 text-xs leading-relaxed">
                  Withdrawal requests are processed within 24-48 hours. Minimum withdrawal amount is $10.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={Payout}
              className="relative w-full py-4 rounded-xl font-bold text-base overflow-hidden group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>

              {/* Button glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Request Withdrawal
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </div>
            </button>

            {/* Processing info */}
            <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-xs">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secured with SSL encryption</span>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-1 h-1 bg-red-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute bottom-32 right-16 w-1 h-1 bg-rose-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-red-500 rounded-full opacity-60 animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <style jsx>{`
      .bg-size-200 {
        background-size: 200% 100%;
      }
      .bg-pos-0 {
        background-position: 0% 0%;
      }
      .bg-pos-100 {
        background-position: 100% 0%;
      }
    `}</style>
    </>
  );
}
export default Payout;
