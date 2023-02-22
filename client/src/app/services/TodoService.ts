import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../models/Todo";

export const todoAPI = createApi({
    reducerPath: "todoAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/api",
    }),
    tagTypes: ['Todo'],
    endpoints: (build) => ({
        fetchTodos: build.query<ITodo[], unknown>({
            query: () => ({
                url: `todo`,
                method: 'GET'
            }),
            providesTags: () => ['Todo']
        }),
        createTodo: build.mutation<ITodo, ITodo>({
            query: (body) => ({
                url: `todo/create`,
                method: 'POST',
                body
            }),
            invalidatesTags: ["Todo"]
        }),
        updateTodo: build.mutation<ITodo, { id: string | number, body: ITodo }>({
            query: ({ id, body }) => ({
                url: `todo/update/${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ["Todo"]
        }),
        deleteTodo: build.mutation<ITodo, {id: string | number}>({
            query: ({id}) => ({
                url: `todo/delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Todo"]
        })
    }),
});

export const {
    useFetchTodosQuery,
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation
} = todoAPI