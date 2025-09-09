import baseApi from "../api/baseApi";

export const privacyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    privacyPolicies: builder.query({
      query: () => ({
        url: "/privacy_policy/privacy-policy/",
        method: "GET",
      }),
      providesTags: ["Privacy"],
    }),

      updatePrivacyPolicy: builder.mutation({
      query: (data) => ({
        url: "/privacy_policy/privacy-policy/",
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Privacy"],
    }),

      terms: builder.query({
      query: () => ({
        url: "/privacy_policy/terms-conditions/",
        method: "GET",
      }),
      providesTags: ["Privacy"],
    }),

      updateTerms: builder.mutation({
      query: (data) => ({
        url: "/privacy_policy/terms-conditions/",
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Privacy"],
    }),

    // trust-safety/
    trustSafety: builder.query({
      query: () => ({
        url: "/privacy_policy/trust-safety/",
        method: "GET",
      }),
      providesTags: ["Privacy"],
    }),

    updateTrustSafety: builder.mutation({
      query: (data) => ({
        url: "/privacy_policy/trust-safety/",
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Privacy"],
    }),

  }),
});

export const {usePrivacyPoliciesQuery, useUpdatePrivacyPolicyMutation, useTermsQuery, useUpdateTermsMutation, useTrustSafetyQuery, useUpdateTrustSafetyMutation} = privacyApi;
