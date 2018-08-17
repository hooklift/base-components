<template>
	<div
		class="dropdown"
		@click="toggleOptions">
		<div :class="[{ active: showOptions }, 'label']">
			{{ label }} <span class="arrow">▾</span>
		</div>
		<div
			v-show="showOptions"
			class="options">
			<div
				v-if="title"
				class="dropdown-title">{{ title }}</div>
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			required: true,
			type: [String, Number],
		},
		title: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			showOptions: false,
			label: '',
		};
	},
	mounted() {
		/**
		 * If the options are open we close them if the user opens another
		 * dropdown, or blurs the component.
		 */
		const listener = e => {
			if (
				e.target !== this.$el &&
				!this.$el.contains(e.target) &&
				this.showOptions
			) {
				this.toggleOptions();
			}
		};
		document.addEventListener('click', listener);
		this.$once('hook:destroyed', () => {
			document.removeEventListener('click', listener);
		});
		this.setLabel();
	},
	updated() {
		this.setLabel();
	},
	methods: {
		toggleOptions: function() {
			this.showOptions = !this.showOptions;
		},
		updateOption: function(v) {
			this.$emit('optionChanged', v);
		},
		setLabel() {
			this.$children.forEach(element => {
				if (this.value === element.$options.propsData.value) {
					this.label = element.$props.label;
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.dropdown {
	display: inline-block;
	// grid-gap: $small_spacing;
	// grid-template-columns: 1fr;
	color: $dark-blue-text;
	font-size: 1.2rem;
	position: relative;
}

.label {
	background-color: $overlay-color__light;
	padding: $small_spacing / 2 $small_spacing;
	border-radius: $small-radius;
	display: flex;
	justify-content: space-between;
	&.active {
		background-color: $neutral_color;
	}
}

.dropdown-title {
	background-color: $dark-grey-box;
	padding: $small_spacing;
	border-bottom: $grey-border;
	border-top-left-radius: $small-radius;
	border-top-right-radius: $small-radius;
}

.options {
	background-color: $neutral-color;
	border-radius: $small-radius;
	position: absolute;
	display: grid;
	grid-template-columns: 1fr;
	top: 3.5rem;
	z-index: 2;
	:last-child {
		border-bottom: none;
	}
}
</style>
