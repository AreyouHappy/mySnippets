## git commit, push취소 방법

1. `git commit` 취소방법

   ```bash
   git reset HEAD~1 # 최근 1개 취소 ~2는 최근 2개 취소

   ```

2. `git push` 취소방법

- 첫번째 방법
    ```bash
    git reset HEAD~1 # 최근 1개 취소 ~2는 최근 2개 취소
    git push origin +master # 취소한거 push
    ```
- 2번째 방법

    ```bash
    git reset HEAD~1 # 최근 1개 취소 ~2는 최근 2개 취소
    git push origin -f # 취소한거 push
    ```
