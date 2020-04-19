<template>
    <div>
        <div class="section title">
            <h2>Covid-19 Global Update</h2>
            <span class="detail">Last updated {{ lastUpdated | timeago }}</span>
            <span class="link"><router-link to="/bing-map">View Bing Map >></router-link></span>
        </div>
        <div class="cases">
            <div class="box orange">
                <span class="number">{{ cases | format }}</span>
                <span class="label">INFECTED</span>
            </div>
            <div class="box green">
                <span class="number">{{ recovered | format }}</span>
                <span class="label">RECOVERED</span>
            </div>
            <div class="box red">
                <span class="number">{{ deaths | format }}</span>
                <span class="label">DEATHS</span>
            </div>
        </div>
    </div>
</template>

<script>
import * as timeago from 'timeago.js';
import axios from 'axios';
export default {
    props: ['props'],
    filters: {
         format (val) {
            return new Intl.NumberFormat().format(val)
        },
        timeago (val) {
            return timeago.format(val)
        }
    },
    data  () {
        return {
            cases: 0,
            recovered: 0,
            deaths: 0,
            lastUpdated: '2019-01-01'
        }
    },
    methods: {

    },
    mounted () {
        axios.get('https://covid19.mathdro.id/api').then(res => {
            this.cases = res.data.confirmed.value;
            this.recovered = res.data.recovered.value;
            this.deaths = res.data.deaths.value;
            this.lastUpdated = res.data.lastUpdate;
        })
    }
}
</script>

<style scoped>
.section {
    padding: 15px;
    line-height: normal;
}
h2 {
    font-weight: 800;
}
.detail {
    color: grey;
    font-size: 11px;
}
.cases {
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.box {
    -webkit-box-shadow: -1px 0px 36px -22px rgba(110,110,110,1);
    -moz-box-shadow: -1px 0px 36px -22px rgba(110,110,110,1);
    box-shadow: -1px 0px 36px -22px rgba(110,110,110,1);
    padding: 20px 10px;
    border-radius: 5px;
    line-height: normal;
    width: 120px;
}
.number {
    font-weight: 800;
    display: block;
    font-size: 18px;
}
.label {
    font-size: 9px;
}
.orange {
    color: orange;
}
.green {
    color: #06ca52;
}
.red {
    color: #f74848;
}
.link {
    display: block;
    font-size: 12px;
    font-weight: bold;
    padding: 10px 0;
    color: #238cf0;
}
</style>