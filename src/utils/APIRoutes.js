// export const domain = "http://192.168.18.214:9010";
export const domain = "https://backend.fastro.info";
export const frontend = "https://prochainx.biz";
// export const frontend = "https://hyperchainx.live";
export const dollar = "$";
export const support_mail = "support@prochainx.biz";
// export const withdrawalAddress = "0xc50222c8aC657ff4203C306dD01ca3e3B90A451f"
export const withdrawalAddress = "0xa8656e6ae3b543129b614287cd2ebb687c28d8b6";
export const depositAddress = "0xE7eE24e4e544686b7474E50993447515bBE14004";
export const endpoint = {
  update_popup_status: `${domain}/api/v8/udpate-popup-status`,

  registration_api: `${domain}/api/v8/auth-registration`,
  get_spon_name: `${domain}/api/v8/get-sponsor-name`,
  login_api: `${domain}/api/v8/user-login`,
  user_dashboard_api: `${domain}/api/v8/user-dashboard-data`,
  general_contact_address_api: `${domain}/api/v8/get-api-general-data`,
  paying_dummy_api: `${domain}/api/v8/activation-dummy-request`,
  team_data_api: `${domain}/api/v8/get-team-data`,
  topup_data: `${domain}/api/v8/get-topup-details`,
  team_topup_data: `${domain}/api/v8/get-team-topup-details`,
  paying_api: `${domain}/api/v8/activation-request`,
  profile_api: ` ${domain}/api/v8/get-profile-data`,
  roi_income_api: `${domain}/api/v8/get-roi-income-details`,
  admin_roi_income_api: `${domain}/api/v8/admin-income-report`,
  admin_fund_memeber: `${domain}/api/v8/admin-fund-member-topup`,
  topup_report: `${domain}/api/v8/topup-report`,
  admin_topup_report: `${domain}/api/v8/admin-topup-report`,
  user_details: `${domain}/api/v8/user-invester-details`,
  admin_user_details: `${domain}/api/v8/admin-invester-details`,
  customer_api: `${domain}/api/v8/get-user-name-by-customer-id`,
  add_wallet_address: `${domain}/api/v8/add-user-wallet-address`,
  update_user_password: `${domain}/api/v8/update-user-password`,
  add_user_withdrawal: `${domain}/api/v8/user-withdrawal-request`,
  withdrawal_list: `${domain}/api/v8/get-withdrawal-details`,
  admin_withdrawal_list: `${domain}/api/v8/admin-withdrawal-report`,
  withdrawal_request: `${domain}/api/v8/withdrawal-request-approval`,
  admin_upload_qr: `${domain}/api/v8/admin-upload-qr`,
  get_admin_upload_qr: `${domain}/api/v8/get-admin-upload-qr`,
  get_user_upload_qr: `${domain}/api/v8/get-user-upload-qr`,
  add_user_fund_request: `${domain}/api/v8/add-user-fund-request`,
  get_user_fund_request: `${domain}/api/v8/get-user-fund-request`,
  admin_paying_report: `${domain}/api/v8/get-admin-fund-request`,
  withdrawal_api: `${domain}/api/v8/withdrawal-req`,
  wallet_user_data: `${domain}/api/v8/get-wallet-data-user`,

  change_status_fund: `${domain}/api/v8/change-fund-request_admin`,
  direct_referral_user: `${domain}/api/v8/user-direct-referral-details`,
  team_downline_user: `${domain}/api/v8/user-team-downline-details`,
  team_downline_user_filterwise: `${domain}/api/v8/user-team-downline-details-filterwise`,
  update_user_profile: `${domain}/api/v8/update-profile`,
  topup_team_id_by_leader: `${domain}/api/v8/topup-team-id-by-leader`,
  forgot_email: `${domain}/api/v8/password-on-mail`,
  check_real_transaction: `${domain}/api/v8/check-real-transactoin`,
  set_withdrawal_limit: `${domain}/api/v8/update-withdrawal-limit`,
  handle_cp_fun: `${domain}/api/v8/handle-cp-status`,
  compounding: `${domain}/api/v8/compound-wallet`,

  //admin
  admin_dashboard: `${domain}/api/v8/get-admin-dashboard-data`,
  topup_api: `${domain}/api/v8/admin-topup-id`,
  cp_topup_api: `${domain}/api/v8/team-topup-fund-added-by-admin`,
  get_topup_api: `${domain}/api/v8/get-topup-details-admin`,
  change_topup_status: `${domain}/api/v8/change-topup-status`,
  user_data: `${domain}/api/v8/get-user-details-admin`,
  level_bonus_data: `${domain}/api/v8/get-roi-income-details-admin`,
  get_downline_team: `${domain}/api/v8/get-downline-team`,
  get_upline_team: `${domain}/api/v8/get-upline-team`,
  inr_payout_data: `${domain}/api/v8/get-withdrawal-details-admin`,
  very_fy_OTP: `${domain}/api/v8/verify-otp`,
};
