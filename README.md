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
   **If the value of duration is greater equal 0 then the document will be expire after given number of minute**
   **If the value of duration is -1 then that document will never expire**
- createdAt        :   Date   (Optional)

#### Example

``` 
    Parameter : 

    {
        "task_name"        :  "Test",
        "task_description" :  "This is a demo task",
        "creator"          :  "Robin Singh",
        "duration"         :   1 

    }

```

```
    Response :

    {
    "success": true,
    "status": 200,
    "data": {
        "expireAt": "2020-09-09T19:44:41.710Z",
        "_id": "5f59306d9a72f1548035f696",
        "task_name": "Test",
        "task_description": "This is demo task",
        "creator": "Robin Singh",
        "duration": 1,
        "__v": 0
    }
}

```


### Fetching all tasks (https://board-infinity-assignment.herokuapp.com/list)

#### Method : GET

```
    Response :

    {
    "success": true,
    "status": 200,
    "data": [
        {
            "expireAt": null,
            "_id": "5f5923370340cd4999226a88",
            "task_name": "Test1",
            "task_description": "This is demo task",
            "creator": "Robin Singh",
            "duration": -1,
            "__v": 0,
            "createdAt": "2020-09-09T19:40:41.811Z"
        },
        {
            "expireAt": null,
            "_id": "5f5924480340cd4999226a8a",
            "task_name": "Test2",
            "task_description": "This is demo task",
            "creator": "Robin Singh",
            "duration": -1,
            "__v": 0,
            "createdAt": "2020-09-09T19:40:41.811Z"
        },
        {
            "expireAt": "2020-09-09T19:42:36.309Z",
            "_id": "5f592fb40bad9954227f31a6",
            "task_name": "Test3",
            "task_description": "This is demo task",
            "creator": "Robin Singh",
            "duration": 2,
            "__v": 0,
            "createdAt": "2020-09-09T19:40:41.812Z"
        }
    ]
}

```