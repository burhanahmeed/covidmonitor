<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
        <img class="w-full" :src="countryID == '' ? `https://covid19.mathdro.id/api/og` : `https://covid19.mathdro.id/api/countries/${countryID}/og`" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <p class="text-white text-xs">
                This amazing API by Mathdroid
            </p>
        </div>
        <div class="px-6 py-4" style="font-size: 9px">
            <a :href="`https://twitter.com/search?q=#covid`" target="_blank">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" style="font-size: 9px">#covid</span>
            </a>
            <a :href="`https://twitter.com/search?q=#corona`" target="_blank">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" style="font-size: 9px">#corona</span>
            </a>
            <a :href="`https://twitter.com/search?q=#viruses`" target="_blank">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700" style="font-size: 9px">#viruses</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['countryID']
}
</script>