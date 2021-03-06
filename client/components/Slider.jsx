Slider = React.createClass({
	componentDidMount() {
		$('.slider').slider();
        $('.slider').slider('next');
	},
	render() {
		return (
			<div className="slider">

			    <ul className="slides">
			      <li className="active">
			        <img src="http://lorempixel.com/580/250/nature/1"/>
			        <div className="caption center-align">
			          <h3>This is our big Tagline!</h3>
			          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
			        </div>
			      </li>
			      <li>
			        <img src="http://lorempixel.com/580/250/nature/2"/> 
			        <div className="caption left-align">
			          <h3>Left Aligned Caption</h3>
			          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
			        </div>
			      </li>
			      <li>
			        <img src="http://lorempixel.com/580/250/nature/3"/>
			        <div className="caption right-align">
			          <h3>Right Aligned Caption</h3>
			          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
			        </div>
			      </li>
			      <li>
			        <img src="http://lorempixel.com/580/250/nature/4"/> 
			        <div className="caption center-align">
			          <h3>This is our big Tagline!</h3>
			          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
			        </div>
			      </li>
			    </ul>
			</div>
		)
	}
})