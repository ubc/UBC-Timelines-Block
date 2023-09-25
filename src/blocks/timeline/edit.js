/**
 * BLOCK: Tabs
 */
const { InspectorControls } = wp.blockEditor;
const { PanelBody, Button, TextareaControl, TextControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;
const { useEffect, useState, Fragment } = wp.element;

import { deepCopy } from './helper';

const Edit = ( { attributes, setAttributes } ) => {
	const { data = [], setDefaultData = true } = attributes;
	const [ openedTimelineIndex, setOpenedTimelineIndex ] = useState( 0 );

	useEffect(() => {
		if( ! setDefaultData ) {
			return;
		}

		setAttributes( {
			data: [ generateDefaultTimeline(), {
				...generateDefaultTimeline(),
				title: 'Timeline 2'
			} ],
			setDefaultData: false
		} );
	  }, [ setDefaultData ]);

	const generateDefaultTimeline = () => {
		return {
			info: 'JAN 01, 2020',
			title: `Timeline ${ data.length + 1 }`,
			description: 'Description Placeholder',
			is_period: false
		};
	}

	const updateTimelineProperty = ( index, property, value ) => {
		const copy = deepCopy( data );
		copy[ index ][ property ] = value;
		setAttributes( {
			data: copy
		} );
	}

	const isFirst = index => {
		return index === 0;
	}

	const isLast = index => {
		return index === data.length - 1;
	}

	const timelineMoveTo = ( currentIndex, targetIndex ) => {
		const newData = deepCopy( data )
		if( ! newData[ targetIndex ] || ! newData[ currentIndex ] ) {
			return;
		}
		const temp = newData[ targetIndex ];
		newData[ targetIndex ] = newData[ currentIndex ];
		newData[ currentIndex ] = temp;
		setAttributes( {
			data: newData
		} );
		setOpenedTimelineIndex( targetIndex );

	}

	const deleteTimeLine = index => {
		const newData = data.filter( ( item, timelineIndex ) => {
			return index !== timelineIndex;
		} );
		setAttributes( {
			data: newData
		} );
	}

	const stripHTML = html => {
		return html.replace(/(<([^>]+)>)/gi, "");;
	}

	return (
		<>
			<ul className="timeline timeline-centered">
				{ data.map( ( timeline, index ) => {
					return (
						<li key={ index } className={ `timeline-item${ timeline.is_period ? ' period' : '' }` }>
							<div className="timeline-info">
								<span>{ timeline.info }</span>
							</div>
							<div className="timeline-marker"></div>
							<div className="timeline-content">
								<h3 className="timeline-title" dangerouslySetInnerHTML={ { __html: timeline.title } }></h3>
								<p dangerouslySetInnerHTML={ { __html: timeline.description } }></p>
							</div>
						</li>
					);
				} ) }
			</ul>
			<InspectorControls>
				<PanelBody title={ __( 'Timelines' ) }>
					<Button
						isSecondary
						onClick={ e => {
							e.preventDefault();
							setAttributes( {
								data: [ ...data, generateDefaultTimeline() ]
							} );
						} }
						style={ { marginBottom: '10px' } }
					>{ __( 'Add Timeline Item' ) }</Button>
					{ data.map( ( timeline, index ) => {
						return (
							<PanelBody
								key={ index }
								title={ stripHTML( timeline.title ) }
								opened={ index === openedTimelineIndex }
								onToggle={ () => {
									if( openedTimelineIndex === index ) {
										setOpenedTimelineIndex( -1 );
										return;
									}
									
									setOpenedTimelineIndex( index )
								} }
							>
								<div className="timeline-block-ctrl-group">
									<Button
										isSecondary
										onClick={ e => {
											e.preventDefault();
											timelineMoveTo( index, index - 1 );
										} }
										disabled={ isFirst( index) }
									>
										<img src={ `${ ubc_timeline_admin.plugin_dir_url }src/images/chevron-up-solid.svg` } alt="move up" />
									</Button>
									<Button
										isSecondary
										onClick={ e => {
											e.preventDefault();
											timelineMoveTo( index, index + 1 );
										} }
										disabled={ isLast( index) }
									>
										<img src={ `${ ubc_timeline_admin.plugin_dir_url }src/images/chevron-down-solid.svg` } alt="move down" />
									</Button>
									<Button
										isSecondary
										onClick={ e => {
											e.preventDefault();
											if ( ! confirm( 'Would you like to remove selected timeline item?' ) ) {
												return;
											}
											deleteTimeLine( index );
										} }
									>
										<img src={ `${ ubc_timeline_admin.plugin_dir_url }src/images/trash-alt-solid.svg` } alt="trash" />
									</Button>
								</div>
								<TextControl
									label={ __( 'Title' ) }
									value={ timeline.title }
									onChange={ value => {
										updateTimelineProperty( index, 'title', value );
									} }
								/>
								{ ! timeline.is_period ? (
									<Fragment>
										<TextControl
											label={ __( 'Info' ) }
											value={ timeline.info }
											onChange={ value => {
												updateTimelineProperty( index, 'info', value );
											} }
										/>
										<TextareaControl
											label={ __( 'Description' ) }
											value={ timeline.description }
											help={ __( 'Accept html code' ) }
											onChange={ value => {
												updateTimelineProperty( index, 'description', value );
											} }
										/>
									</Fragment>
								) : '' }
								<ToggleControl
									label="Is Timeline Divider?"
									checked={ timeline.is_period }
									onChange={ () => {
										updateTimelineProperty( index, 'is_period', ! timeline.is_period );
									} }
								/>
							</PanelBody>
						);
					} ) }
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Edit;
