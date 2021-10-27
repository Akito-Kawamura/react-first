FROM node:17.0

ENV LANG=C.UTF-8
ENV APP=/app
RUN mkdir -p ${APP}
WORKDIR ${APP}

COPY package.json yarn.lock ${APP}/
RUN set -x && \
    apt-get update && \
    apt-get install -y nodejs yarn && \
    yarn install && \
    yarn cache clean && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


COPY . ${APP}