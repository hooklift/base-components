<template>
	<button
		class="hl-button"
		:disabled="isLoading"
		:class="`${variant} ${size}`"
		@click="$emit('click', $event)">
		<hl-spinner v-if="isLoading"/>
		<slot v-else>Submit</slot>
	</button>
</template>

<script>
import hlSpinner from './hlSpinner.vue';

export default {
	components: {
		hlSpinner,
	},
	props: {
		size: {
			default: 'auto',
			type: String,
			validator(prop) {
				return ['auto', 'large'].indexOf(prop) > -1;
			},
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		variant: {
			default: 'primary',
			type: String,
		},
		isDisabled: {
			default: false,
			type: Boolean,
		},
	},
};
</script>

<style lang="scss" scoped>
.hl-button {
	border-radius: $small-radius;
	border: none;
	cursor: pointer;
	text-decoration: none;
	padding: 0 1.6rem;
	box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.05);
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
	line-height: 2.5;
	font-weight: bold;
	display: flex;
	justify-content: center;

	&.primary {
		background-color: $primary-color;
		color: $neutral-color;
	}

	&.secondary {
		background-color: $neutral-color;
		color: $primary-color;
	}

	&.large {
		padding: 0 3.2rem;
		font-size: 1.9rem;
		height: 4.8rem;
		line-height: 2.9375rem;
	}

	&:disabled {
		cursor: default;
	}
}
</style>
