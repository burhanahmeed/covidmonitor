<template>
  <div class="wrapper">
    <nav>
      <ul style="display: flex; justify-content: space-between">
        <li>Covid Monitor</li>
        <li>
          <a href="" target="_blank">Contribute</a>
        </li>
      </ul>
    </nav>
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-6 xs:col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2...">
        <global-data style="margin: 20px" :countryID="selectedCountry" />
        <chart-stat style="margin: 20px" @selectcountry="changeCountry" />
      </div>
      <div class="col-span-6 xs:col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-4...">

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import GlobalData from '@/components/home/Global'
import ChartStat from '@/components/home/ChartStat'

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
    ChartStat
  }
}
</script>


<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
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