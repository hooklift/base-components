const TabPanels = {
	props: {
		activeIndex: {
			type: Number,
			default: 0,
		},
	},
	render() {
		//From all the panels only render the matching index.
		const children = this.$slots.default.filter(
			vnode =>
				vnode.componentOptions &&
				(vnode.componentOptions.tag === 'TabPanel' ||
					vnode.componentOptions.tag === 'tab-panel')
		);
		return <div>{children[this.activeIndex]}</div>;
	},
};

export default TabPanels;
