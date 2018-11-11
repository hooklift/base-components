<template>
	<div class="hl-input">
		<transition name="label">
			<label
				class="label"
				v-show="value"
				for="hl_input">{{ placeholder }}</label>
		</transition>
		<input
			:type="type"
			:class="[{hasError: Boolean(error)}]"
			v-bind="$attrs"
			:value="value"
			:placeholder="placeholder"
			:autocomplete="autocomplete"
			:name="name"
			v-on="inputListeners"
		>
		<transition name="label">
			<span
				class="hl-input-error"
				v-show="error">{{ error }}</span>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'text',
		},
		error: {
			type: String,
			default: '',
		},
		value: {
			type: String,
			default: '',
		},
		inputClass: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		autocomplete: {
			type: String,
			default: 'off',
		},
		name: {
			type: String,
			default: '',
			required: false,
		},
	},
	computed: {
		inputListeners: function() {
			var vm = this;
			// `Object.assign` merges objects together to form a new object
			return Object.assign(
				{},
				// We add all the listeners from the parent
				this.$listeners,
				// Then we can add custom listeners or override the
				// behavior of some listeners.
				{
					// This ensures that the component works with v-model
					input: function(event) {
						vm.$emit('input', event.target.value);
					},
				}
			);
		},
	},
};
</script>

<style lang="scss" scoped>
.hl-input {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	margin: $small_spacing 0;

	input {
		color: $input-label-color;
		border-radius: 0.4rem;
		border: none;
		box-shadow: inset 0 2px 2px 1px rgba(0, 0, 0, 0.1);
		font-weight: 500;
		font-size: 1.3rem;
		background-color: $neutral-color;
		padding-inline-start: $small_spacing;
		min-height: 3rem;
		text-overflow: ellipsis;
		flex-grow: 1;

		&:focus {
			box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);
			background-color: none;
		}

		&:disabled {
			background-color: $overlay-color__light;
			color: $dark-blue-text;
		}

		&.hasError {
			border: 1px solid #e64611;
		}
	}
}

.hl-input-error {
	color: #e64611;
	font-weight: bold;
	position: absolute;
	bottom: -$small_spacing * 2;
}

.label {
	position: absolute;
	top: -$small_spacing * 2;
}

.label-enter-active {
	transition: all 0.2s ease;
}
.label-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.label-enter,
.label-leave-to {
	transform: translateY(1rem);
	opacity: 0;
}
</style>
