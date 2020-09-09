# Board-Infinity-Assignment

- REST API in nodejs with mongodb as database for creating tasks with a duration (in minutes). 

## Day 1:

- Required dependency install ( express, mongoose, body-parser )
- Mongodb database created at Mongodb Atlas
- Task Schema created
- Task route created 
- Express server created

# Day 2:

- Task expiry logic implemented
- I have taken reference from [TTL indexes](https://docs.mongodb.com/manual/tutorial/expire-data/)

# Day 3:

## API END POINTS

### Creating new task (https://board-infinity-assignment.herokuapp.com/add)

#### Method : POST

#### Parameter
- task_name        :   String (Required)
- task_description :   String (Required)
- creator          :   String (Required)
- duration         :   Number (Required)
- createdAt        :   Date   (Optional)

#### Example
- Parameter :

{
    "task_name"        :  "Test",
    "task_description" :  "This is a demo task",
    "creator"          :  "Robin Singh",
    "duration"         :   2 

}

- Response :

{
    "expireAt": "2020-09-09T17:34:29.460Z",
    "_id": "5f5911e9e41200374b29fe6c",
    "task_name": "Test",
    "task_description": "This is demo task",
    "creator": "Robin Singh",
    "duration": 1,
    "__v": 0
}



### Fetching all tasks (https://board-infinity-assignment.herokuapp.com/list)

#### Method : GET

- Response :

[
    {
        "expireAt": "2020-09-09T17:43:39.146Z",
        "_id": "5f59140fe41200374b29fe6d",
        "task_name": "Test",
        "task_description": "This is demo task",
        "creator": "Robin Singh",
        "duration": 1,
        "__v": 0,
        "createdAt": "2020-09-09T17:42:41.707Z"
    }
]
