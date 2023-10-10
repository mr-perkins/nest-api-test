## Nest Rest Api with Postgresql, Sequelize, Swagger and JWT token auth

To run this project you need to have Postgresql DB set up. After that copy env from example and fill all necessary fields for database. Also you can change other variables in it like token expiration time and so on.

## Packages installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## API Reference

### Swagger

```http
/swagger
```

### Auth
#### Sign up
```http
  POST /api/v1/auth/signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. |
| `email`      | `string` | **Required**. Email should be email |
| `password`      | `string` | **Required**. Min len 6 |
| `gender`      | `string` | **Required**. male or female |

#### Log in
```http
  POST /api/v1/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Email from signup |
| `password`      | `string` | **Required**. |

### Posts

In order to work with this endpoints you need to get jwt token from login or signup for new user and use it in your client.

#### Fetch all posts

```http
  GET /api/v1/posts
```
#### Get post by id

```http
  GET /api/v1/posts/{id}
```

#### Create a new post

```http
  POST /api/v1/posts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Min len 4|
| `body`      | `string` | **Required**. |

#### Update post by id

```http
  PUT /api/v1/posts/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Min len 4|
| `body`      | `string` | **Required**. |

#### Delete post by id

```http
  DELETE /api/v1/posts/{id}
```
