<template>
	<div>
		<Show></Show>
		<router-view></router-view>

	</div>

</template>

<script>
import Search from '../search/Search'
import Show from '../show/Show'
export default {
	name: "Heard",
	components:{Show},
}
</script>

<style scoped>

</style>
