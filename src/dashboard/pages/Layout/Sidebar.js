import { useState } from "react";
import {
  FaTachometerAlt,
  FaWallet,
  FaUserFriends,
  FaChartLine,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/favicon.png";
import logo1 from "../../../assets/logo.png";
import { SwipeLeftAlt } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BarChartIcon from "@mui/icons-material/BarChart";
const menu = [
  { title: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
  // { title: "Top Up", icon: <DashboardIcon />, path: "/topup_data" },
  // { title: "Top Up Report", icon: <PhotoAlbumIcon />, path: "/activation" },
  { title: "Direct Team", icon: <PersonIcon />, path: "/referral" },
  { title: "Downline Team", icon: <PersonAddAlt1Icon />, path: "/downline" },
  // { title: "Profit Ratio", icon: <FaChartLine />, path: "/profit" },
  // {
  //   title: "Booster Income",
  //   icon: <CurrencyExchangeIcon />,
  //   path: "/income/roi",
  // },
  {
    title: "Referral Bonus",
    icon: <SignalCellularAltIcon />,
    path: "/income/direct",
  },

  {
    title: "Level Bonus",
    icon: <CurrencyExchangeIcon />,
    path: "/income/level",
  },
  {
    title: "ROI Bonus",
    icon: <CurrencyExchangeIcon />,
    path: "/income/roi",
  },
  {
    title: "Reward Bonus",
    icon: <CurrencyExchangeIcon />,
    path: "/income/reward",
  },
  {
    title: "Salary Bonus",
    icon: <CurrencyExchangeIcon />,
    path: "/income/salary",
  },
  // {
  //   title: "Withdrawal",
  //   icon: <AccountBalanceWalletIcon />,
  //   path: "/with",
  // },
  // { title: "Wallet Report", icon: <BarChartIcon />, path: "/withdrawal" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  const colorClasses = {
    cyan: "from-cyan-400 to-cyan-600",
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    green: "from-green-400 to-green-600",
    emerald: "from-emerald-400 to-emerald-600",
    yellow: "from-yellow-400 to-yellow-600",
    orange: "from-orange-400 to-orange-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
  };
  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 
bg-gradient-to-r from-[#0a1219] via-[#0d1519] to-[#0a1219] 
border-b border-cyan-400/30 px-2  flex items-center justify-between 
shadow-lg shadow-cyan-400/20 backdrop-blur-md">

        {/* Left Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="relative text-cyan-400 text-xl p-2 rounded-lg 
    hover:bg-cyan-400/10 transition-all duration-300 group"
        >
          <FaBars className="group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-cyan-400/20 rounded-lg 
    opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
        </button>

        {/* ✅ Right Logo */}
        <div className="flex justify-end">
          <img
            src={logo}
            alt="logo"
            className="w-[50%] h-12 object-contain"
          />
        </div>

      </div>


      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky lg:top-0 top-0 left-0 z-50 h-screen w-80
  bg-gradient-to-br from-[#0a1219] via-[#0d1519] to-[#0f1b21]
  text-white shadow-2xl shadow-cyan-400/20
  transform transition-transform duration-300 ease-out
  border-r border-cyan-400/20
  ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
  overflow-hidden`}
      >

        {/* Decorative background effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"></div>

        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent"></div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-cyan-400/20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Logo container with glow */}
              <div className="w-10 h-10 flex items-center justify-center ">
                <span className="text-white font-bold text-lg">
                  <img src={logo1} />
                </span>
              </div>
              {/* Pulsing ring */}
              {/* <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-ping opacity-20"></div> */}
            </div>

            <div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 font-bold text-lg block">
                <img src={logo} className="!w-[50%]" />
              </span>
              <span className="text-gray-400 text-xs">Your are live</span>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-lg hover:bg-cyan-400/10"
          >
            <KeyboardDoubleArrowLeftIcon />
          </button>
        </div>

        {/* User Info Card (Optional) */}
        <div className="relative z-10 mx-3 mt-4 mb-2 p-4 rounded-xl bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border border-cyan-400/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <PersonIcon className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Welcome Back</p>
              <p className="text-cyan-400 text-xs">Premium Member</p>
            </div>
          </div>
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/20 rounded-tr-xl"></div>
        </div>

        {/* Menu Navigation */}
        <nav className="relative z-10 px-3 py-4 space-y-1 overflow-y-auto h-[calc(100vh-280px)] custom-scrollbar">
          {menu.map((item, i) => {
            const isActive = active === item.title;
            return (
              <div
                key={i}
                onClick={() => {
                  setActive(item.title);
                  navigate(item.path);
                  setOpen(false);
                }}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                  ${isActive
                    ? "bg-gradient-to-r from-cyan-900/40 to-blue-900/30 text-white shadow-lg shadow-cyan-400/20"
                    : "hover:bg-white/5 text-gray-300 hover:text-white"
                  }`}
              >
                {/* Active indicator line */}
                {isActive && (
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-gradient-to-b ${colorClasses[item.color]}`}></div>
                )}

                {/* Icon container */}
                <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300
                  ${isActive
                    ? `bg-gradient-to-br ${colorClasses[item.color]} shadow-lg`
                    : "bg-white/5 group-hover:bg-white/10"
                  }`}
                >
                  <span className={`text-lg ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                    {item.icon}
                  </span>

                  {/* Icon glow effect when active */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[item.color]} rounded-lg opacity-50 blur-md`}></div>
                  )}
                </div>

                {/* Menu text */}
                <span className={`font-medium text-sm transition-all duration-300 ${isActive ? "translate-x-1" : ""}`}>
                  {item.title}
                </span>

                {/* Hover indicator */}
                {!isActive && (
                  <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  </div>
                )}

                {/* Background shimmer on hover */}
                {!isActive && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout Section */}
        <div className="relative z-10 mt-auto p-4 border-t border-cyan-400/20 bg-gradient-to-r from-red-900/10 to-rose-900/10">
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="group relative flex items-center gap-3 px-4 py-3 w-full rounded-xl
            text-red-400 hover:text-white transition-all duration-300 overflow-hidden
            border border-red-400/30 hover:border-red-400/50"
          >
            {/* Button background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-rose-600/20 transition-all duration-300"></div>

            {/* Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-red-900/20 group-hover:bg-red-600/30 transition-all duration-300">
              <FaSignOutAlt className="text-lg" />
            </div>

            {/* Text */}
            <span className="relative font-semibold text-sm">Logout</span>

            {/* Hover shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </div>
          </button>
        </div>

        {/* Version info */}
        <div className="relative z-10 px-4 py-2 text-center">
          <p className="text-gray-500 text-xs">Version 1.0.0</p>
        </div>
      </aside>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(13, 21, 25, 0.3);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22d3ee, #06b6d4);
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #06b6d4, #0891b2);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
