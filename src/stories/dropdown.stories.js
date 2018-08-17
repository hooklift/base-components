import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Dropdown, Option } from '../components/Dropdown';

storiesOf('Dropdown', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return {
			components: { Dropdown, hoption: Option },
			data: () => {
				return {
					option: 1,
					styleObject: {
						color: 'red',
						fontSize: '13px',
						display: 'inline-block',
					},
				};
			},
			methods: {
				updateOption: function(i) {
					this.option = i;
				},
			},
			template: `<div :style="styleObject"><dropdown
			class="howBigWeWantTheDropdown"
			@optionChanged="updateOption"
			:value="option"
			title="Permission level">
			<hoption
				:value=1
				label="Admin">
				<h4>Admin</h4>
			</hoption>
			<hoption
				:value=2
				label="Read">
				<h4>Read</h4>
			</hoption>
			<hoption
				:value=3
				label="Write">
				<h4>Write</h4>
			</hoption>
		</dropdown></div>`,
		};
	})

	.add('no title', () => {
		return {
			components: { Dropdown, hoption: Option },
			data: () => {
				return {
					option: 1,
					styleObject: {
						color: 'red',
						width: '80vw',
					},
				};
			},
			methods: {
				updateOption: function(i) {
					this.option = i;
				},
			},
			template: `<dropdown
			class="howBigWeWantTheDropdown"
			@optionChanged="updateOption"
			:value="option"
		>
			<hoption
				:value=1
				label="Admin">
				<div :style="styleObject"><h4>Admin</h4></div>
			</hoption>
			<hoption
				:value=2
				label="Read">
				<h4>Read</h4>
			</hoption>
			<hoption
				:value=3
				label="Write">
				<h4>Write</h4>
			</hoption>
		</dropdown>`,
		};
	});
