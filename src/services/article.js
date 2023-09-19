import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



const rapidapiKey= import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
	reducerPath:"articleApi",
	baseQuery:fetchBaseQuery({
		baseUrl:"https://article-extractor-and-summarizer.p.rapidapi.com/",
		prepareHeaders:(headers)=>{
			headers.set("X-RapidAPI-Key","d86894edc4msh629ee0c98e8c983p1fda9bjsn154dcafda454");
			headers.set("X-RapidAPI-Host","article-extractor-and-summarizer.p.rapidapi.com");

			return headers; 
		}
	}),
	endpoints:(builder)=>({
		getSummary:builder.query({
			query:(params)=>`summarize?url=${encodeURIComponent(params.articleUrl)}&length=1`
		})
	})
})

export const {useLazyGetSummaryQuery} =articleApi