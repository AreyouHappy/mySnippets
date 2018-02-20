# Swift 4 - CustomView (메모리 누수 해결하기.)

Memory leak 해결방법까지 같이 넣겠습니다.



필요한 파일

- CustomView.swift
- CustomView.xib





[1] CustomView.swift 파일 생성

```swift
class CustomView: UIView {
    class func instanceFromNib() -> UIView {
        return UINib(nibName: "CustomView", bundle: nil)
        .instantiate(withOwner: nil, options: nil)[0] as! UIView
    }
}
```

[2] CustomView.xib 파일 생성 후 설정.

`Custom Class` -> `Class` 에다가 CustomView 입력.



[3] 버튼 클릭시 화면전환을 하고 싶으면. 버튼 클릭 이벤트에다가 추가.

```swift
let sideView = CustomView.instanceFromNib()
sideView.frame = self.view.frame
subUiView.addSubview(sideView)
```



그러면 끝입니다.!

================================================

하지만 화면전환을 1번 화면 ,2번 화면 여러번 바꿀경우. 화면위에 올려지는 방식이기에 메모리에 계속 쌓이게 됩니다.

이것을 해결하기 위해서는 `willRemoveSubview` 을 이용하여 view를 제거하면 된다.

```swift

    @IBOutlet weak var subUiView: UIView!
	var check:Bool=false // 버튼 클릭시 마다 화면 전환
	let sideView = CustomView.instanceFromNib()
    let sideView2 = CustomView2.instanceFromNib()

  @IBAction func changeButton(_ sender: Any) {
        if(check){
            sideView.frame = self.view.frame
            subUiView.willRemoveSubview(sideView2)
            subUiView.addSubview(sideView)
        } else {
            sideView2.frame = self.view.frame
            subUiView.willRemoveSubview(sideView)
            subUiView.addSubview(sideView2)
            check = !check
        }

    }
```
