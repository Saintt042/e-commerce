// import React from 'react';
import { createClient } from "contentful";



const useContentfulTwo = () => {
    const client = createClient({
        space: "ys39ym33ba2p",
        accessToken: process.env.REACT_APP_BANNER_ACCESS_TOKEN,
        host: "cdn.contentful.com"
    });
    
    const getBanner = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "banner",
                select: "fields"
            });

            return entries
        } catch (error) {
            console.log(`error fetching products: ${error}`)
        }
    };

    return { getBanner };

}

export default useContentfulTwo