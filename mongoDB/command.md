https://docs.bitnami.com/virtual-machine/components/mongodb/

### 목록보기
```
show dbs
show collections
```


### db 선택
```
use dbname
```


### db 생성
```
use dbname
# 하나 꼭 만들어야함.
db.users.insert({username: "idle"})
```

### 로그인
mongo admin --username root -p

### 아이디 만들기
```
use dbname
db.createUser({ user: "<username>",
          pwd: "<password>",
          roles: ["dbAdmin", "readWrite"]
})
```

### 아이디 삭제
```
db.removeUser("id")
```

### 백업
````
mongodump --authenticationDatabase admin --username root --password PASSWORD -d DATABASE_NAME
````

### 복구
```
mongorestore --authenticationDatabase admin --username root --password PASSWORD PATH_TO_BACKUP_FILE

mongorestore -h naver.com:27014 -d database_name -u user -p password ./ --drop;
```
