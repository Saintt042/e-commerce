// import React from 'react';
import { createClient } from "contentful";



const useContentful = () => {
    const client = createClient({
        space: "ys39ym33ba2p",
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        host: "cdn.contentful.com"
    });
    
    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "product",
                select: "fields"
            });

            // const sanitizedEntries = entries.items.map((item) => {
            //     const avatar = item.fields.avatar.fields;


            //     return {
            //         ...item.fields,
            //         avatar
            //     };
            // });

            // return sanitizedEntries;
            return entries
        } catch (error) {
            console.log(`error fetching products: ${error}`)
        }
    };

    return { getProducts };

}

export default useContentful