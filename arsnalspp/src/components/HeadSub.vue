<template>

    <div class="theme">
        <p v-if="$route.path == '/main'">
            Arsnal Supporters
        </p>
        <p v-if="$route.path == '/team'">
            <div>
                <router-link to='/main'> 뒤로가기 </router-link>
            </div>
            Team
        </p>
        <p v-if="$route.path == '/matches'">
            <div>
                <router-link to='/main'> 뒤로가기 </router-link>
            </div>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
</style>