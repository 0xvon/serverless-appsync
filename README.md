# cassette serverless

Serverless Application
- signup teacher & manager

# Dependencies

- AWS(API Gateway + Lambda)
- Serverless Framework
- TypeScript
- NodeJS 14.x

# Setup

```
$ npm i
```

# Deploy

```
$ sls deploy
```

# Call API

```
$ curl -X POST 'https://xxxx.execute-api.ap-northeast-1.amazonaws.com/prd/signup' -d '{"name":"masato"}' -H 'Content-Type:application/json'
```