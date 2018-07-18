const TabPanel = {
	props: {
		activeIndex: {
			type: Number,
			default: 0,
		},
	},
	render() {
		//From all the panels only render the matching index.
		return <div>{this.$slots.default}</div>;
	},
};

export default TabPanel;
