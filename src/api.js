import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyD5Farup5-GS2mabfppJISUPs3c2XP004M',
   },
})

export default request