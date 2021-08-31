import { apiParamsInterface } from '../interface';

const GetAPIRequest = async function (params: apiParamsInterface) {
    try {
        const res = await fetch(`${params.backendUrl}/lyric/?page=1`);
        const data = await res.json();
        params.setLyrics(data.results);
        params.setFilteredLyrics(data.results);
    } catch (err) {
        console.log('Error fetching data');
    }
}
export default GetAPIRequest
