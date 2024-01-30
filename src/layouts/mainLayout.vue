<template>
    <div>
        <navigation-bar />
        <router-view></router-view>
        <principal-footer />
    </div>
</template>

<script setup>
import navigationBar from '@/components/navigation/NavigationBar/navigationBar.vue';
import PrincipalFooter from '@/components/navigation/footers/principalFooter.vue';
</script>

<style lang="scss" scoped>

</style>