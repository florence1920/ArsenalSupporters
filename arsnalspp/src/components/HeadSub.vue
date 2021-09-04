<template>
    <div class="theme">
        <p v-if="$route.path == '/main'">
            Arsenal Supporters
        </p>
        <p v-if="$route.path == '/team'">
            <router-link to='/main'> 뒤로가기 </router-link>
            Team
        </p>
        <p v-if="$route.path == '/matches'">
            <router-link to='/main'> 뒤로가기 </router-link>
        </p>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
    
    
</style>