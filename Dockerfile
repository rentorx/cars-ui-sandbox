# base image
FROM node:alpine

# Copy all local files into the image.
WORKDIR /usr/src/frontend
COPY package.json ./

RUN yarn
COPY . ./
RUN yarn build
RUN yarn global add serve

EXPOSE 3000
CMD ["serve", "-p", "3000", "-s", "build"]
