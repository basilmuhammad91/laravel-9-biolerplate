<template>
    <v-row justify="center">
        <v-dialog
            v-model="isModal"
            persistent
            max-width="600px"
            role="document"
        >
            <form>
                <!-- <input type="hidden" name="_token" :value="csrf" /> -->
                <v-card>
                    <v-card-title>
                        <span class="text-h5">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        v-model="form.name"
                                        label="Name*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        v-model="form.email"
                                        label="Email*"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        v-model="form.password"
                                        label="Password*"
                                        type="password"
                                        hint="Password should be atleat 8 character"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeModal">
                            Close
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="saveUser"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-dialog>
    </v-row>
</template>

<script>
import useUsers from '../../composables/users';
import {reactive} from 'vue'
export default {
    name: "addEditUserModal",
    props: ["isModal"],
    setup(){
        const form = reactive({
            'name': '',
            'email': '',
            'password': '',
        })
        const { storeUser, errors } = useUsers();

        const saveUser = async () => {
            await storeUser({...form})
            this.closeModal()
        }

        return{
            form,
            saveUser,
            errors
        }
    },
    data() {
        return {
            // csrf: document
            //     .querySelector('meta[name="csrf-token"]')
            //     .getAttribute("content"),
            // Create a new form instance
            // form: new form({
            //     id: "",
            //     name: "",
            //     username: "",
            //     email: "",
            //     password: "",
            //     photo: "",
            //     role: "",
            //     center_id: [],
            // }),
        };
    },

    methods: {
        closeModal() {
            Fire.$emit("updateDialogStatus", false);
        },
    },

    mounted() {
        if (this.isModal) {
            console.log(this.isModal);
        }
    },
};
</script>
