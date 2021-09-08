<template>
    <ul class="reply">
        <div class="search">
            <input type="text" class="input">
            <button type="submit" class="enroll">등록</button>
        </div>
        <li>
            <ul class="replyWrap">
                <li class="writer"><p>ArtetaOut: </p></li>
                <li class="repl"><p>아르테타형..제발...</p></li>
                <li class="time"><p>12:01</p></li>
                <li class="writer"><p>KingHenry: </p></li>
                <li class="repl"><p>앙리출전하나요?</p></li>
                <li class="time"><p>12:00</p></li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.reply {min-height: 346.75px; background: #003377; padding: 10px 40px;}
.reply .search .input {width: 250px; height: 25px;}
.reply .search .enroll {height: 25px; line-height: 5px;}
.reply li {margin: 5px 0;}
.reply p {color: #fff; font-size: 15px;}
.reply .replyWrap {overflow: hidden;}
.reply .replyWrap li {float: left; margin: 0 px;}
</style>