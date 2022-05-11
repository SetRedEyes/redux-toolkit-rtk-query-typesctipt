import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/IPost'

const postEndpoint = 'posts/'
const dataType = ['Post']
const baseUrl = 'http://localhost:5000/'

export const postAPI = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  tagTypes: dataType,
  endpoints: (build) => ({
    // <Что вернется и что ожидаем аргументом>
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: postEndpoint,
        params: {
          _limit: limit
        }
      }),
      providesTags: (result) => dataType
    }),

    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: postEndpoint,
        method: 'POST',
        body: post
      }),
      invalidatesTags: dataType
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: postEndpoint + post.id,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: dataType
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: postEndpoint + post.id,
        method: 'DELETE'
      }),
      invalidatesTags: dataType
    })
  })
})
