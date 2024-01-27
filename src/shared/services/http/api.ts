import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN
  }
})
export default apiClient

// uri-auth: https://accounts.spotify.com/authorize?client_id=66257496d8324d5fbdaa58954b6d187a&response_type=code&redirect_uri=http://localhost:5173/&scope=user-read-private%20user-read-email&state=34fFs29kd09

// personal code: http://localhost:5173/?code=AQCoQ6D_yQX6p6LANIzG8cYrrsdLDY6VxwlrbtYw9pJ5AeAAk5ZwokUxIjPAfOTPK3FbetpGAXHEwQyIKU4HcWBuOllfRbdL0O6nafqBAq2FNd_4Page9K3Sx1v--LGDTG377SieKSn-eC6BLJLnmm2HFahXw4wkKsDyFXTWOQzj_UqARIcSVxbClhdVxn_LKtFSZ_3o0ySVbp4fkOs&state=34fFs29kd09

// get access token request: curl -d grant_type=authorization_code -d code='AQCoQ6D_yQX6p6LANIzG8cYrrsdLDY6VxwlrbtYw9pJ5AeAAk5ZwokUxIjPAfOTPK3FbetpGAXHEwQyIKU4HcWBuOllfRbdL0O6nafqBAq2FNd_4Page9K3Sx1v--LGDTG377SieKSn-eC6BLJLnmm2HFahXw4wkKsDyFXTWOQzj_UqARIcSVxbClhdVxn_LKtFSZ_3o0ySVbp4fkOs&state=34fFs29kd09' -d redirect_uri='http://localhost:5173/' -d client_id='66257496d8324d5fbdaa58954b6d187a' -d client_secret='d4d916e56ad0440e8760ac25985e258c' https://accounts.spotify.com/api/token

// DO NOT REMOVE THIS COMMENT
// {
// "access_token":"BQBwhALcAei9F0aq-71JfDvnyoo4F4Jr4mCIZEmtQnUQLnb-Je9HmobAATPlLzpPV631_mcSfh_ni5GLzRYwnV0RLv_AbWVi4HNmz__7cXZTmByhYygDh07sA6-xZPntP1xe3-i5kdxbwxfq1ZTLNUv3US5hcdltpqiKV7bEQYQuKS5qkUrAAJ45Y6drHjwNOuc",
// "token_type":"Bearer",
// "expires_in":3600,
// "refresh_token":"AQAadi-hyVmCUX7IKQChM6tj9XpMAOppP2rHAkiqbAcAI8PQ-TRVaiPKXImAVnJj2PnHVV-A8OmYFwTDQ9x35kpxu-cFgrOrn1TDbrXNZgwoVLdAZc-1G0pzdLrglA2_daY",
// "scope":"user-read-email user-read-private"
// }
