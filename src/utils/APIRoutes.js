export const domain = "http://10.15.40.149:9010";
// export const domain = "https://backend.fastro.info";
export const frontend = "https://trade4you.co.com";
// export const frontend = "https://hyperchainx.live";
export const dollar = "$";
export const support_mail = "support@trade4you.co.com";
// export const withdrawalAddress = "0xc50222c8aC657ff4203C306dD01ca3e3B90A451f"
export const withdrawalAddress = "0xa8656e6ae3b543129b614287cd2ebb687c28d8b6";
export const depositAddress = "0xE7eE24e4e544686b7474E50993447515bBE14004";
export const endpoint = {

  login_api: `${domain}/api/v9/member-login`,
  registration_api: `${domain}/api/v9/member-registration`,
  get_spon_name: `${domain}/api/v9/member-name-by-cust-id`,
  profile_api: ` ${domain}/api/v9/member-profile-details`,
  user_dashboard_api: `${domain}/api/v9/member-dashboard-details`,
  get_topup_qr: `${domain}/api/v9/get-topup-qr`,
  member_self_topup: `${domain}/api/v9/member-self-topup`,
  get_report_details: `${domain}/api/v9/get-report-details`,
  team_data_api: `${domain}/api/v9/get-member-downline`,
  member_fund_transfer: `${domain}/api/v9/member-fund-transfer-p2p`,

  //////////////////////////////////////////////////

  update_popup_status: `${domain}/api/v9/udpate-popup-status`,

  general_contact_address_api: `${domain}/api/v9/get-api-general-data`,
  paying_dummy_api: `${domain}/api/v9/activation-dummy-request`,
  team_topup_data: `${domain}/api/v9/get-team-topup-details`,
  paying_api: `${domain}/api/v9/activation-request`,
  roi_income_api: `${domain}/api/v9/get-roi-income-details`,
  admin_roi_income_api: `${domain}/api/v9/admin-income-report`,
  admin_fund_memeber: `${domain}/api/v9/admin-fund-member-topup`,
  topup_report: `${domain}/api/v9/topup-report`,
  admin_topup_report: `${domain}/api/v9/admin-topup-report`,
  user_details: `${domain}/api/v9/user-invester-details`,
  admin_user_details: `${domain}/api/v9/admin-invester-details`,
  customer_api: `${domain}/api/v9/get-user-name-by-customer-id`,
  add_wallet_address: `${domain}/api/v9/add-user-wallet-address`,
  update_user_password: `${domain}/api/v9/update-user-password`,
  add_user_withdrawal: `${domain}/api/v9/user-withdrawal-request`,
  withdrawal_list: `${domain}/api/v9/get-withdrawal-details`,
  admin_withdrawal_list: `${domain}/api/v9/admin-withdrawal-report`,
  withdrawal_request: `${domain}/api/v9/withdrawal-request-approval`,
  admin_upload_qr: `${domain}/api/v9/admin-upload-qr`,
  get_admin_upload_qr: `${domain}/api/v9/get-admin-upload-qr`,
  get_user_upload_qr: `${domain}/api/v9/get-user-upload-qr`,
  add_user_fund_request: `${domain}/api/v9/add-user-fund-request`,
  get_user_fund_request: `${domain}/api/v9/get-user-fund-request`,
  admin_paying_report: `${domain}/api/v9/get-admin-fund-request`,
  withdrawal_api: `${domain}/api/v9/withdrawal-req`,
  wallet_user_data: `${domain}/api/v9/get-wallet-data-user`,

  change_status_fund: `${domain}/api/v9/change-fund-request_admin`,
  direct_referral_user: `${domain}/api/v9/user-direct-referral-details`,
  team_downline_user: `${domain}/api/v9/user-team-downline-details`,
  team_downline_user_filterwise: `${domain}/api/v9/user-team-downline-details-filterwise`,
  update_user_profile: `${domain}/api/v9/update-profile`,
  topup_team_id_by_leader: `${domain}/api/v9/topup-team-id-by-leader`,
  forgot_email: `${domain}/api/v9/password-on-mail`,
  check_real_transaction: `${domain}/api/v9/check-real-transactoin`,
  set_withdrawal_limit: `${domain}/api/v9/update-withdrawal-limit`,
  handle_cp_fun: `${domain}/api/v9/handle-cp-status`,
  compounding: `${domain}/api/v9/compound-wallet`,

  //admin
  admin_dashboard: `${domain}/api/v9/get-admin-dashboard-data`,
  topup_api: `${domain}/api/v9/admin-topup-id`,
  cp_topup_api: `${domain}/api/v9/team-topup-fund-added-by-admin`,
  get_topup_api: `${domain}/api/v9/get-topup-details-admin`,
  change_topup_status: `${domain}/api/v9/change-topup-status`,
  user_data: `${domain}/api/v9/get-user-details-admin`,
  level_bonus_data: `${domain}/api/v9/get-roi-income-details-admin`,
  get_downline_team: `${domain}/api/v9/get-downline-team`,
  get_upline_team: `${domain}/api/v9/get-upline-team`,
  inr_payout_data: `${domain}/api/v9/get-withdrawal-details-admin`,
  very_fy_OTP: `${domain}/api/v9/verify-otp`,
};
