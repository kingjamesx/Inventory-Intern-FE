<template>
  <div class="container">
    <section class="left bg">
      <div class="circle">
        <span class="login-img"
          ><img src="../assets/ourpass-login.png" alt=""
        /></span>
      </div>
    </section>
    <section class="right">
      <p style="font-size: 18px; font-weight: 500" class="top-text">Ourpass</p>
      <section class="left top-logo">
        <div class="circle">
          <span class="login-img"
            ><img src="../assets/ourpass-login.png" alt=""
          /></span>
        </div>
      </section>
      <main class="main">
        <p style="font-size: 24px; font-weight: 500" class="m-text">
          Create an account
        </p>
        <p class="m-text">Sign into your account to get started</p>
        <q-form @submit="submitForm">
          <div class="q-mb-lg">
            <label class="label">Fullname</label>
            <q-input
              outlined
              v-model="form.name"
              placeholder="Enter your Fullname"
              type="text"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => /^([^0-9]*)$/.test(val) || 'Please enter a valid name',
              ]"
            />
          </div>
          <div class="q-mb-md">
            <label class="label">Business Name</label>
            <q-input
              outlined
              v-model="form.businessName"
              placeholder="Enter business name"
              :rules="[(val) => !!val || 'Field is required']"
            />
          </div>
          <div class="q-mb-md">
            <label class="label">Email Address</label>
            <q-input
              outlined
              v-model="form.email"
              placeholder="Enter Email Address"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) =>
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
                  'Please enter a Valid email address',
              ]"
            />
          </div>
          <div class="q-mb-md">
            <label class="label">Phone Number</label>
            <q-input
              outlined
              v-model="form.phoneNumber"
              placeholder="phone number"
              mask="###########"
            />
          </div>
          <div class="q-mb-md">
            <label class="label">Password</label>
            <q-input
              outlined
              v-model="form.password"
              placeholder="**********"
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => val.length > 7 || 'minimum of 8 characters',
              ]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="q-mb-lg">
            <label class="label">Confirm Password</label>
            <q-input
              outlined
              v-model="form.confirmPassword"
              placeholder="**********"
              :type="isPwdConfirmed ? 'password' : 'text'"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => val == form.password || 'Password is not matched',
              ]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwdConfirmed ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwdConfirmed = !isPwdConfirmed"
                />
              </template>
            </q-input>
          </div>
          <q-btn
            type="submit"
            label="Create Account"
            class="full-width login-btn"
          />
        </q-form>
        <div class="main-footer">
          <a>Have an account?</a>
          <a href="/">Sign in</a>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      form: {
        name: "",
        businessName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      router:useRouter()

    };
  },
  methods: {
    submitForm() {
      this.$api.post('auth/register',this.form)
        .then(res=>{
            console.log(res)
        this.$store.dispatch('auth/login',res.data)
        this.router.push({ path: '/dashboard' })

        })
        .catch(err=>{
            console.log(err.message)
        })
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1800px) {
    max-width: 1200px;
    margin: auto;
  }
  @media (min-width: 1800px) {
    height: auto;
  }
}
.left {
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1100px) {
    display: none;
  }
}
.bg {
  background-color: #f3f5f9;
}
.label {
  display: block;
  margin-bottom: 5px;
}
.right {
  flex-basis: 50%;
  padding: 20px;
  overflow-y: auto;
  @media (max-width: 1100px) {
    flex-basis: 100%;
  }
}
.circle {
  background-color: #6540bf;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1093px) {
    width: 100px;
    height: 100px;
  }
}
.main {
  padding: 2.5rem;
  padding-inline: 5rem;
  @media (max-width: 551px) {
    padding-inline: 1rem;
  }
}
.login-btn {
  background-color: #6540bf;
  color: white;
  border-radius: 8px;
  padding: 10px;
  margin-top: 8px;
}
.google-btn {
  padding: 10px;
  border-radius: 8px;
}
.btn-border {
  outline: none;
}
.main-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  place-content: center;
  margin-top: 2rem;
}
.block {
  display: inline-block;
}
.login-img {
  display: block;
  width: 70%;
  & img {
    width: 100%;
  }
}
.top-logo {
  display: none;
  @media (max-width: 1093px) {
    display: flex;
  }
}
.top-text {
  @media (max-width: 1093px) {
    display: none;
  }
}
.m-text {
  @media (max-width: 1093px) {
    text-align: center;
  }
}
.blur-container {
  width: 50%;
  height: 300px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  /* backdrop-filter: blur(16px); */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  border: 1px solid red;
  @media (max-width: 1093px) {
    height: 30px;
  }
}
</style>
