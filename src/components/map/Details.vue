<template>
    <div class="detail-wrapper" :style="{bottom: !props.payload ? '-300px': '0'}">
        <span class="central" @click="$emit('closedetail')"></span>
        <div class="content">
            <div class="group">
                <h2>{{ `${props.payload.region == null ? 'Overall':props.payload.region }, ${props.payload.country}` }}</h2>
            </div>
            <div class="group">
                <label for="">Cases</label>
                <p>{{ props.payload.confirmed | format }}</p>
            </div>
            <div class="group">
                <label for="">Recovered</label>
                <p>{{ props.payload.recovered | format }}</p>
            </div>
            <div class="group">
                <label for="">Deaths</label>
                <p>{{ props.payload.deaths | format }}</p>
            </div>
            <div class="group">
                <label for="">Active cases</label>
                <p>{{ props.payload.active | format }}</p>
            </div>
            <div class="group">
                <label for="">Last update: {{ props.payload.lastUpdate | timeago }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import * as timeago from 'timeago.js';
export default {
    props: ['props'],
    filters: {
        format (val) {
            return new Intl.NumberFormat().format(val)
        },
        timeago (val) {
            return timeago.format(val)
        }
    }
}
</script>

<style scoped>
.detail-wrapper {
    background-color: #2c3e50;
    width: 100%;
    max-width: 400px;
    position: absolute;
    bottom: 0;
    z-index: 999999;
    color: white;
    height: 280px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transition: ease .5s;
}
.central {
    background-color: white;
    height: 5px;
    width: 50px;
    display: block;
    margin: 3px auto;
}
.content {
    padding: 20px;
}
.group {
    display: block;
}
.group label {
    font-size: 11px;
}
.group p {
    font-size: 14px;
    font-weight: 700;
}
.group h2 {
     font-size: 20px;
     font-weight: 700;
}
</style>