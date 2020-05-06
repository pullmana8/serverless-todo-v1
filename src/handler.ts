import { APIGatewayProxyHandler } from "aws-lambda/trigger/api-gateway-proxy"

const Log = require("@dazn/lambda-powertools-logger")

export const hello: APIGatewayProxyHandler = async (event, _context) => {
    Log.info('Processing event: ${event}')
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }, null, 2),
    }
}