# 仕様書（UI詳細）: translate_ui_tailwind_daisyui

## 1. 画面構成
- ヘッダー: タイトル、短い説明文、タグ表示
- 2カラム: 翻訳元 / 翻訳先カード
- フッター: 翻訳ボタン、注意文
- スマホ: 画面下にフローティングボタンを表示

## 2. 画面要素
- タイトル（アプリ名）
- 説明文（教材向けの簡潔な説明）
- 翻訳元言語選択（`select`）
- 入力テキスト（`textarea`）
- 翻訳先言語選択（`select`）
- 出力テキスト（`textarea`、readonly）
- 翻訳実行ボタン
- 注意文（API未連携時の説明）

## 3. デザイン方針
- Tailwind CSS + DaisyUI のコンポーネントとユーティリティを活用
- 余白・整列・タイポグラフィはライブラリの設計に合わせて統一
- 追加のカスタムCSSは最小限にし、ライブラリの標準に寄せる
- タイポグラフィは Google Fonts の `Noto Sans JP` を使用
- 見出しは太め（700）で強調する

## 4. 動作仕様
- ボタン押下で `/translate` にGETリクエストを送る
- クエリパラメータ: `input_text`, `source_lang`, `target_lang`
- 返ってきた文字列を翻訳結果に表示
- 入力が空の場合は通信しない

## 5. ファイル構成
- `templates/index.html`
- `static/style.css`
- `static/main.js`
