/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $owner: String!
    $title: String!
    $taskStatus: String!
    $description: String!
  ) {
    createTask(
      owner: $owner
      title: $title
      taskStatus: $taskStatus
      description: $description
    ) {
      id
      owner
      title
      description
      taskStatus
    }
  }
`;
export const updateTaskStatus = /* GraphQL */ `
  mutation UpdateTaskStatus($id: ID!, $taskStatus: String!) {
    updateTaskStatus(id: $id, taskStatus: $taskStatus) {
      id
      owner
      title
      description
      taskStatus
    }
  }
`;
export const updateTaskBody = /* GraphQL */ `
  mutation UpdateTaskBody($id: ID!, $title: String!, $description: String!) {
    updateTaskBody(id: $id, title: $title, description: $description) {
      id
      owner
      title
      description
      taskStatus
    }
  }
`;
