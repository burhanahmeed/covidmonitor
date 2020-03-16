<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
        <div class="inline-block relative w-64">
            <select v-model="selectedID" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option v-for="(cn, idx) in countries" :key="idx" :value="cn.value" >{{ cn.title }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <donat-chart style="width: 250px" :chartdata="chartdata" :options="options" v-if="show" />
    </div>
</template>

<script>
import axios from 'axios'
import DonatChart from '@/components/chart/Doughnut'

export default {
    components: {
        DonatChart
    },
    data () {
        return {
            show: true,
            countries: [],
            selectedID: '',
            chartdata: {
                datasets: [{
                    data: [],
                    backgroundColor: ['#ffac0f', '#2cca00', '#f71f1f']
                }],
                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Confirmed',
                    'Recovered',
                    'Deaths'
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted () {
        this.show = false;
        axios.get('https://covid19.mathdro.id/api/countries').then(res => {
            let cn = res.data.countries;
            for (const key in cn) {
                this.countries.push({
                    title: key,
                    value: cn[key]
                })
            }
        })
        axios.get('https://covid19.mathdro.id/api').then(res => {
            let temp = res.data;
            this.chartdata.datasets[0].data = [temp.confirmed.value, temp.recovered.value, temp.deaths.value]
            this.show = true;
        })
    },
    methods: {
        selected (val) {
            this.selectedID = val
        },
        changeData (val) {
            this.show = false;
            axios.get(`https://covid19.mathdro.id/api/countries/${val}`).then(res => {
                let temp = res.data;
                this.chartdata.datasets[0].data = [temp.confirmed.value, temp.recovered.value, temp.deaths.value]
                this.show = true;
            })
        }
    },
    watch: {
        async selectedID (val) {
            this.$emit('selectcountry', val);
            this.changeData(val);
        }
    }
}
</script>