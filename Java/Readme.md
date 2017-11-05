

### awt Swing frame
window 창 띄우기
```
import java.awt.*;
import javax.swing.*;

class SwingWin extends JFrame { //스윙 윈도우 클래스 정의
SwingWin(String title) {   // 생성자
   super(title);
}
}


public class javaLayout {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		   SwingWin win2 = new SwingWin("내가 만든 새창");
		   win2.setSize(300, 250);
		   win2.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		   win2.setVisible(true);
	}

}
```

### Swing 레이아웃

BorderLayout
```
setLayout(new BorderLayout());
setLayout(new BorderLayout(5, 5));   // 가로 5픽셀, 세로 5픽셀의 여백

```
