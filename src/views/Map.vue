<template>
  <div class="wrapper" style="color: white">
    <div class="header">
      <router-link to="/" >Back</router-link>
    </div>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-circle v-for="(c, idx) in circle" :key="idx"
        :lat-lng="c.center"
        :radius="c.radius"
        :color="c.color"
        @click="selectPoint(c)"
        />
    </l-map>
    <div>
      <detail-map @closedetail="closedPoint" :props="{ 'payload': selectedData }" />
    </div>
  </div>
</template>

<script>
import {LMap, LTileLayer, LCircle} from 'vue2-leaflet';
import axios from 'axios'
import 'leaflet/dist/leaflet.css';

import DetailMap from '../components/map/Details'

export default {
  components: {
    DetailMap,
    LMap,
    LTileLayer,
    LCircle
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 4,
      center: [-3.411503, 112.495209],
      circle: [{
        center: [30.9756403482891, 112.270692167452],
        radius: 4500,
        color: 'red'
      }],
      selectedData: false
    }
  },
  mounted () {
    this.circle = [];
    axios.get('https://covid19.mathdro.id/api/confirmed').then(res => {
      let temp = res.data;
      for (let index = 0; index < temp.length; index++) {
        this.circle.push({
          center: [temp[index].lat, temp[index].long],
          radius: 50000,
          color: 'red',
          confirmed: temp[index].confirmed,
          recovered: temp[index].recovered,
          deaths: temp[index].deaths,
          active: temp[index].active,
          lastUpdate: temp[index].lastUpdate,
          country: temp[index].countryRegion,
          region: temp[index].provinceState
        });  
      }
      
    })
  },
  methods: {
    selectPoint (val) {
      this.selectedData = val;
    },
    closedPoint () {
      this.selectedData = false;
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin: auto;
  padding: 0;
  max-width: 450px;
  display: block;
  position: relative;
  overflow: hidden;
  height: 100vh;
}
.header {
  position: fixed;
  max-width: 450px;
  width: 100%;
  padding: 10px;
  background-color: #2c3e50;
  z-index: 999999;
}
.header a {
  font-weight: 700;
}
</style>