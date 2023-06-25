# nginx-proxy-trial
Nginx のプロキシ設定検証をした記録です。
調査ログは[zennのスクラップ](https://zenn.dev/akitatata/scraps/d052b0e28efb71)に残しています。

### 1. システム構成
#### 1-1. サーバー情報
* Nginx
  * 80ポートで稼働
  * server_name: localhost.example.com
* server
  * Expressで構築。3000ポートで稼働

#### 1-2. セットアップ
docker-compose を利用しています。
`docker-compose up`で実行。

### 2. サンプル（auth_request）
nginx, server（express）を組み合わせたプレ認証構成。
```plantuml
!include docs/auth_request_sequence.puml
```

動作確認コマンド（curl）
```code:curl_sumple
curl -X POST  http://localhost.example.com/home  -H "Authorization: accessToken_auth"
```
