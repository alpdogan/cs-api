## Build

```bash
$ docker-compose build
```

## Running the app

```bash
$ docker-compose up
```


## Remove containers

```bash
$ docker-compose down
```


## Remove containers

```bash
$ docker-compose down
```



## API Documentation

http://localhost:3000/swagger


## Database Seeding
```bash
$ curl -X 'POST' \
  'http://localhost:3000/seeds' \
  -H 'accept: */*' \
  -d ''
```


## Get Users
```bash
$ curl -X 'GET' \
  'http://localhost:3000/users' \
  -H 'accept: */*'
```

## Get Distance
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


