# set base image to our desired version of Node
FROM mhart/alpine-node:6.9.3

# Expose the app port
EXPOSE 10001

# copy files from this directory '.' to '/var/www'
ADD . /var/www

# set cwd for RUN and CMD
WORKDIR /var/www

# install dependencies
RUN npm install

# start the app server
CMD npm start
# profit || throw new Error('unable to profit')
