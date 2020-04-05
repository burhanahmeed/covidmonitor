<template>
	<div class="wrapper">
    <div class="header">
      <router-link to="/" >Back</router-link>
    </div>
		<table-data style="margin: 20px 0; margin-top: 44px" />
	</div>
</template>

<script>
  import TableData from '../components/continent/Table'
	export default {
    components: {
      TableData
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
  background-color: white;
}
.header {
  position: fixed;
  max-width: 450px;
  width: 100%;
  padding: 10px;
  background-color: #2c3e50;
  z-index: 999999;
  color: white;
}
.header a {
  font-weight: 700;
}
</style>