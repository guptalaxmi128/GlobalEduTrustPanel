import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import user from "../../assets/images/user/user-1.jpg";
import Sidebar from "../sidebar/Sidebar";
import All from "./all/All";
import Today from "./today/Today";
import { useGetAcceptRaiseFundQuery, useGetDonarQuery ,useGetNotificationQuery } from "../../services/signUpApi";

const Students = () => {
  const [value, setValue] = useState(0);
  const [notification, setNotification] = useState("");
  const [isNotification, setIsNotification] = useState(false);
  const [name,setName]=useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data,isSuccess}=useGetDonarQuery();
  // console.log(data)
  
  useEffect(()=>{
   if(data && isSuccess){
     setName(data.data.name)
   }
  })



  const { data :acceptRaiseFund,isSuccess:acceptRaiseFundIsSuccess}=useGetAcceptRaiseFundQuery();
  console.log("donar",acceptRaiseFund)

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Donar logout successfully!");
  };
 
  const { data: studentNotification, isSuccess: studentIsSuccess } =
  useGetNotificationQuery();

console.log(studentNotification);
console.log("data", notification);

useEffect(() => {
  if (studentNotification && studentIsSuccess && studentNotification.data) {
    setNotification(studentNotification.data);
  }
}, [studentNotification, studentIsSuccess]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Sidebar />
      <div
        class="flex flex-col justify-between min-h-screen"
        style={{ marginLeft: "248px" }}
      >
        <div>
          {/* <!-- BEGIN: Header --> */}
          {/* <!-- BEGIN: Header --> */}
          <div class="z-[9]" id="app_header">
            <div class="app-header z-[999] bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-700">
              <div class="flex justify-between items-center h-full">
                <div class="flex items-center md:space-x-4 space-x-4 rtl:space-x-reverse vertical-box">
                  <a
                    href="index.html"
                    class="mobile-logo xl:hidden inline-block"
                  >
                    {/* <img
                      src="assets/images/logo/logo-c.svg"
                      class="black_logo"
                      alt="logo"
                    />
                    <img
                      src="assets/images/logo/logo-c-white.svg"
                      class="white_logo"
                      alt="logo"
                    /> */}
                  </a>
                  <button class="smallDeviceMenuController open-sdiebar-controller hidden xl:hidden md:inline-block">
                    {/* <iconify-icon
                      class="leading-none bg-transparent relative text-xl top-[2px] text-slate-900 dark:text-white"
                      icon="heroicons-outline:menu-alt-3"
                    ></iconify-icon> */}
                    {/* <MenuIcon /> */}
                  </button>
                  <button class="sidebarOpenButton text-xl text-slate-900 dark:text-white !ml-0 hidden rtl:rotate-180">
                    <iconify-icon icon="ph:arrow-right-bold"></iconify-icon>
                  </button>
                  <button
                    class="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 focus:outline-none focus:shadow-none px-1 space-x-3
        rtl:space-x-reverse search-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <SearchIcon />
                    <span class="xl:inline-block hidden">Search...</span>
                  </button>
                </div>
                {/* <!-- end vertcial --> */}
                <div class="items-center space-x-4 rtl:space-x-reverse horizental-box">
                  <a href="index.html" class="leading-0">
                    <span class="xl:inline-block hidden">
                      <img
                        src="assets/images/logo/logo.svg"
                        class="black_logo "
                        alt="logo"
                      />
                      <img
                        src="assets/images/logo/logo-white.svg"
                        class="white_logo"
                        alt="logo"
                      />
                    </span>
                    <span class="xl:hidden inline-block">
                      <img
                        src="assets/images/logo/logo-c.svg"
                        class="black_logo "
                        alt="logo"
                      />
                      <img
                        src="assets/images/logo/logo-c-white.svg"
                        class="white_logo "
                        alt="logo"
                      />
                    </span>
                  </a>
                  <button class="smallDeviceMenuController open-sdiebar-controller hidden md:inline-block xl:hidden">
                    <iconify-icon
                      class="leading-none bg-transparent relative text-xl top-[2px] text-slate-900 dark:text-white"
                      icon="heroicons-outline:menu-alt-3"
                    ></iconify-icon>
                  </button>
                  <button
                    class="items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 focus:outline-none focus:shadow-none px-1 space-x-3
        rtl:space-x-reverse search-modal inline-flex xl:hidden"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <SearchIcon />
                    <span class="xl:inline-block hidden">Search...</span>
                  </button>
                </div>
                {/* <!-- end horizental --> */}

                
              
                <div className="nav-tools flex items-center lg:space-x-5 space-x-3 rtl:space-x-reverse leading-0">
                  {/* <!-- BEGIN: Notification Dropdown --> */}
                  {/* <!-- Notifications Dropdown area --> */}
                  <div className="relative md:block hidden">
                    <button
                      className="lg:h-[32px] lg:w-[32px] lg:bg-slate-50 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer
      rounded-full text-[20px] flex flex-col items-center justify-center"
                    >
                      <NotificationsIcon
                        onClick={() => setIsNotification(!isNotification)}
                      />
                      <span
                        className="absolute -right-1 lg:top-0 -top-[6px] h-4 w-4 bg-red-500 text-[8px] font-semibold flex flex-col items-center
        justify-center rounded-full text-white z-[99]"
                      >
                        4
                      </span>
                    </button>
                    {/* <!-- Notifications Dropdown --> */}
                    {isNotification && (
                      <div
                        className="dropdown-menu z-10  bg-white divide-y divide-slate-100 dark:divide-slate-900 shadow w-[335px]
      dark:bg-slate-800 border dark:border-slate-900 !top-[23px] rounded-md absolute"
                        style={{ right: "0" }}
                      >
                        <div className="flex items-center justify-between py-3 px-3">
                          <h3 className="text-sm font-Inter font-medium text-slate-700 dark:text-white">
                            Notifications
                          </h3>
                          <a
                            className="text-xs font-Inter font-normal underline text-slate-500 dark:text-white"
                            href="#"
                          >
                            See All
                          </a>
                        </div>
                        {notification.map((notification) => (
                          <div
                            className="divide-y divide-slate-100 dark:divide-slate-900"
                            role="none"
                            key={notification.id}
                          >
                            <div className="bg-slate-100 dark:bg-slate-700 dark:text-white text-slate-800 block w-full px-4 py-2 text-sm relative">
                              <div className="flex ltr:text-left rtl:text-right">
                                <div className="flex-1">
                                  <div className="text-slate-600 text-xs leading-4">
                                    {notification.message}
                                  </div>
                                  {/* <div className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                                    {notification.createdAt}
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* <!-- END: Notification Dropdown --> */}

                  {/* <!-- BEGIN: Profile Dropdown --> */}
                  {/* <!-- Profile DropDown Area --> */}
                  <div className="md:block hidden w-full">
                    <button
                      className="text-slate-800 dark:text-white focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center
      inline-flex items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <div
                        className="lg:h-8 lg:w-8 h-7 w-7 rounded-full flex-1 ltr:mr-[10px] rtl:ml-[10px]"
                        style={{ marginRight: 10 }}
                      >
                        <img
                          src={user}
                          alt="user"
                          className="block w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <span className="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
                        {name}
                      </span>
                      {/* <svg className="w-[16px] h-[16px] dark:text-white  lg:inline-block text-base inline-block ml-[10px] rtl:mr-[10px]" aria-hidden="true" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg> */}

                      <KeyboardArrowDownIcon onClick={toggleDropdown} />
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    {isDropdownOpen && (
                      <div
                        className="dropdown-menu z-10  bg-white divide-slate-100 shadow w-44 dark:bg-slate-800 border dark:border-slate-700 top-[23px] rounded-md
      overflow-hidden absolute "
                      >
                        <ul className="py-1 text-sm text-slate-800 dark:text-slate-200">
                          <li>
                            <Link
                              to={"/login"}
                              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white font-inter text-sm text-slate-600
            dark:text-white font-normal"
                              onClick={handleLogout}
                            >
                              {/* <iconify-icon
                              icon="heroicons-outline:login"
                              className="relative top-[2px] text-lg ltr:mr-1 rtl:ml-1"
                            ></iconify-icon> */}
                              <LogoutIcon
                                style={{ fontSize: "medium" }}
                                onClick={handleLogout}
                              />{" "}
                              &nbsp;
                              <span className="font-Inter">Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  {/* <!-- END: Header --> */}
                  <button className="smallDeviceMenuController md:hidden block leading-0">
                    <iconify-icon
                      className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                      icon="heroicons-outline:menu-alt-3"
                    ></iconify-icon>
                  </button>
                  {/* <!-- end mobile menu --> */}
                </div>
                {/* <!-- end nav tools --> */}
              </div>
            </div>
          </div>

          {/* <!-- BEGIN: Search Modal --> */}
          <div
            class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto inset-0 bg-slate-900/40 backdrop-filter backdrop-blur-sm backdrop-brightness-10"
            id="searchModal"
            tabindex="-1"
            aria-labelledby="searchModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog relative w-auto pointer-events-none top-1/4">
              <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white dark:bg-slate-900 bg-clip-padding rounded-md outline-none text-current">
                <form>
                  <div class="relative">
                    <button class="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-full text-xl dark:text-slate-300 flex items-center justify-center">
                      <SearchIcon />
                    </button>
                    <input
                      type="text"
                      class="form-control !py-[14px] !pl-10"
                      placeholder="Search"
                      autofocus
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- END: Search Modal --> */}
          {/* <!-- END: Header --> */}
          {/* <!-- END: Header --> */}
          <div
            class="content-wrapper transition-all duration-150 xl:ltr:ml-[248px]"
            id="content_wrapper"
            style={{ backgroundColor: "#F1F5F9" }}
          >
            <div class="page-content">
              <div id="content_layout">
                <div>
                  <>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        aria-label="scrollable auto tabs example"
                        sx={{
                          "& .MuiTabs-indicator": {
                            bgcolor:
                              value === 0
                                ? "#EC6E46"
                                : value === 1
                                ? "#EC6E46"
                                : value === 2
                                ? "#EC6E46"
                                : "#000",
                          },
                        }}
                      >
                        <Tab
                          label="Today"
                          style={{ color: value === 0 ? "#EC6E46" : "#000" }}
                        />
                        <Tab
                          label="All"
                          style={{ color: value === 1 ? "#EC6E46" : "#000" }}
                        />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                      <All />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Today />
                    </TabPanel>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
