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
+-- config
¦    +-- webpack.build.conf.js # Settings for production
¦    +-- webpack.common.conf.js # Common settings for development and production
¦    +-- webpack.dev.conf.js # Settings for development
+-- node_modules/ # node_modules default folder
+-- public/ # Builded project directory
¦    +-- chunks/ # Dynamic loaded modules
¦    ¦    +-- *.js 
¦    +-- css/ # Dynamic loaded css
¦    ¦    +-- *.css
¦    +-- static/
¦    ¦    +-- favicon/ # All size favicon
¦    ¦    +-- fonts/ # All fonts
¦    ¦    +-- icons/ # All icons
¦    ¦    +-- images/ # All images
¦    +-- broserconfig.xml # Settings for phones
¦    +-- index.html # Main entry point
¦    +-- main.js # Main js file
¦    +-- manifest.json # Site's settings
¦    +-- sw.js # Server Worker
+-- src/ # Development project directory
¦    +-- backend/ 
¦    ¦    +-- *.php 
¦    +-- js/ # All of yours bundled js goes here
¦    ¦    +-- **/*.js 
¦    +-- modules/ # All of yours modules go here
¦    ¦    +-- **/*.js
¦    +-- static/ # All of yours images/icons/fonts/favicon go here
¦    ¦	  +-- **/*.(woff|woff2|eot|ttf|svg|bmp|gif|jpeg|png)
¦    +-- styles/ # All of yours styles go here
¦    ¦	  +-- **/*.scss
¦    ¦	  +-- common.scss
¦    +-- index.html # Main entry point
¦    +-- index.js # Main js file
+-- .babelrc
+-- .gitignore
+-- broserconfig.xml
+-- build-sw.js
+-- manifest.json
+-- package-lock.json
+-- package.json
+-- .postcss.config.js
+-- README.md
```
