// import * as log4js from 'log4js'
import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

/* For debugging purposes
* const log = log4js.getLogger()
* log.level = 'debug'
*/

// const helloTs: Function = async (event: AWSLambda.APIGatewayEvent) => {
export const hello: APIGatewayProxyHandler = async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> =>{
    /* log.info('Processing event: ', event) */
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            input: event,
        }, null, 2),
    }
}

// export default helloTs