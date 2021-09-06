<template>
    <div class="outer">
        <div class="inner">
            <ul class="record">
                <li>
                    <ul>
                        <p>Goal</p>
                        <li>
                            <p>리승헌</p>
                            <p>13</p>
                        </li>
                    </ul>
                    <ul>
                        <p>Assist</p>
                        <li>
                            <p>리승민</p>
                            <p>13</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
    <!-- <ul class="record">
        <li>
            <ul>
                <p>goal</p>
                <li class="player_name">
                    <p>이승헌</p>
                    <p>13</p>
                </li>
            </ul>
            <ul>
                <p>assist</p>
                <li class="player_name">
                    <p>이승민</p>
                    <p>12</p>
                </li>
            </ul>
        </li>
    </ul> -->
</template>

<script>
export default {

}
</script>

<style scoped>
    .outer {width: 100%; background: #aaa;}
    .outer .inner {width: 90%; background: #000; margin: 0 auto;}
    .outer .inner .record {overflow: hidden;}
    .record {width: 50%; float: left; color: #fff;}
    .record li ul {}
</style>