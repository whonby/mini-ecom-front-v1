<template>
    <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
  <the-header></the-header>
        <the-nav-bar></the-nav-bar>
    
        <div>
            <div>
                
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    import TheHeader from "./TheHeader";
    import TheNavBar from "./TheNavBar";
 /* import TheMenu from './TheMenu.vue'*/

    export default {
        name: "TheDefault",
        components: {
            TheHeader,
          TheNavBar,
         /*   TheMenu*/

        },
    }
</script>

<style scoped>

</style>
