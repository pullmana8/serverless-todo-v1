/* eslint-disable no-undef */
import { DocumentClient } from 'aws-sdk/clients/dynamodb'

const isTest = process.env.JEST_WORKER_ID
const config = {
    convertEmptyValues: true,
    ...(isTest && {
        endpoint: 'localhost:8000',
        sslEnabled: false,
        region: 'local-env',
    }),
}

const ddb = new DocumentClient(config)

it('should insert item into table', async () => {
    await ddb
        .put(
            {
                TableName: 'todos',
                Item: {
                    todoId: '1',
                    hello: 'world'
                }
            }
        ).promise()

    const { Item } = await ddb.get({
        TableName: 'todos',
        Key: {
            todoId: '1'
        }
    }).promise()

    expect(Item).toEqual({
        todoId: '1',
        hello: 'world'
    })
})