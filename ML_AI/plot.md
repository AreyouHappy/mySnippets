## plot 기본 선언
```py
import matplotlib.pyplot as plt
%matplotlib inline
```
%matplotlib inline - jupyter에서 화면에 출력.

```py
plt.figure(figsize=(6,4))
plt.plot([1,2,3,4,3,4,3,4,3,45,3,4,3,4,4,3],'red')
plt.grid()
plt.title('title name')
plt.xlabel('x axis name')
plt.ylabel('y axis name')
plt.show()
```
figsize - 사이즈
grid - 그리드 표시

```py
plt.axis([0, 6, 0, 20]) # [xmin, xmax, ymin, ymax]
```

```py
character	description
'-'	solid line style
'--'	dashed line style
'-.'	dash-dot line style
':'	dotted line style
'.'	point marker
','	pixel marker
'o'	circle marker
'v'	triangle_down marker
'^'	triangle_up marker
'<'	triangle_left marker
'>'	triangle_right marker
'1'	tri_down marker
'2'	tri_up marker
'3'	tri_left marker
'4'	tri_right marker
's'	square marker
'p'	pentagon marker
'*'	star marker
'h'	hexagon1 marker
'H'	hexagon2 marker
'+'	plus marker
'x'	x marker
'D'	diamond marker
'd'	thin_diamond marker
'|'	vline marker
'_'	hline marker



character	color
‘b’	blue
‘g’	green
‘r’	red
‘c’	cyan
‘m’	magenta
‘y’	yellow
‘k’	black
‘w’	white

```
파이썬 표시 모양, 점, 선, 플러스 등.



```py

```
