## Build
Build the Docker containers.

```bash
$ docker-compose build
```

## Running the app
Run the Docker containers.

```bash
$ docker-compose up
```


## Remove containers
Remove the Docker containers.

```bash
$ docker-compose down
```


## API Documentation
Access the API documentation at:
[http://localhost:3000/swagger](http://localhost:3000/swagger)


## Database Seeding

Seed the database with dummy data.


```bash
$ curl -X 'POST' \
  'http://localhost:3000/seeds' \
  -H 'accept: */*' \
  -d ''
```


## Get Users
Retrieve the list of users.
```bash
$ curl -X 'GET' \
  'http://localhost:3000/users' \
  -H 'accept: */*'
```

## Get Distance
Find the relationship distance between two users.
```bash
$ curl -X 'GET' \
  'http://localhost:3000/users/relationship/65c294e205e3809016ba9efc/65c294e205e3809016ba9f07' \
  -H 'accept: */*'

Sample Response:
  {
  "distance": 2,
  "users": [
    {
      "_id": "65c294e205e3809016ba9efc",
      "name": "Chad Phillips",
      "friends": [
        "65c294e205e3809016ba9f1f",
        "65c294e205e3809016ba9f13",
        "65c294e205e3809016ba9f59",
        "65c294e205e3809016ba9f5e",
        "65c294e205e3809016ba9f15",
        "65c294e205e3809016ba9f1e",
        "65c294e205e3809016ba9f2c",
        "65c294e205e3809016ba9f39",
        "65c294e205e3809016ba9f3a",
        "65c294e205e3809016ba9f55"
      ],
      "__v": 0
    },
    {
      "_id": "65c294e205e3809016ba9f07",
      "name": "Genevieve Figueroa",
      "friends": [
        "65c294e205e3809016ba9f3a",
        "65c294e205e3809016ba9f01",
        "65c294e205e3809016ba9f0b",
        "65c294e205e3809016ba9f10",
        "65c294e205e3809016ba9f2d",
        "65c294e205e3809016ba9f32",
        "65c294e205e3809016ba9f3c",
        "65c294e205e3809016ba9f55"
      ],
      "__v": 0
    }
  ]
}
```


