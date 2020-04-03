<template>
    <div>
        <div class="section title">
            <h2>Other references</h2>
        </div>
        <div class="cases">
            <div class="box" @click="gotoExternal('https://www.google.com/maps/d/u/0/viewer?mid=1G0xfB8QRIFsLkZHLCHVX4faL7RxDLPdG&ll=-7.301264482119104%2C112.72255259611939&z=15')">
                <span>Referral hospital (Indonesia)</span>
            </div>
            <div class="box" @click="gotoExternal('https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61')">
                <span>Global data map</span>
            </div>
        </div>
        <div class="cases">
            <div class="box" @click="gotoExternal('https://www.who.int/emergencies/diseases/novel-coronavirus-2019')">
                <span>WHO</span>
            </div>
            <div class="box" @click="gotoExternal('https://www.unicef.org/indonesia/coronavirus')">
                <span>UNICEF</span>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    methods: {
        gotoExternal (val) {
            window.location = val
        }
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
.cases {
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.box {
    -webkit-box-shadow: 0px 0px 14px -3px rgba(130,130,130,1);
    -moz-box-shadow: 0px 0px 14px -3px rgba(130,130,130,1);
    box-shadow: 0px 0px 14px -3px rgba(130,130,130,1);
    padding: 25px;
    border-radius: 10px;
    line-height: normal;
    width: 240px;
    height: 100px;
    margin: 5px;
    cursor: pointer;
    background-image: url('https://www.cnnindonesia.com/longform/gaya-hidup/20200313/laporan-mendalam-rumus-melawan-virus/assets/img/graphics/graph_64.png');
    background-position: right;
    background-size: 430px;
    background-repeat: no-repeat;
}
.box span {
    font-size: 13px;
    font-weight: 400;
}
</style>