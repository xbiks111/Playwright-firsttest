FROM mcr.microsoft.com/playwright:v1.62.0-node-22

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx playwright install --with-deps chromium firefox webkit

CMD ["npx", "playwright", "test"]