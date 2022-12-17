FROM alpine:3.15

ENV NODE_VERSION 18.12.1

RUN npm install -g pnpm

WORKDIR /home/app

COPY *.json pnpm-lock.yaml ./
COPY README.md ./
COPY . .

RUN pnpm install
RUN pnpm run build

EXPOSE 3001

CMD ["pnpm", "start"]