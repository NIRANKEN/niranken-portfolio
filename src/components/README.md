# ディレクトリ構成と役割について

## 各ディレクトリの役割(描画側)

### components/atoms の役割

ここにページ内で繰り返し利用する最小部品(ローディングのくるくる、丸形のボタン、チェックボックスなど)を配置します。

### components/molecules の役割

よくページ内で繰り返し利用する部品グループ(Qiita の左側にある LGTM ボタンと数値がセットになったもの、削除アイコンと文字がセットになった削除ボタンなど)

### components/organisms の役割

UI 全体で一貫して繰り返される情報のコンテナ(Qiita の左側にある LGTM,Stock、ツイートなどがセットになったコンポーネント)

### containers/ecosystems の役割

Page の中で 1 つの役割をもったかたまりのこと。(twitter 記事の閲覧,投稿する役割の Component、twitter 記事の検索やトレンド・おすすめユーザーを探す役割、表示メニューなど)

### containers/environments の役割

View 全体、Page に対応。SPA(Single Page Application)の場合は多分 1 つになると思う

### FYI

- 参考記事: [A brief look at Atomic Components[和訳]](https://qiita.com/kahirokunn/items/b599d2cf04d2580c412c)

## 各ディレクトリの役割(Redux での状態管理側)

### ducks(store で状態管理したい対象(例えば TODO 管理であれば todos)ごとにディレクトリ切って下記 URL 参考にファイルをつくる)

https://noah.plus/blog/021/

https://github.com/alexnm/re-ducks

#### Action とは

store を更新する、基本的に DB に反映したり DB から取得したりする際に呼ぶ。

#### Reducer とは

Action 実行した結果について、どうやって store を更新するかについて記載する。

### store

ページ全体でグローバルに状態管理したいものについて、store で状態管理する。
それによって【理由記載】状態が一元管理できるので散らばらなくて保守しやすくなる。

### FYI

- [redux-toolkit 使った場合の Action, Reducer まわりの書き方](https://redux-toolkit.js.org/api/createReducer)
