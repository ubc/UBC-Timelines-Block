<?php
/**
 * UBC Timeline Block
 *
 * @package     UBC Blocks
 * @author      Kelvin Xu
 * @copyright   2021 University of British Columbia
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: UBC Timeline Block
 * Plugin URI:  https://ubc.ca/
 * Description: Provide Gutenberg block for user to create a timeline
 * Version:     1.0.0
 * Author:      Kelvin Xu
 * Text Domain: ubc-timeline-block
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace UBC\Blocks\Timeline;

add_action( 'init', __NAMESPACE__ . '\\load_block_assets', 10 );

/**
 * Load assets required by Timeline Block. Javascript and CSS
 * Enqueue to editor only
 *
 * @return void
 */
function load_block_assets() {
	wp_register_script(
		'ubc-timeline-script',
		plugins_url( 'build/block.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-editor',
		),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/block.js' ),
		true
	);

	wp_localize_script(
		'ubc-timeline-script',
		'ubc_timeline_admin',
		array(
			'plugin_dir_url' => trailingslashit( plugins_url( '', __FILE__ ) ),
		)
	);

	wp_register_style(
		'ubc-timeline-style',
		plugins_url( '/build/block.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/block.css' )
	);

	register_block_type(
		'ubc/timeline',
		array(
			'editor_script' => 'ubc-timeline-script',
			'style'         => 'ubc-timeline-style',
			'attributes'    => array(
				'data'           => array(
					'type'    => 'array',
					'default' => array(),
				),
				'setDefaultData' => array(
					'type'    => 'boolean',
					'default' => true,
				),
			),
		)
	);
}
