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

// export const clearMocks = true;
// export const coverageDirectory = "coverage";
// export const preset = "@shelf/jest-dynamodb";
// export const testEnvironment = "node";

/* module.exports = {
    tables: [
        {
            */