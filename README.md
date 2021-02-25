# serverless 

Serverless Application
- signup

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

```bash
$ curl -X POST 'https://xxxx.execute-api.ap-northeast-1.amazonaws.com/prd/signup' -d '{"email":"example@gmail.com","role":"admin"}' -H 'Content-Type:application/json' -H 'x-api-key:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
```
or
```bash
$ sls invoke -f signup --stage prd -p ./src/functions/signup/mock.json --log
```
