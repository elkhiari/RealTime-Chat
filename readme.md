# MERN Chat Application

A real-time chat application built with the MERN (MongoDB, Express.js, React, Node.js) stack, featuring a frontend developed using React.js and styled with Tailwind CSS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Data Models](#data-models)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a real-time chat application developed using the MERN stack. It allows users to communicate with each other in one-on-one and group chats, offering features like user authentication, real-time messaging, message attachments, online presence status, notifications, and more.

## Features

- User registration and authentication.
- Create one-on-one and group chats.
- Real-time messaging using WebSocket technology.
- Message attachments (images, files, etc.).
- Online presence status.
- Mobile-friendly user interface.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB database set up and configured.

## Usage

- Register a new account or log in.
- Create or join chat rooms.
- Start sending and receiving messages in real-time.
- Manage your account and preferences.

## Technologies Used

- **MongoDB**: Database for storing chat data.
- **Express.js**: Backend framework.
- **React.js**: Frontend library for building user interfaces.
- **Tailwind CSS**: CSS framework for styling the application.
- **Node.js**: Backend runtime environment.
- **Socket.io**: Real-time WebSocket communication.
- **JWT**: For user authentication.

## Data Models

### User Model

| Field        | Type     | Description                              |
| ------------ | -------- | ---------------------------------------- |
| \_id         | ObjectId | Unique user identifier                   |
| username     | String   | User's username                          |
| email        | String   | User's email address                     |
| password     | String   | Hashed user password                     |
| profilePic   | String   | URL to user's profile picture (optional) |
| onlineStatus | Boolean  | User's online status                     |
| lastActive   | Date     | Timestamp of last user activity          |
| createdAt    | Date     | Timestamp of user registration           |
| updatedAt    | Date     | Timestamp of last user profile update    |

### Chat Model

| Field         | Type     | Description                                          |
| ------------- | -------- | ---------------------------------------------------- |
| \_id          | ObjectId | Unique chat identifier                               |
| chatType      | String   | Type of chat (e.g., one-on-one, group)               |
| participants  | Array    | List of User IDs participating in the chat           |
| messages      | Array    | List of Message IDs in the chat                      |
| lastMessageAt | Date     | Timestamp of the last message in the chat (optional) |
| chatName      | String   | Name of the group chat (optional)                    |
| chatAvatar    | String   | URL to chat avatar image (optional)                  |

### Message Model

| Field      | Type     | Description                          |
| ---------- | -------- | ------------------------------------ |
| \_id       | ObjectId | Unique message identifier            |
| sender     | ObjectId | User ID of the message sender        |
| content    | String   | Message content                      |
| createdAt  | Date     | Timestamp of message creation        |
| readStatus | Boolean  | Read status of the message           |
| attachment | String   | URL to message attachment (optional) |
| chatId     | ObjectId | Chat ID associated with the message  |

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve the project. Please follow our [code of conduct](CONTRIBUTING.md) when contributing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
