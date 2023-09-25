/**
 * BLOCK: UBC Wiki Embed.
 */

// Import block dependencies and components.
import Edit from './edit';
import Save from './save';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'ubc/timeline', {
	title: __( 'UBC Timeline', 'ubc-timeline' ),
	description: __( 'Provide Gutenberg block for user to create a timeline.', 'ubc-timeline' ),
	icon: 'time',
	keywords: [ __( 'Timeline', 'ubc-timeline' ) ],
	category: 'layout',
	example: {
		attributes: {
			data: [
				{
					info: 'JAN 01, 2020',
					title: `Timeline 1`,
					description: 'Description Placeholder',
					is_period: false
				},
				{
					info: 'JAN 01, 2020',
					title: `Timeline 2`,
					description: 'Description Placeholder',
					is_period: false
				}
			],
			setDefaultData: true
		},
	},
	edit: Edit,
	save: Save,
} );
