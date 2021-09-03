<template>
    <div>
        <h1 v-if="$route.path == '/main'">
            Arsnal Supporters
        </h1>
        <h1 v-if="$route.path == '/team'">
            <div>
                <router-link to='/main'> 뒤로가기 </router-link>
            </div>
            Team
        </h1>
        <h1 v-if="$route.path == '/matches'">
            <div>
                <router-link to='/main'> 뒤로가기 </router-link>
            </div>
        </h1>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    h1 {color: blue; margin:0 0 100px 0;}
</style>