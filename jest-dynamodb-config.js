export const tables = [
    {
        TableName: `todos`,
        KeySchema: [
            {
                AttributeName: 'todoId',
                KeyType: 'HASH'
            }
        ],
        AttributeDefinitions: [
            {
                AttributeName: 'todoId',
                AttributeType: 'S'
            }
        ],
        port: 8000
    },
];
