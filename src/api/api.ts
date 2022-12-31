import axios from "axios";

// створюємо змінну, в якій записуємо параметри axios (щоб постійно не писати їх)
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "0b7e980d-17e5-4474-a2a9-e62305174d89"
    }
})

// Обʼєкт, в якому знаходяться методи, що роблять запроси на сервер
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            // Повертаємо не цілу відповідь, а тільки data. Це теж буде проміс
            .then(response => response.data)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    me() {
        return instance.get(`auth/me`)
    }
}