import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/donar/",  
    baseUrl: "https://global-education-t.onrender.com/api/donar/", 
    prepareHeaders: (headers) => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
          headers.set('Authorization', `Bearer ${authToken}`);
          console.log("sign", authToken);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerDonar: builder.mutation({
      query: (user) => {
        return {
          url: "registerDonar",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    verifyRegisterOtp: builder.mutation({
        query: (user) => {
          return {
            url: "verifyRegisterOtp",
            method: "POST",
            body: user,
            headers: {
              "Content-type": "application/json",
            },
          };
        },
      }),
      loginDonar: builder.mutation({
        query: (user) => {
          return {
            url: "loginDonar",
            method: "POST",
            body: user,
            headers: {
              "Content-type": "application/json",
            },
          };
        },
      }),
      verifyLoginOtp: builder.mutation({
        query: (user) => {
          return {
            url: "verifyLoginOtp",
            method: "POST",
            body: user,
            headers: {
              "Content-type": "application/json",
            },
          };
        },
      }),
      resendRegisterOtp: builder.mutation({
        query: (user) => {
          return {
            url: "resendOTPForRegister",
            method: "POST",
            body: user,
            headers: {
              "Content-type": "application/json",
            },
          };
        },
      }),
      getDonar: builder.query({
        query: (user) => {
          return {
            url: "donars",
            method: "GET",
            body: user,
            headers: {
              "Content-type": "application/json",
            },
          };
        },
      }),
      getNotification: builder.query({
        query: () => {
          return {
            url: "notifications",
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          };
        },
      }),
      updateDonarProfile: builder.mutation({
        query: (user) => {
          return {
            url: `updateDonar`,
            method: "PUT",
            body: user,
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
      addDonarProfileImage: builder.mutation({
        query: (user) => {
          console.log(user)
          return {
            url: "addProfileImage",
            method: "POST",
            body: user,
            // headers: {
            //   "Content-type": "multipart/form-data",
            // },
          };
        },
      }),
      getProfileImage: builder.query({
        query: () => {
          return {
            url: "profileImage",
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          };
        },
      }),
      getAcceptRaiseFund: builder.query({
        query: () => {
          return {
            url: "acceptedRaiseFund",
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          };
        },
      }),
  
   
  }),
});

export const {
    useRegisterDonarMutation,
    useVerifyRegisterOtpMutation,
    useLoginDonarMutation,
    useVerifyLoginOtpMutation,
    useResendRegisterOtpMutation,
    useGetDonarQuery,
    useGetNotificationQuery,
    useUpdateDonarProfileMutation,
    useAddDonarProfileImageMutation,
    useGetProfileImageQuery,
    useGetAcceptRaiseFundQuery
} = signUpApi;
