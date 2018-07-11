import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import {
	Tabs,
	TabsContainer,
	TabsPanels,
	Tab,
	TabPanel,
} from '../components/Tabs';

storiesOf('tabs', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return {
			components: { Tabs, TabsContainer, TabsPanels, Tab, TabPanel },
			data: () => {
				return {
					index: 0,
					value: text('Value', ''),
				};
			},
			methods: {
				updateme: function(i) {
					this.index = i;
				},
			},
			template: `<tabs :activeIndex="index">
				<TabsContainer>
					<Tab @click="updateme(0)"><template slot-scope="scope"><p>Hola 1 {{scope.isActive}}</p></template></Tab>
					<Tab @click="updateme(1)"><p>Hola 2 </p></Tab>
					<Tab @click="updateme(2)"><p>Hola 3</p></Tab>
				</TabsContainer>
				<TabsPanels>
					<TabPanel><p>Hola 0</p></TabPanel>
					<TabPanel><p>Hola 1</p></TabPanel>
					<TabPanel><p>Hola 2</p></TabPanel>
				</TabsPanels></tabs>`,
		};
	});
