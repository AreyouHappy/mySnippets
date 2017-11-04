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
- https://rstudio-pubs-static.s3.amazonaws.com/27134_f8052fbae4fe4402824ebb9fe080d876.html
- 수치형 데이터
```
cor(data)
cor(iris$Sepal.Width, iris$Sepal.Length)
시각화
a <- cor(data)
corrplot(a)
```

###  카운트
library(dplyr) 
count <- summer %>%
group_by(City) %>%
summarise(n=n())
count
