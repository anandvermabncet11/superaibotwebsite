// src/routes/routes.jsx
import Dashboard from "../dashboard/Dashboard";
import Activation from "../dashboard/pages/Activation";
import ClaimTopUp from "../dashboard/pages/ClaimTopUp";
import Fund from "../dashboard/pages/Fund/Fund";
import FundTransfer from "../dashboard/pages/Fund/Transfer";
import Booster from "../dashboard/pages/income/Booster";
import Direct from "../dashboard/pages/income/Direct";
import Level from "../dashboard/pages/income/Level";
import Rank from "../dashboard/pages/income/Rank";
import Reward from "../dashboard/pages/income/Reward";
import ROI from "../dashboard/pages/income/ROI";
import ROIONROI from "../dashboard/pages/income/ROIONROI";
import MainLayout from "../dashboard/pages/Layout/MainLayout";
import Downline from "../dashboard/pages/network/Downline";
import JoinMember from "../dashboard/pages/network/JoinMember";
import Payout from "../dashboard/pages/Payout";
import Profile from "../dashboard/pages/Profile";
import TeamActivation from "../dashboard/pages/TeamActivation";
import Team from "../dashboard/pages/TeamTree/Team";
import TopupWithContWithoutPull from "../dashboard/pages/Topup/TopupWithContWithoutPull";
import Wallet from "../dashboard/pages/Wallet";
import Withdrawal from "../dashboard/pages/Withdrawal";

export const routes = [
  {
    path: "/dashboard",
    element: (
      <MainLayout>
        <Dashboard />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/claim_topup",
    element: (
      <MainLayout>
        <ClaimTopUp />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/with",
    element: (
      <MainLayout>
        <Payout />{" "}
      </MainLayout>
    ),
  },
  // {
  //   path: '/topup_data',
  //   element: ( <MainLayout><ActivationWithFSTAndPull /> </MainLayout>),
  // },
  // {
  //   path: "/topup_data",
  //   element: (
  //     <MainLayout>
  //       <TopupUpWithoutPull />{" "}
  //     </MainLayout>
  //   ),
  // },
  {
    path: "/topup_data",
    element: (
      <MainLayout>
        <TopupWithContWithoutPull />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/fund",
    element: (
      <MainLayout>
        <Fund />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/income/level",
    element: (
      <MainLayout>
        <Level />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/income/booster",
    element: (
      <MainLayout>
        <Booster />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/income/roi",
    element: (
      <MainLayout>
        <ROI />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/income/roi-on-roi",
    element: (
      <MainLayout>
        <ROIONROI />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/income/direct",
    element: (
      <MainLayout>
        <Direct />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/activation",
    element: (
      <MainLayout>
        <Activation />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/team-activation",
    element: (
      <MainLayout>
        <TeamActivation />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/wallet",
    element: (
      <MainLayout>
        <Wallet />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <MainLayout>
        <Profile />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/withdrawal",
    element: (
      <MainLayout>
        <Withdrawal />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/fund-tranfer",
    element: (
      <MainLayout>
        <FundTransfer />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/referral",
    element: (
      <MainLayout>
        <JoinMember />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/team",
    element: (
      <MainLayout>
        <Team />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/downline",
    element: (
      <MainLayout>
        <Downline />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/income/reward",
    element: (
      <MainLayout>
        <Reward />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/income/rank",
    element: (
      <MainLayout>
        <Rank />{" "}
      </MainLayout>
    ),
  },
];
