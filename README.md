# return_victory

To start the project your system has to fit the following requirements:

	-node latest
	-npm
	-webpack ^4.30.0

Run following commands to start the development: 
	
1. Install dependencies:

	***in git_bash***
	  npm install
	***in git_bash***
	
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
+-- dist/ # Builded project directory
¦    +-- css/
¦    ¦    +-- **/*.scss
¦    +-- js/
¦    ¦    +-- **/*.scss
¦    +-- static/
¦    ¦    +-- fonts/
¦    ¦    +-- images/
¦    ¦    +-- icons/
¦    +-- **/*.html    
¦    +-- index.html # Main entry point
+-- src/ # Development project directory
¦    +-- markup/
¦    ¦    +-- **/*.html # All your html goes here
¦    ¦    +-- index.html 
¦    +-- styles/ # All of yours scss goes here
¦    ¦    +-- **/*.scss
¦    +-- js/ # All of yours bundled js goes here
¦    ¦	  +-- **/*.js
¦    +-- index.js # Main entry point
+-- node_modules/ # node_modules default folder
+-- README.md
+-- package.json
+-- .babelrc
+-- .gitignore
+-- .postcss.config.js
L-- webpack.config.js
```

