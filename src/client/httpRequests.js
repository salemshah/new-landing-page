import axiosInstance from "./axiosInstence";

const fetcher = async (url) => {
    const {data} = await axiosInstance.get(url);
    return data?.data;
};

export default fetcher