<template>
  <div class="wrapper">
    <nav>
      <ul style="display: flex; justify-content: space-between">
        <li>
          <img src="/img/logo.png" style="width: 40px; display: inline" alt="">
          <span style="display: inline">Covid Monitor</span>
        </li>
        <li>
          <a href="https://github.com/burhanahmeed/covidmonitor" target="_blank">Contribute</a>
        </li>
      </ul>
    </nav>
    <div class="">
      <global-data style="margin: 20px" countryID="" />
      <regions-data style="margin: 20px" />
      <daily-updates style="margin: 20px" />
      <!-- <chart-stat style="margin: 20px" @selectcountry="changeCountry" /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import GlobalData from '@/components/home/Global'
import RegionsData from '@/components/home/Regions'
import DailyUpdates from '@/components/home/DailyUpdates'

export default {
  name: 'Index',
  data () {
    return {
      selectedCountry: ''
    }
  },
  methods: {
    changeCountry (val) {
      this.selectedCountry = val;
    }
  },
  components: {
    GlobalData,
    RegionsData,
    DailyUpdates
  }
}
</script>


<style scoped>
.wrapper {
  margin: auto;
  padding: 0;
  max-width: 400px;
  display: block;
  position: relative;
}
nav {
  background-color: #013243;
  padding: 1px;
  padding-right: 10px;
}
li {
  list-style: none;
  color: white;
  position: relative;
  display: inline;
  margin: 5px;
}
li a  {
  text-decoration: none;
  color: white;
  font-weight: 700;
  transition: color .3s ease-in-out;
}
li a:hover {
  color: #ebebeb;
}
</style>