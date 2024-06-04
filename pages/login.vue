<template>
  <v-layout>
    <v-flex xs12 sm7 style="background-color: #3e37c2">
      <AbolLogo />
      <div class="d-flex align-center justify-center" style="height: 100vh">
        <IconsTaskLogo />
      </div>
    </v-flex>
    <v-flex xs12 sm5 style="background-color: #fbfbfd">
      <v-layout column>
        <v-flex></v-flex>
        <v-flex>
          <v-layout class="" row>
            <v-flex xs2></v-flex>

            <div
              class="d-flex align-center justify-center"
              style="height: 100vh"
            >
              <v-sheet elevation="0" min-width="500" class="border mx-auto">
                <v-form fast-fail @submit.prevent="login">
                  <v-text-field
                    outlined
                    style="border-radius: 12px"
                    v-model="email"
                    label="Email"
                  ></v-text-field>
                  <v-text-field
                    outlined
                    style="border-radius: 12px"
                    v-model="password"
                    label="password"
                  ></v-text-field>
                  <div class="d-flex m-auto justify-space-between border">
                    <div>
                      <v-checkbox label="Remember Me"></v-checkbox>
                    </div>

                    <div>
                      <a class="text-body-2 font-weight-regular"
                        >Forgot Password?</a
                      >
                    </div>
                  </div>
                  <div class="d-flex justify-end">
                    <v-btn class="pa-6" rounded type="submit" color="primary"
                      >Sign in
                      <template
                        ><v-icon class="pl-4">mdi-arrow-right</v-icon></template
                      ></v-btn
                    >
                  </div>
                </v-form>
                <div class="d-flex justify-end mt-12">
                  <div></div>
                  <div></div>
                  <NuxtLink to="register">Don't have an account?</NuxtLink>
                </div>
              </v-sheet>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import AbolLogo from '~/components/Icons/AbolLogo.vue'
export default {
  layout: 'login',
  components: {
    AbolLogo,
  },
  data() {
    return {
      title: 'Signin',
      credentials: {},
      valid: false,
      loadingLogin: false,
    }
  },
  methods: {
    login() {
      // TODO Dispatch login
      this.$store.dispatch('selectMenus')
      // this.$router.push('/dashboard')
      this.$notify({
        group: 'global',
        title: 'Success',
        text: `Successfully logged in!`,
        type: 'success',
      })
    },
  },
}
</script>
