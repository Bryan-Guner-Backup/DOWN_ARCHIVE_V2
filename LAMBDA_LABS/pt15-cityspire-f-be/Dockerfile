FROM node:12

WORKDIR ./

COPY package*.json ./

RUN npm install

COPY . .


ENV OKTA_URL_ISSUER="https://auth.lambdalabs.dev/oauth2/default"
ENV OKTA_CLIENT_ID=0oa18is3355KlyP5C4x7
ENV NODE_ENV="production"
ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]