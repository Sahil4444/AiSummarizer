import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const rapidapikey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
import axios from 'axios';


// const options = {
//   method: 'GET',
//   url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//   params: {
//     url: 'https://time.com/6266679/musk-ai-open-letter/',
//     lang: 'en',
//     engine: '2'
//   },
//   headers: {
//     'x-rapidapi-key': 'cfa5ab9e7bmsh2ca9395c43d598fp1e5113jsn81eea625e10d',
//     'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
//   }
// };

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders : (headers) => {
            headers.set('x-rapidapi-key', rapidapikey);
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=5`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;