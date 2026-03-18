# 仕様書（5W1H）: translate_ui_tailwind_daisyui

## 1. Why（なぜ作るか）
- 教材として「仕様書ベースAIコーディング」の流れを体験するため
- UIライブラリを変えると、同じ機能でも見た目と実装の手触りが変わることを体験するため
- カスタムUI との比較対象を作るため
- コーディングはAIが行う前提で、学習者は仕様書をAIと相談しながら作成し、AIコーディング能力を高めるため

## 2. What（何を作るか）
- 多言語翻訳アプリのフロントUI（Tailwind CSS + DaisyUI 版）
- 入力テキスト、言語選択、翻訳結果表示、翻訳実行ボタンを備えた画面
- 機能は `translate_advanced` と同一で、UIのみを改善する

## 3. Who（誰のためか）
- 生成AI講座の受講生（初学者〜中級手前）
- 仕様書作成とAI協働の進め方を学びたい学習者
- UI改善の意図を仕様書で言語化したい人

## 4. When（いつ使うか）
- 第13回講義「Webアプリ完成度・まとめ」の演習パート
- 仕様書ベースでAIと対話しながらUIを整えるワークショップ

## 5. Where（どこで使うか）
- ローカル環境（教材リポジトリ内）
- `translate_ui_tailwind_daisyui` フォルダ内
- Google Colab 上
- Cloudflare Tunnel を用いた動作確認環境

## 6. How（どのように作るか）
- `translate_advanced` の機能をそのまま使い、UIのみを改善する
- Google Colab で動作する前提で構成する
- UIライブラリは Tailwind CSS + DaisyUI を使って実装する
- これまで講義で使用してきた AWS Translate API を利用する
- 機能面は `translate_advanced` を基本とし、UIのみ改善対象とする

## 6-A. 詳細仕様（別紙）
- 画面要素、デザイン方針、動作仕様は `SPEC_UI.md` に記載する
