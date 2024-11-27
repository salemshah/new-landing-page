import axiosInstance from './axiosInstence';

const fetcher = async (url) => {
    try {
        const { data } = await axiosInstance.get(url);
        return data?.data; // Adjust according to your API response structure
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error; // Re-throw the error for further handling if needed
    }
};

export default fetcher;