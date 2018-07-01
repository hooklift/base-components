import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

import { hlInput } from '../';

storiesOf('Input', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return {
			components: { hlInput },
			data: () => {
				return {
					error: text('Error', ''),
					value: text('Value', ''),
				};
			},
			template: `<hl-input placeholder="The placeholder" :error="error" :value="value"></hl-input>`,
		};
	});
