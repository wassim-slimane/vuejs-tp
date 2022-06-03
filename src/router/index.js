import {createRouter, createWebHistory} from "vue-router";
import ConditionsComponentVue from "../components/ConditionsComponent.vue";
import FormConnexionComponentVue from "../components/FormConnexionComponent.vue";
import FormInscriptionComponentVue from "../components/FormInscriptionComponent.vue";
import LoopComponentVue from "../components/LoopComponent.vue";
import MainComponentVue from "../components/MainComponent.vue";
import HomePageVue from "../views/HomePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePageVue
        },
        {
            path: "/inscription",
            name: "inscription",
            component: FormInscriptionComponentVue
        },
        {
            path: "/connexion",
            name: "connexion",
            component: FormConnexionComponentVue
        },
        {
            path: "/demo-for",
            name: "demo-for",
            component: LoopComponentVue
        },
        {
            path: "/demo-if",
            name: "demo-if",
            component: ConditionsComponentVue
        },
        {
            path: "/main",
            name: "main",
            component: MainComponentVue
        },
    ],
});

export default router;