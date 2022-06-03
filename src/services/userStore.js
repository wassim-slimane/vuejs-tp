import { getOriginalStubFromSpecializedStub } from "@vue/test-utils/dist/stubs";
import { ref } from "vue";

const user = ref({
    name: "Wassim",
    email: "wassim.slimane01@gmail.com",
});

const fakeLogin = () => {
    console.log("login");
}

const logout = () => {
    console.log('logout');
}

export function useUserStore() {
    return {
        user,
        fakeLogin,
        logout,
    };
};