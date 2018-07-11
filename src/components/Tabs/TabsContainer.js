const TabsContainer = {
	name: 'TabsContainer',
	props: {
		activeIndex: {
			type: Number,
			default: 0,
		},
	},
	render(h) {
		let index = 0;
		const children = this.$slots.default.map(vnode => {
			if (vnode.componentOptions && vnode.componentOptions.tag === 'Tab') {
				vnode.componentOptions.propsData = {
					isActive: this.activeIndex === index,
				};
				index++;
			}
			return vnode;
		});

		return h('div', children);
	},
};

export default TabsContainer;
