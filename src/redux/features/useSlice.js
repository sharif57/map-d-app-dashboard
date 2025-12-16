import baseApi from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    userProfile: builder.query({
      query: () => ({
        url: "/accounts/update-profile/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    // userList: builder.query({
    //   query: () => ({
    //     url: "/accounts/dashboard/users-list/",
    //     method: "GET",
    //   }),
    //   providesTags: ["User"],
    // }),

    userList: builder.query({
      query: ({ page = 1 }) => ({
        url: `/accounts/dashboard/users-list/?page=${page}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/accounts/update-profile/",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    adminInfo: builder.query({
      query: () => ({
        url: "/leaderboard/admin/dashboard/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    allCountryList: builder.query({
      query: () => ({
        url: "/leaderboard/dashboard/all-countries/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    updateCountry: builder.mutation({
      query: ({data, id}) => ({
        url: `/locations/country/manage/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // all-continents/
    allContinents: builder.query({
      query: () => ({
        url: "/locations/all-continents/",
        method: "GET",
      }),
      providesTags: ["User"],
    })

 

  }),
});

export const {useUserProfileQuery, useUserListQuery, useUpdateProfileMutation , useAdminInfoQuery, useAllCountryListQuery , useUpdateCountryMutation , useAllContinentsQuery} = userApi;
