const Tabs = {
	name: 'Tabs',
	props: {
		activeIndex: {
			type: Number,
			default: 0,
		},
	},
	provide() {
		return {
			tabClick: this.handleTabClick,
		};
	},
	methods: {
		handleTabClick: function(i) {
			this.$emit('change', i);
		},
	},
	render(h) {
		const children = this.$slots.default.map(vnode => {
			if (vnode.componentOptions && vnode.componentOptions.tag) {
				vnode.componentOptions.propsData = {
					activeIndex: this.activeIndex,
				};
			}
			return vnode;
		});

		return h('div', children);
	},
};

export default Tabs;
