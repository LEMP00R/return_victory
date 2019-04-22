# return_victory

To start the project your system has to fit the following requirements:

	-node latest
	-npm
	-webpack ^4.30.0

Run following commands to start the development: 
	
1. Install dependencies:
	
2. Start webpack to build the project and watch for changes in development mode:

	***in git_bash***
	  npm run dev
	***in git_bash***

3. To build the project in production mode:

	***in git_bash***
	  npm run build
	***in git_bash***

The project structure:

```
├── dist/ # Builded project directory
│	 ├── css/
│	 │	  ├── **/*.scss
│	 ├── js/
│	 │	  ├── **/*.scss
│	 ├── static/
│	 │    ├── fonts/
│	 │	  ├── images/
│	 │	  ├── icons/
│	 ├── **/*.html    
│	 ├── index.html # Main entry point
├── src/ # Development project directory
│	 ├── markup/
│	 │    │
│	 │	  ├── views/
│	 │	  │    ├── index.hbs # Index view (main page), /main route
│	 │	  │    ├── data.json # Data for main page
│	 │	  │    ├── pagename/ # Folder with name of the page,
│	 │	  │    │	│        # e.g. folder with name "about" will handle /about route
│	 │	  │    │	│
│	 │	  │    │	├── index.hbs # View for the parent folder page
│	 │	  │    │	├── data.json # Specific local data for current view
│	 │	  │    │	├── nestedpage/ # You can nest as many times as you want
│	 │	  │    │	│			    # the route will be .../parentfolder/currentfolder etc.
│	 │	  │    │	│
│	 │    ├── partials/ # This folder contains all partials for handlebars
│	 │	  │	   ├── layouts/ # Partials in this folder will be registered with prefix layout
│	 │	  │	   │    │		# e.g. layout/defaut
│	 │	  │	   │    ├── default.hbs # Default layout 
│	 │	  │    ├── components/ # Partials in this folder will be registered without prefix,
│	 │	  │    │	│	       # but if you nest them in folder, the name of the partial will 
│	 │	  │    │	│	       # match the folder structure with the base folder components/.
│	 │	  │    │	│	       # Example: if components is placed into folder 
│	 │	  │    │	│		   # components/slider/component-name.hbs 
│	 │	  │    │	│		   # you will call it with {{> slider/component-name }}
│	 │    │    │    │
│	 │    │    │    ├── footer.hbs # Call it with {{> footer }}
│    │    │    │    ├── header.hbs # Call it with {{> header }}
│    │    │    │    ├── **/*.hbs
│    │    │    │    
│    │    ├── data/
│    │    │	   ├── foldername/filename.{js,json} # Global data, will be available in any  	  │	   │	│	 │					               # view, component, etc.
│	 ├── styles/ # All of yours scss goes here
│    │    ├── **/*.scss
│    ├── js/ # All of yours bundled js goes here
│    │	  ├── **/*.js
├── node_modules/ # node_modules default folder
├── README.md
├── package.json
├── .babelrc
├── .gitignore
└── webpack.config.js
```
