export default ( { attributes } ) => {
    const { data } = attributes;
    return (
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
    );
}