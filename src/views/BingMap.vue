<template>
	<div class="wrapper">
	    <div class="header">
	      <router-link to="/" >Back</router-link>
	    </div>
		<div class="content" style="max-width: 460px;">
			<iframe class="content" style="width: 103%" src="https://bing.com/covid/"></iframe>
		</div>
	</div>
</template>

<style scoped type="text/css">
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
.content {
	margin-top: 44px;
	height: 100vh;
	display: block;
}
</style>