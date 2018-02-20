image url을 통해서 불러오기

```swift
let gifURL : String = "image url..."
let imageURL = UIImage.gifImageWithURL(gifURL)
let imageView3 = UIImageView(image: imageURL)
//        imageView3.frame = CGRect(x: 20.0, y: 390.0, width: self.view.frame.size.width - 40, height: 150.0)
self.imageView.addSubview(imageView3)

```
