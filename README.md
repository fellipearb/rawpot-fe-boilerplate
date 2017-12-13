# Boilerplate

### Containing...
- Gulp
- SASS
- es2015
- Built-in package managing using ZIP file through version bumping
- Package upload to FTP

### #TBD
- Retrieve specific version from server and serve it in local environment
- Retrieve specific version from server and build for deployment

## Install
*npm i*

## Run
*npm run dev* - sets up development server in local environment
*npm run bld* - bumps build version, build deployment version in /build/ directory, generates package in ZIP file, deploys it to FTP and /build/ directory
*npm run min* - bumps minor version, build deployment version in /build/ directory, generates package in ZIP file, deploys it to FTP and /build/ directory
*npm run maj* - bumps major version, build deployment version in /build/ directory, generates package in ZIP file, deploys it to FTP and /build/ directory
