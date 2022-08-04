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
                    <v-data-table
                      :headers="headers"
                      :items="users.data ? users.data : users"
                      :server-items-length="users.total"
                      class="elevation-1"
                      :loading="isLoading"
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
                        >
                          mdi-eye
                        </v-icon>

                        <v-icon
                          color="blue"
                          class="edit-icon mr-2"
                          small
                        >
                          mdi-pencil
                        </v-icon>

                        <v-icon
                          color="red"
                          class="delete-icon"
                          small
                        >
                          mdi-delete
                        </v-icon>
                      </template>
                    </v-data-table>
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
import useUsers from ".././composables/users";
import { onMounted } from "vue";

export default {
  setup() {
    const { users, isLoading, getUsers } = useUsers();
    onMounted(getUsers);

    return {
      //   form: new form(),
      curpage: 1,
      search: "",
      itemsPerPage: 10,
      options: {},
      sortBy: "",
      sortDesc: "",
      users,
      isLoading,
      //   userInfo: {},
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        {
          text: "Actions",
          value: "actions",
          sortable: false
        }
      ]
    };
  },
  components: {},
  watch: {
    options: {
      handler() {
        // this.getResults(
        //   this.options.page ? this.options.page : null,
        //   this.options.itemsPerPage ? this.options.itemsPerPage : null
        // );
      },
      deep: true
    },
    search() {
      console.log(200);
    }
  },
  methods: {
    getResults() {
      // this.$Progress.start()
      // this.getAllUsers
      // this.$Progress.finish();
    }
  },
  created() {
    // this.getResults();
  }
};
</script>
