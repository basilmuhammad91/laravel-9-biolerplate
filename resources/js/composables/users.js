import axios from 'axios'
import { ref } from 'vue'

export default function useUsers() {
    const users = ref([])
    const isLoading = ref(true)
    const errors = ref('')

    const getUsers = async (page = 1, rows = 10, sortBy = null, sortDesc = null) => {
        let response = await axios.get('api/users')
        users.value = response.data
        if (users.value) {
            isLoading.value = false
            //   toast.fire({
            //     icon: "error",
            //     title: this.$t("message.SOMETHING_WENT_WRONG")
            //   });
        }
    }

    const storeUser = async (data) => {
        console.log(data)
        // await axios.post('api/users', data)
    }

    return {
        users,
        errors,
        isLoading,
        getUsers,
        storeUser
    }
}
