FROM node:boron

# Create app directory
RUN mkdir -p /homing_roster
WORKDIR /homing_roster

# Install app dependencies
COPY package.json /homing_roster
RUN npm install
RUN npm install -g bower
RUN ls -a
RUN bower install bower.json --allow-root --force


# Bundle app source
COPY . /homing_roster

EXPOSE 8080

CMD [ "npm", "start" ]
