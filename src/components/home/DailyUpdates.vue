<template>
     <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
         <span style="padding: 5px; color: white; font-size: 13px; font-weight: 700">Daily updates</span>
        <div class="updates">
            <items v-for="(i, idx) in dailyData" :key="idx" :props="{ 'payload': i }" />
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
            dailyData: []
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
    overflow: scroll;
}
</style>