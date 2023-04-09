import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'daa4a463-c0a4-4c70-8a08-708c086229cf'
  }
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => {
         return response.data
       })
  },
  followUser(id: number) {
    return instance.post(`follow/${id}`)
       .then(response => {
         return response.data
       })
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`)
       .then(response => {
         return response.data
       })
  }
}

export const profileAPI = {
  getUserProfile(userId: string) {
    return instance.get(`profile/` + userId)
    /*   /!**!/  .then(response => {
        return response.data
      })*/
  },
  getStatusProfile(userId: string) {
    return instance.get(`profile/status/` + userId)
    /*     .then(res => {
        return res.data
      })*/
  },
  updateStatusProfile(status: string) {
    return instance.put(`profile/status`, {status: status})
    /*   .then(res => {
         return res.data
       })*/
  }
}

export const authAPI = {
  getAuth() {
    return instance.get('auth/me').then(response => {
      return response.data
    })
  },
  postLogin(email: string, password: string, rememberMe: boolean = false) {
    return instance.post('auth/login', {email, password, rememberMe})
  },
  logOut() {
    return instance.delete('auth/login')
  }
}