import axios from 'axios'
import { ref } from 'vue'

export default function useUsers() {
    const users = ref([])
    const isLoading = ref(true)

    const getUsers = async () => {
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

    return {
        users,
        isLoading,
        getUsers
    }
}
