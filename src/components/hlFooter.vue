<template>
	<div class="hl__footer">
		<div class="links left">
			<a
				v-for="option in left"
				:key="option.label"
				:href="option.url"
				v-once
			>
				{{ option.label }}
			</a>
		</div>

		<hl-icon/>

		<div class="links right">
			<a
				v-for="option in right"
				:key="option.label"
				:href="option.url"
				v-once
			>
				{{ option.label }}
			</a>
		</div>
	</div>
</template>

<script>
import hlIcon from './hlIcon.vue';

export default {
	components: {
		hlIcon,
	},
	data() {
		//TODO: Update links to static data.
		return {
			left: [
				{
					label: 'Terms',
					url: '/terms',
				},
				{
					label: 'Privacy',
					url: '/privacy',
				},
				{
					label: 'Security',
					url: '/security',
				},
				{
					label: 'Contact',
					url: '/contact',
				},
			],
			right: [
				{
					label: 'API',
					url: '/api',
				},
				{
					label: 'About',
					url: '/about',
				},
				{
					label: 'Blog',
					url: '/blog',
				},
				{
					label: 'Status',
					url: '/status',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.hl__footer {
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	grid-gap: $small_spacing;
	border-top: $grey-border;
	padding: $small_spacing 0;
	font-size: 1.2rem;
	color: $overlay-color__light;
	align-items: center;
}

.links {
	display: flex;
}

.right {
	justify-content: flex-end;
}

a {
	margin: 0 $small_spacing;
	border-bottom: none; // Overrides global style
	&:hover {
		border-bottom: 1px solid;
	}
}

@media (max-width: map-get($breakpoints, tablet)) {
	.hl__footer {
		grid-template-columns: 1fr 1fr 1fr;
		justify-items: center;
		grid-template-areas: 'logo left right';
	}

	.links {
		flex-direction: column;
		align-items: center;
	}

	.right {
		grid-area: right;
	}

	.left {
		grid-area: left;
	}

	.smallLogo {
		grid-area: logo;
	}
}
</style>
