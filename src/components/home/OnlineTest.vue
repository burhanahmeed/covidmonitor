<template>
    <div class="wrapper">
        <div class="box" @click="gotourl">
            <div class="inner-box">
                <span>More Information and Self-checkup Covid-19</span>
                <p><a :href="url">Learn More (external link)</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            url: 'https://kawalcovid19.id/'
        }
    },
    methods: {
        gotourl () {
            window.location = this.url;
        }
    }
}

</script>
<style scoped>
.wrapper {
    padding: 0px 5px;
    clear: both;
    color: white;
}
.box {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #2c3e50;
    padding: 10px;
    padding-left: 35px;
    margin-right: -20px;
    background-image: url('/img/corona.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    cursor: pointer;
}
.inner-box {
    width: 80%;
    line-height: normal;
}
span {
    font-size: 12px;
}
a {
    font-size: 9px;
    color: cornflowerblue; 
}
</style>