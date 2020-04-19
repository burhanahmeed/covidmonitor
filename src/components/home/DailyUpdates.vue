<template>
    <div>
        <div class="section title" @click="openSection">
            <h2 style="font-weight: 800">Daily update</h2>
            <img class="arrow-down" src="/img/arrowdown.svg" alt="arrow down" v-if="!isOpen">
            <img class="arrow-down" src="/img/arrowup.svg" alt="arrow down" v-if="isOpen">
        </div>
        <div :class="{'content-wrap': true, 'open': isOpen}">
            <div class="rounded overflow-hidden shadow-lg">
                <div class="updates">
                    <items v-for="(i, idx) in dailyData" :key="idx" :props="{ 'payload': i }" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Items from './daily/Items'
import axios from 'axios'
export default {
    components: {
        Items
    },
    data () {
        return {
            dailyData: [],
            isOpen: false
        }
    },
    methods: {
        openSection () {
            this.isOpen = !this.isOpen;
        }
    },
    mounted () {
        axios.get('https://covid19.mathdro.id/api/daily').then(res => {
            let data = res.data;
            for (let index = data.length - 1; index > 0; index--) {
                this.dailyData.push({...data[index]});
            }
        });
    }
}
</script>

<style scoped>
.updates {
    max-height: 400px;
    overflow-y: scroll;
}
.section {
    padding: 15px;
    line-height: normal;
}
.section img {
    height: 14px;
}
.section h2 {

}
.title {
    display: flex;
    justify-content: space-between;
}
.content-wrap {
    height: 0;
    overflow: hidden;
    transition: .5s ease;
}
.open {
    height: 360px;
}
</style>