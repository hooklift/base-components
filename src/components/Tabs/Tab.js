const Tab = {
	name: 'Tab',
	props: {
		isActive: {
			type: Boolean,
			default: false,
		},
	},
	render(h) {
		return h(
			'button',
			{
				staticClass: 'tab',
				class: {
					active: this.isActive,
				},
				on: this.$listeners,
			},
			/**
			 * We iclude scoped slots if any of the children need access to the isActive prop
			 */
			this.$scopedSlots.default
				? this.$scopedSlots.default({ isActive: this.isActive })
				: this.$slots.default
		);
	},
};

export default Tab;
