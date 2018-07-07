<template>
	<hooklift-icon :class="size"/>
</template>

<script>
import HookliftIcon from '../assets/HookliftIcon.svg';

export default {
	components: {
		HookliftIcon,
	},
	props: {
		size: {
			default: 'small',
			type: String,
			validator: value => ['small', 'medium', 'large'].indexOf(value) !== -1,
		},
	},
};
</script>

<style lang="scss" scoped>
.small {
	height: 2.2rem;
	width: 2.2rem;
}

.medium {
	height: 4rem;
	width: 4rem;
}

.large {
	height: 10rem;
	width: 10rem;
}
</style>
