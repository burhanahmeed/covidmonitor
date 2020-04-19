<template>
    <div class="outter">
        <div class="section title">
            <h2>Southeast Asia Ranking</h2>
        </div>
        <table>
            <tr>
                <th>Countries</th>
                <th>Infected</th>
                <th>Deaths</th>
            </tr>
            <template v-if="data.length != 0">
                <template v-for="(d, idx) in data">
                    <tr :key="idx">
                        <td width="150px">
                            <img class="flags" style="display: inline" :src="d.countryInfo.flag" alt="">
                            <span style="display: inline; margin-left: 5px">{{ d.country }}</span>
                        </td>
                        <td>
                            <span class="line">{{ d.cases | format }}</span>
                            <span class="line added orange">+ {{ d.todayCases }} today</span>
                        </td>
                        <td>
                            <span class="line">{{ d.deaths | format }}</span>
                            <span class="line added red">+ {{ d.todayDeaths }} today</span>
                        </td>
                    </tr>
                </template>
            </template>
            <template v-else>
                <tr>
                    <td style="text-align: center" colspan="4"> We're fetching the data...</td>
                </tr>
            </template>
        </table>    
    </div>    
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            code: ['MY', 'PH', 'ID', 'TH', 'SG', 'VN', 'KH', 'BN', 'MM', 'TL', '418'],
            data: []
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
    mounted () {
        this.init()    
    },
    methods: {
        async init () {
            let datas = [];
            for (const cn of this.code) {
                let { data } = await axios.get(`https://corona.lmao.ninja/v2/countries/${cn}?yesterday=true`);
                datas.push(data);
                // console.log(data)
            }
            this.data = this.selectionSort(datas);
        },
        selectionSort(arr){
          var minIdx, temp, 
          len = arr.length;
          for(var i = 0; i < len; i++){
            minIdx = i;
            for(var  j = i+1; j<len; j++){
               if(arr[j].cases>arr[minIdx].cases){
                  minIdx = j;
               }
            }
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
          }
          return arr;
        }
    }
}
</script>

<style scoped>
.outter {
    height: 88vh;
    overflow-y: scroll;
}
.section {
    padding: 15px;
    line-height: normal;
}
h2 {
    font-weight: 800;
    font-size: 15px;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 13px;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.flags {
    height: 10px;
}
.line {
    display: block;
}
.added {
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
</style>