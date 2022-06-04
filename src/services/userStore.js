import { ref } from "vue";

export const user = ref({
    name: "Wassim",
    email: "wassim.slimane01@gmail.com",
});

export const fakeSignin = () => {
    console.log('signin');
}

export const fakeLogin = () => {
    console.log("login");
}

export const fakeLogout = () => {
    console.log('logout');
}