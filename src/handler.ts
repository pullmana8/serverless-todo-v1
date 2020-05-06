import * as log4js from 'log4js'
import { APIGatewayProxyResult, APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy'

const log = log4js.getLogger()
log.level = 'debug'

export const hello: APIGatewayProxyHandler = async(event: APIGatewayProxyEvent, _context): Promise<APIGatewayProxyResult> => {
    log.info('Processing event: ', event)

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }, null, 2),
    }
}