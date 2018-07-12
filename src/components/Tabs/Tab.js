const Tab = {
	name: 'Tab',
	props: {
		isActive: {
			type: Boolean,
			default: false,
		},
		index: {
			type: Number,
			required: true,
		},
	},
	inject: ['tabClick'],
	methods: {
		handleClick() {
			this.tabClick(this.index);
		},
	},
	render(h) {
		return h(
			'button',
			{
				staticClass: 'tab',
				on: {
					click: this.handleClick,
				},
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
