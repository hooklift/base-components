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
				style: {
					border: 'none',
					textDecoration: 'none',
					cursor: 'pointer',
					backgroundColor: 'transparent',
					padding: 0,
				},
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
