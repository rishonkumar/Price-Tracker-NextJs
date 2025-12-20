import Firecrawl from '@mendable/firecrawl-js';

const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });


export async function scrapeProduct(url) {

    try {

        const result = await firecrawl.scrapeUrl(url, {
            formats: ["extract"],
            extract: {
                prompt:
                    "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available",
                schema: {
                    type: "object",
                    properties: {
                        productName: { type: "string" },
                        currentPrice: { type: "number" },
                        currencyCode: { type: "string" },
                        productImageUrl: { type: "string" },
                    },
                    required: ["productName", "currentPrice"],
                },
            },
        });

        const extractedData = result.data;

        if (!extractedData || !extractedData.productName) {
            throw new Error("No data found to extract")
        }
        return extractedData;
    }
    catch (error) {
        console.log("Firecrawl scrapre error : ", error)
        throw new Error(`Failed to scrape product : ${error.message}`)
    }
}