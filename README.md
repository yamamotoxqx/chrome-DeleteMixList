# DeleteMixList (v2.0.0)
YouTubeのURLから、自動生成されるミックスリスト（MIXリスト）部分だけをスマートに削除して、単体動画としてリダイレクトするChrome拡張機能です。

This Chrome extension automatically removes automated YouTube Mix playlist parameters (⁠&list=RD...⁠) from URLs and redirects you to the normal, single-video page.
### 📌 アップデート内容 (v2.0.0)
* YouTube自動生成MIXリストへの限定動作:これまで ⁠&list=⁠ 全体をリダイレクトしていたため、ユーザーご自身の大切な「お気に入りプレイリスト」や「作成した再生リスト」まで巻き込んで解除されてしまう問題がありました。今回のアップデートで、YouTubeが自動生成するMIXリスト（⁠list=RD...⁠）のみをピンポイントで狙い撃ちして解除するように改善しました！

* 多言語対応 (i18n):
日本語と英語に公式対応しました。ブラウザの言語設定に合わせて自動でUIが切り替わります。

* デザインの近代化:
ポップアップ画面をダークモード仕様かつすりガラス風（Glassmorphism）のモダンなデザインへと刷新しました。

## 🇯🇵 日本語版 (Japanese)

**YouTubeが自動生成したMIXリストのみを検知し、自動的にリストを解除してシンプルな動画再生ページにリダイレクトします**

「キタ！神曲…って、またミックスリストかよ！」

YouTubeあるあるですよね？ お気に入りの曲を見つけたと思ったら、自動生成されたミックスリストで延々と違う曲が流れ続ける...。そんなストレスとはもうおさらば！

この拡張機能を使えば、YouTubeが自動作成するMIXリストから脱出して、シンプルな単体動画として再生できちゃいます。もう、関係ない曲の横槍におびえる必要はありません！

シンプル・イズ・ベスト。好きな曲を、好きな時に。

それがこの拡張機能のモットーです。YouTubeライフをもっと快適に、もっと自由に楽しみましょう！
#### 🌟 バージョン 2.0.0 の新機能：
￼ ユーザーご自身が作成した「お気に入り」や「カスタム再生リスト」はリダイレクト対象から除外され、そのまま再生できるようになりました！YouTubeが自動作成するMIXリスト（URLに &list=RD が含まれるもの）のみを綺麗に解除します。
#### 🛡️ プライバシーと権限について
* 単一用途の説明: YouTubeの動画URLから、自動生成されるミックスリスト（&list=RD...）部分のみを自動的に検知・削除し、シンプルな単一動画再生ページにリダイレクトします。
* storage権限が必要な理由: 拡張機能のオン/オフ設定をユーザーのブラウザに保存し、次回起動時にもその設定を維持するために使用します。
* webNavigation権限が必要な理由: ユーザーがYouTube内で画面遷移（他の動画をクリックするなど）したことをリアルタイムに検知し、リダイレクト処理を遅延なく実行するために必要です。
* ホスト権限（youtube.comのみ）が必要な理由: YouTubeのウェブサイト上でのみURLの読み取りとパラメータの書き換えを行うために必要です。ユーザーの閲覧履歴や個人情報を外部に送信することは一切ありません。
## 🇺🇸 英語版 (English)

**Detects automated YouTube Mix playlists (RD) and automatically redirects you to a simple, single-video playback page.**

"Oh, this song is amazing!... Wait, it's a Mix Playlist?!"

Classic YouTube, isn't it? Just when you think you've found your favorite track, you get trapped in an automated Mix playlist that keeps playing unrelated songs forever... No more of that stress!

With this extension, you can easily escape from YouTube's auto-generated Mix playlists and play just the video you wanted as a standalone clip. No more interruptions from unwanted recommendations!

Simple is best. Your favorite songs, whenever you want.

That is the motto of this extension. Enjoy a more comfortable, free YouTube life!
#### 🌟 What's New in v2.0.0:
￼ Your own custom playlists and "Favorites" are now completely safe! The extension only targets and removes YouTube's auto-generated Mix playlists (URLs containing "&list=RD").
#### 🛡️ Privacy & Permissions
* Single Purpose Description: Automatically detects and removes only the automated Mix playlist parameter (&list=RD...) from YouTube URLs to redirect you to a clean, single-video playback page.
* Why "storage" is required: Necessary to save your on/off preference in your browser so that your setting is maintained the next time you open Chrome.
* Why "webNavigation" is required: Necessary to detect page transitions within YouTube in real-time and trigger the redirect instantly without delay.
* Why Host Permissions (youtube.com) are required: Required to read and modify URL parameters exclusively on the YouTube website. We never read, store, or transmit your personal data or browsing history outside of your device.
## 🔗 Links
￼ [Chrome Web Store](https://chromewebstore.google.com/detail/deletemixlist/eimaheefknicbnlfgdpkdnemgmbopmfj?hl=ja&authuser=0)

￼ [Source Code](https://github.com/yamamotoxqx/chrome-deletemixlist)
