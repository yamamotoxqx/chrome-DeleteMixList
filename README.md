# chrome-DeleteMixList

YouTubeのURLからミックスリスト部分を削除してリダイレクトします。

YouTubeの"あの"ミックスリストをサクッと消し去る！

「この曲、最高！…って、ミックスリストかーい！」

YouTubeあるあるですよね？ お気に入りの曲を見つけたと思ったら、ミックスリストで延々と違う曲が流れ続ける...。そんなストレスとはもうおさらば！

この拡張機能を使えば、ミックスリストだろうが何だろうが、ただの動画として再生できちゃいます。 もう、関係ない曲に邪魔される心配はありません！

シンプルに、好きな曲を、好きな時に。

それがこの拡張機能のモットーです。 YouTubeライフをもっと快適に、もっと自由に楽しみましょう！

youtubeのURLから&list=以降を削除してリダイレクトするChrome拡張機能です。

### プライバシー ###
- 単一用途の説明
  YouTubeの動画URLからミックスリスト（&list=）部分を自動的に削除し、シンプルな動画再生ページにリダイレクトします。
- storage が必要な理由
  設定をユーザーのブラウザに保存し、次回起動時にもその設定を維持するために必要です。
- webNavigation が必要な理由
  ユーザーがウェブサイトを閲覧する際のページ遷移を検知し、特定の条件（www.youtube.com　にて&list=が含まれる）に合致した場合に処理を実行するために必要です。ページ遷移を監視するため。
- ホスト権限 が必要な理由
  拡張機能が特定のウェブサイト（この場合は YouTube）のコンテンツにアクセスし、読み取りや変更を行うために必要です。

ツール・拡張機能

Chrome web store: https://chromewebstore.google.com/detail/deletemixlist/eimaheefknicbnlfgdpkdnemgmbopmfj?hl=ja&authuser=0

code: https://github.com/yamamotoxqx/chrome-DeleteMixList
