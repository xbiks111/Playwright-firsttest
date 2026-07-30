FROM mcr.microsoft.com/playwright:v1.62.0

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

CMD ["npx", "playwright", "test"]