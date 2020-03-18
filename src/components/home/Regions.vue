<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 px-1 py-1">
        <span style="font-weight: 700; color: white; font-size: 13px">Filter by country</span>
        <div style="padding: 20px">
            <v-select style="background-color: white; width: 250px" v-model="selectedID" :options="countries"></v-select>
            <div class="stat-zone">
                <div class="cases">
                    <label for="">Cases</label>
                    <span>{{ number.cases | format }}</span>
                </div>
                <div class="cases outside">
                    <div class="recover outside-rate">
                        <label for="">Recover</label>
                        <span>{{ number.recover | format }}</span>
                        <span class="rate rate-recover">{{ recover }}% recovery rate</span>
                    </div>
                    <div class="fatality outside-rate">
                        <label for="">Deaths</label>
                        <span>{{ number.deaths | format }}</span>
                        <span class="rate rate-fatal">{{ fatality }}% fatality rate</span>
                    </div>
                </div>
                <div class="updated">
                    <span>Last update {{ number.lastUpdate | timeago }}</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import VueSelect from 'v-select2-component'
import axios from 'axios'
import * as timeago from 'timeago.js';

export default {
    components: {
        'v-select': VueSelect
    },
    data () {
        return {
            countries: [],
            selectedID: '',
            number: {
                cases: '',
                recover: '',
                deaths: '',
                lastUpdate: ''
            }
        }
    },
    watch: {
        selectedID (val) {
            this.changeData(val);
        }
    },
    filters: {
        format (val) {
            return new Intl.NumberFormat().format(val)
        },
        timeago (val) {
            return timeago.format(val)
        }
    },
    methods: {
        changeData (val) {
            axios.get(`https://covid19.mathdro.id/api/countries/${val}`).then(res => {
                let temp = res.data;
                this.number.cases = temp.confirmed.value;
                this.number.recover = temp.recovered.value;
                this.number.deaths = temp.deaths.value;
                this.number.lastUpdate = temp.lastUpdate;
            })
        }
    },
    mounted () {
        axios.get('https://covid19.mathdro.id/api/countries').then(res => {
            let cn = res.data.countries;
            for (const key in cn) {
                this.countries.push({
                    text: key,
                    id: cn[key]
                })
            }
        })
        axios.get(`https://covid19.mathdro.id/api`).then(res => {
            let temp = res.data;
            this.number.cases = temp.confirmed.value;
            this.number.recover = temp.recovered.value;
            this.number.deaths = temp.deaths.value;
            this.number.lastUpdate = temp.lastUpdate;
        })
    },
    computed: {
        fatality () {
            return ((this.number.deaths / this.number.cases) * 100).toFixed(1)
        },
        recover () {
            return ((this.number.recover / this.number.cases) * 100).toFixed(1)
        }
    }
}
</script>

<style>
.select2-container {
    width: 250px !important;
}
.stat-zone {
    color: white;
}
.cases {
    padding: 10px;
    text-align: center;
}
.cases label {
    display: block;
    font-size: 11px;
    color: white;
}
.cases span {
    font-weight: 800;
    font-size: 20px;
}
.outside {
    display: flex;
    justify-content: space-around;
}
.outside-rate span{
    display: block;
}
.rate {
    font-size: 11px !important;
    color: white;
    font-weight: 200 !important;
}
.rate-fatal {
    background-color: red;
}
.rate-recover {
    background-color: green;
}
.fatality {
    color: red;
}
.recover {
    color: green;
}
.updated {
    font-size: 10px;
}
</style>