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

### 그룹별로 카운트

```
library(dplyr) #라이브러리를 불러오기
count <- summer %>% #count에다가 group별 count
group_by(City) %>% # City로 구별
summarise(n=n())
count
```
2번째 방법
```
Countries=as.data.frame(table(summer$Country,summer$MedalCount))
colnames(Countries)=c("Country","a","MedalCount")
```

### merge, 데이터 합치기, 컬럼 합치기, 병합
- http://rfriend.tistory.com/51

```
#data 1과 data2에 Country 칼럼이 있어야함.

mg<-merge(x = data1, y = data2, by = "Country")

# x데이터는 다 살리기
mg<-merge(x = data1, y = data2, by = "Country")


```


### 칼럼명 바꾸기, 이름 바꾸기
rename

```
#count 테이블에서 City를 Country로 바꾸기
library(reshape)
count<-rename(count,c("City"="Country"))
```
그외
```
colnames, rowname 로 가능
colname(m1)=c('a','b','c')
```

### na, N/A 제거

```
Cars93_1 <- na.omit(Cars93)
```

### 칼럼 위치 변경

```
m 칼럼의 순서를 1,3,4,2 순으로 변경
m<-m[,c(1,3,4,2)]
```


### 의사결정 트리

```
install.packages("rpart")
library(rpart)
(m<-rpart(Species ~., data=iris))
plot(m, compress=TRUE, margin=.2)
text(m, cex=1.5)
```

### 올림픽 금은동 그래프 시각화

link - https://www.kaggle.com/raphkop/olympic-games-data-analysis
```
#Country 그룹별로, Medal count 세기
Countries=as.data.frame(table(summer$Country,summer$MedalCount))
# colname 바꾸기
colnames(Countries)=c("Country","a","MedalCount")
# 정렬하기
Countries=Countries[order(-Countries$MedalCount),]
# 상위 5개만 추출
CountriesFilter=head(Countries,n=5)
# 필터 적용
topCountryFilter=summer[summer$Country %in% CountriesFilter$Country,]

# 아래는 그래프 선으로
options(repr.plot.width=6, repr.plot.height=3)
x=ddply(topCountryFilter, .(Country,Year), numcolwise(sum))
ggplot(x,aes(Year,MedalCount,color=Country,group=Country))+geom_point()+geom_line()

# 아래는 그래프로(네모)
y=ddply(topCountryFilter, .(Country,Medal), numcolwise(sum))
ggplot(y,aes(x=reorder(Country,MedalCount),y=MedalCount,fill=Medal,group=Medal))+geom_bar(stat='identity')
```
