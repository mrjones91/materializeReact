# [materializeReact: Posted on Medium](https://medium.com/dij-please/initializing-materializecss-in-react-ab4dcd0cb784#.hs8ton1jy)

##Prologue
Going from MaterializeCSS to production can sometimes be a hurdle. Most developers these days have moved beyond writing their web pages in either simple HTML or a templating system that will just insert a jumble of HTML, CSS, JS and their prospective server side code ie Coldfusion or Razer (C#/.NET). In my case, I'm using the Meteor framework which definitely falls into the new and sometimes odd landscape of modern web development.

Fortunately, most Meteor devs have been able to avoid the issue of "complicated" templating with Meteor Development Group's (MDG) own HTML based template, Blaze. This tutorial, however, will cover how to go from Blaze into React seeing as most of the community is just counting the days until MDG finally and officially discontinues their baby Blaze in favor of [Facebook's golden child](https://facebook.github.io/react/index.html).

I'll be walking through this from my setup as a Meteor developer. Meteor will allow for the quick and easy use of jQuery, CSS, and React to be rendered in our page by default (version 1.2.1).

The completed version of this project will be available [here](https://github.com/mrjones91/materializeReact)

##Project Setup
Bypassing [installation](https://www.meteor.com/install), let's create the project and add the following packages to our project:

- [Materialize](https://atmospherejs.com/materialize/materialize) 
- [React](https://atmospherejs.com/meteor/react)
- [Flow Router](https://atmospherejs.com/kadira/flow-router)
- [React-Layout](https://atmospherejs.com/kadira/react-layout)

In your command line of choice
```
meteor create projectName

cd projectName

meteor add materialize:materialize

meteor add react

meteor add kadira:flow-router

meteor add kadira:react-layout
```

##Project Structure
Since we're just going over the frontend, here's the level of detail to Meteor project structure we'll be using.
```
projectName
    .meteor
    client
        app
        components
        styles
    lib
        router
    private
    public
    server
```
All of what we'll be covering will use the "client" and "lib" folder and their subdirectories. 


##Creating a Page with React and jsx
JSX is a "new" file extension and format of Javascript and HTML to get used to, if this is your first foray into React. JSX enforces its own standard HTML quality that can improve your HTML quality along with a few key differences that include: 

- Every element has to be properly closed
- The 'class' attribute, when used in a .jsx file needs to be specified as className.
- Adjacent elements need to be enclosed in a parent element.

Again, our project structure and the files we'll be creating(Signified by *)
```
projectName
    .meteor
    client
        app
            * app.html
            * App.jsx
        components
        styles
    lib
       *  router.js
```

#####app.html
```
<head>
  <title>Materialize React</title>
  <link rel="icon" href="http://res.cloudinary.com/dijital-technologies/image/upload/v1453853654/dij/favicon.png"/>
</head>

<body>

  <div id="render-target"></div>
  <!--the "render-target" id specifies where our React will plug into our HTML when it is rendered-->

</body>
```
#####App.jsx
```
App = React.createClass({
    render() {
        return (
            //<Slider/> 
            //^ Currently commented out, this is where our Slider component will be plugged into our app
            <p> This is your React page! </p>
        )
    }
})
```

Normally occupying its own directory in the lib folder, we'll just use 1 router file here for our simple app, today.

Our simple router function takes in the route for the first parameter and an object of options for the second. Here, we're taking action and using ReactLayout to render our App component into our app.html page.
#####router.js
```
FlowRouter.route("/", {
  action: function() {             
    ReactLayout.render(App);
  }
});
```
The following CSS will be a little more important later when you need to scale and position your new slider.
#####app.css
```
#mySlider{
	width: 50vw;
    margin-left: auto;
    margin-right: auto;
}

```

These few files will get us started with something showing in browser. Back in your command line terminal enter the following command to run your meteor app:
```
meteor
```
And point your browser to localhost:3000




##Melding MaterializeCSS into React
Now, to add the get rid of the placeholder text and create the beginning of our Slider component!
```
projectName
    .meteor
    client
        app
        components
            * Slider.jsx
        styles
    lib
```
#####Slider.jsx
```
Slider = React.createClass({
	componentDidMount() {
		console.log('Slider mounted');
	},
	render() {
		return (<div>Here is your Slider</div>)
        }
});
```
With this added, you can now uncomment the Slider in the App.jsx file and see our placeholder.
#####App.jsx
```
App = React.createClass({
    render() {
        return (
            <Slider/> 
            <p> This is your React page! </p>
        )
    }
})
```





The sample 4 image slider as provided from [Materialize Media page](http://materializecss.com/media.html)
```
<div class="slider">
    <ul class="slides">
      <li>
        <img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>
```
The problem with this code, as you should be able to tell, it includes "class" and for some reason, the Materialize docs give us examples with <img/> tags that aren't properly closed with a slash. React will not allow this so our render function will look more like:
#####Slider.jsx
```
Slider = React.createClass({
	componentDidMount() {
		console.log('Slider mounted');
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
});
```

##Initializing Our Slider and Other DOM Actions
The default method for initializing as provided from [Materialize Media page](http://materializecss.com/media.html)
```
$(document).ready(function(){
      $('.slider').slider('start');
    });
```

To achieve this in React, however, we won't be checking for a $(document).ready or window.onLoad or any other way of checking if the page is rendered.

React has a method for its components called [componentDidMount()](https://facebook.github.io/react/tips/dom-event-listeners.html)
This function is called after the component transitions from the virtual DOM of React and into the actual DOM of the browser. Thus, any need we'd have of initializing values is best placed here.

#####Slider.jsx
```
Slider = React.createClass({
    componentDidMount() { 
        $('.slider').slider(); //Initialize slider
        $('.slider').slider('next'); //Roll slider past initial fadein
   },
   render() {
        ...
   }
});
```


###Voila!
You have now used and initialized MaterializeCSS component with React in a Meteor application.
