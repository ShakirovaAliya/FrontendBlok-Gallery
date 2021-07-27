import { createRouter, createWebHistory} from "vue-router";
import PageAll from "./views/PageAll.vue";
import PageSaved from "./views/PageSaved.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: PageAll,
            name: "All",
            meta: {
                title: "All"
            }
        },
        {
            path: "/saved",
            component: PageSaved,
            name: "Saved",
            meta: {
                title: "Saved"
            }
        }
    ]

})

export default router;