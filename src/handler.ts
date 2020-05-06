import log4js from 'log4js'
import { APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy'

const log = log4js.getLogger('app')

export const hello: APIGatewayProxyHandler = async (event, _context) => {
    log.info('Processing event ${event}')
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }, null, 2),
    }
}