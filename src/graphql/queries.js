/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      owner
      title
      description
      taskStatus
    }
  }
`;
export const allTasks = /* GraphQL */ `
  query AllTasks($nextToken: String) {
    allTasks(nextToken: $nextToken) {
      items {
        id
        owner
        title
        description
        taskStatus
      }
      nextToken
    }
  }
`;
