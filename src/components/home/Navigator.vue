<template>
    <div>
    	<div class="section title" @click="goto(options.path)">
	        <h2 style="font-weight: 800">{{ options.title }}</h2>
	        <span>Open >></span>
	    </div>
    </div>
</template>

<script type="text/javascript">
	export default {
		props: ['options'],
		methods: {
			goto (val) {
				this.$router.push(val);
			}
		}
	}
</script>

<style scoped>
.section {
	padding: 15px;
	line-height: normal;
}
h2 {
    font-weight: 800;
}
.title {
    /*display: flex;
    justify-content: space-between;*/
    cursor: pointer;
    transition: .3s ease;
}
.title:hover {
	background-color: #f4f4f4;
	border-radius: 9px;
}
.title span {
	display: inline-block;
	margin-top: 5px;
	font-size: 10px;
	font-weight: 700;
	background-color: #238cf0;
	color: white;
	padding: 5px 8px;
	border-radius: 5px;
}
</style>