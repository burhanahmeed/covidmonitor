<template>
  <div class="wrapper">
    <nav>
      <ul style="display: flex; justify-content: space-between">
        <li>
          <span class="text-label" style="font-size: 11px">Current outbreak</span>
          <h3 class="text-label title">COVID-19</h3>
          <span class="text-detail">We gather the data from various API data sources.</span>
          <span class="new-date">{{ new Date() | date }}</span>
        </li>
        <li>
          <a href="https://github.com/burhanahmeed/covidmonitor" target="_blank">
            <img src="/img/header_icon.png" alt="">
          </a>
        </li>
      </ul>
    </nav>
    <div class="conten">
      <online-test style="margin: 20px" />
      <global-data style="margin: 20px" countryID="" />
      <regions-data style="margin: 20px" />
      <daily-updates style="margin: 20px" />
      <!-- <chart-stat style="margin: 20px" @selectcountry="changeCountry" /> -->
      <external-link style="margin: 20px" />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import GlobalData from '@/components/home/Global'
import RegionsData from '@/components/home/Regions'
import DailyUpdates from '@/components/home/DailyUpdates'
import OnlineTest from '@/components/home/OnlineTest'
import ExternalLink from '@/components/home/ExternalLink'

import * as dayjs from 'dayjs'

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
    DailyUpdates,
    OnlineTest,
    ExternalLink
  },
  filters: {
    date (val) {
      return dayjs(val).format('dddd, D MMM YYYY');
    }
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
  background-color: white;
}
nav {
  padding: 10px;
  padding-right: 10px;
}
li {
  list-style: none;  
  position: relative;
  display: inline;
  margin: 5px;
  line-height: normal;
}
li a  {
  text-decoration: none;  
  font-weight: 700;
  transition: color .3s ease-in-out;
}
li a:hover {
  color: #ebebeb;
}
.text-label {
  font-weight: 800;
  color: black;
}
.title {
  font-size: 25px;
}
.text-detail {
  font-size: 9px;
  color: grey;
}
li a img {
  height: 25px;
}
.conten {
  padding-bottom: 60px;
}
.new-date {
  display: block;
  font-weight: 800;
  font-size: 17px;
  margin-top: 10px;
}
</style>
