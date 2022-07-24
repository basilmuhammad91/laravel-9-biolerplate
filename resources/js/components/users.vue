<template>
  <v-app>
    <div class="content-wrapper">
      <div>
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
                <h1 class="m-0 text-dark">{{ 'Users' }}</h1>
              </div>
              <!-- /.col -->
              <div class="col-6">
                <button class="btn btn-success float-right">
                  {{ 'Create User' }}
                  <i class="fas fa-plus fa-fw"></i>
                </button>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <div class="card-tools">
                      <form @submit.prevent>
                        <v-text-field
                          class="m-0 p-0"
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Search"
                          single-line
                          hide-details
                        ></v-text-field>
                      </form>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body table-responsive p-0">
                    <!-- <v-data-table
                      :headers="headers"
                      :items="users.data ? users.data : users"
                      :server-items-length="users.total"
                      class="elevation-1"
                      :loading="loading"
                      :options.sync="options"
                      :search="search"
                      :footer-props="{
                        showFirstLastPage: true,
                        'items-per-page-options': [10, 50, 100, 500, -1],
                      }"
                    >
                      <template v-slot:item.actions="{ item }">
                        <v-icon
                          color="green"
                          class="edit-icon mr-2"
                          small
                          @click="viewUser(item)"
                        >
                          mdi-eye
                        </v-icon>

                        <v-icon
                          color="blue"
                          class="edit-icon mr-2"
                          small
                          @click="editUser(item)"
                          v-if="(is('Super Admin') || can('edit_user'))"
                        >
                          mdi-pencil
                        </v-icon>

                        <v-icon
                          color="red"
                          class="delete-icon"
                          small
                          @click="deleteUser(item.id)"
                          v-if="(is('Super Admin') || can('delete_user'))"
                        >
                          mdi-delete
                        </v-icon>
                      </template>
                    </v-data-table> -->
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
            </div>
          </div>
        </div>
        <!-- /.content -->
      </div>
      <!-- <div class="unathorized-text" v-else>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 unauthorized">
              <v-alert
                color="red lighten-2"
                dark
              >
                {{ $t("message.UNAUTHORIZED") }}
              </v-alert>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      form: new form(),
      users: [],
      curpage: 1,
      search: "",
      itemsPerPage: 10,
      loading: true,
      options: {},
      sortBy: "",
      sortDesc: ""
      //   userInfo: {},
      //   headers: [
      //     { text: this.$t("message.NAME"), value: "name" },
      //     { text: this.$t("message.ROLE"), value: "roles[0].name" },
      //     { text: this.$t("message.EMAIL"), value: "email" },
      //     {
      //       text: this.$t("message.ACTIONS"),
      //       value: "actions",
      //       sortable: false,
      //     },
      //   ],
    };
  },
  components: {},
  watch: {},
  methods: {
    getUsers() {
      axios
        .get("/api/users")
        .then(response => console.log("ALL USERS: ", response.data));
    }
  },
  created() {
    this.getUsers();
  }
};
</script>
