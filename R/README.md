# mySnippets

### CSV 불러오기

```
dictionary<-read.csv('dictionary.csv')
```

### 통계
```
summary(data)
fivenum(data)
```

### 상관관계
- 수치형 데이터
```
cor(data)
cor(iris$Sepal.Width, iris$Sepal.Length)
시각화
a <- cor(data)
corrplot(a)
```
