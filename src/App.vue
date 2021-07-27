<template>
    <div class="container">
        <Header />

        <router-view />
    </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue"
import PageAll from "./views/PageAll.vue"
import PageSaved from "./views/PageSaved.vue"

export default {
    name: 'PageAdmin',
    components: {Header, PageAll, PageSaved},
    watch: {
        $route: {
            immedite: true,
            handler(to, from) {
                document.title = to.meta.title || "Gallery"

            }

        }
    }
}

</script>