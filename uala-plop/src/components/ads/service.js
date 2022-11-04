import client from "../../api/client.js"

const adsURL = '/api/v1/adverts'

export const getAds =  async () => {
    const ads = await client.get(adsURL)
    
    return ads;
   
};

export const getAdId = async (adId) => {
    const ad = await client.get(`${adsURL}/${adId}`);

    return ad;
}

export const createAd = async (body) => {
    
    const response = await client.post(adsURL,body)
    console.log(response)
    return response
};