<template>
	<div 
		class="hl-spinner" 
		:class="`${variant} ${size}`">
		<div class="hl-spinner__circle"/>
		<div class="hl-spinner__circle hl-spinner__circle--delayed"/>
	</div>
</template>

<script>
export default {
	props: {
		size: {
			default: 'medium',
			type: String,
			validator(prop) {
				return ['small', 'medium', 'large'].indexOf(prop) > -1;
			},
		},
		variant: {
			default: 'primary',
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
@keyframes bounce {
	0%,
	100% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
}

.hl-spinner__circle {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: #fff;
	opacity: 0.55;
	animation: bounce 2s infinite ease-in-out;
}

.hl-spinner {
	position: relative;
	width: 4rem;
	height: 4rem;

	&.small {
		width: 2rem;
		height: 2rem;
	}

	&.large {
		width: 10rem;
		height: 10rem;
	}

	&.secondary {
		.hl-spinner__circle {
			background-color: $primary-color;
		}
	}
}

.hl-spinner__circle--delayed {
	animation-delay: -0.5s;
}
</style>
