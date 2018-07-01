import { storiesOf } from '@storybook/vue';
import { hlButton } from '../';
import { withKnobs, text } from '@storybook/addon-knobs';

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('default', () => ({
		components: { hlButton },
		data: () => {
			return {
				btnText: text('button', 'Submit'),
			};
		},
		template: `<hl-button :value="value">{{btnText}}</hl-button>`,
	}))
	.add('large', () => ({
		components: { hlButton },
		data: () => {
			return {
				btnText: text('button', 'Big button'),
			};
		},
		template: `<hl-button size="large">{{btnText}}</hl-button>`,
	}))
	.add('secondary', () => ({
		components: { hlButton },
		data: () => {
			return {
				btnText: text('button', 'Alt button'),
			};
		},
		template: `<hl-button size="large" variant="secondary">{{btnText}}</hl-button>`,
	}));
