## Swift 4 - CollectionView 사용하기 ( 체크리스트 )

### 체크리스트

1. CollectionView에 cell의 `identifier` 정의 했는가?
2. CollectionView에 cell의 `class` 를 연결 했는가?
3. View 부분에 `UICollectionViewDataSource,UICollectionViewDelegate` 를 상속 받았는가?
4. View 부분에 아래 코드를 넣었는가?

```swift
public func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int
    {
        return images.count
    }


    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "columCell", for: indexPath) as! MenuBarCell
        cell.imageView.image = images[indexPath.row]
        return cell;
    }
```
