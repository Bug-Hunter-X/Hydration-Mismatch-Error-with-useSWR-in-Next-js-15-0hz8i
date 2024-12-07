# Hydration Mismatch Error with useSWR in Next.js 15

This repository demonstrates a hydration mismatch error in a Next.js 15 application when using `useSWR` to fetch data. The error occurs when the data is not immediately available, leading to a discrepancy between the server-rendered and client-side rendered content.

## Bug Description
A hydration mismatch error occurs when the server-rendered HTML and the client-side rendered content differ.  This happens when `useSWR` doesn't have data during the server-side rendering, resulting in an empty `<p>Loading...</p>` tag on the server, but a fully rendered component with fetched data on the client. 

## Solution
The solution involves using a fallback state during server-side rendering (`useSWRConfig`) to correctly display content before the data is available. Also, ensuring that any data used within components are properly handled (e.g., conditional rendering).