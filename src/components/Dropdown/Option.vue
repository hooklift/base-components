<template>
	<div
		class="option"
		@click="emitUpdate(value)">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: [String, Number],
			required: true,
		},
		label: {
			type: [String],
			required: true,
		},
	},
	methods: {
		emitUpdate: function() {
			this.$parent.updateOption(this.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.option {
	padding: $small_spacing;
	border-bottom: $grey-border;

	position: relative;
	display: flex;
	justify-content: center;
}
</style>
