# study-tailwindow

Tailwind CSS学習用プロジェクト

## 導入

### Next.jsをインストール
検索: [Next.js start](https://nextjs.org/docs/app/getting-started/installation)
```bash
npx create-next-app@latest

# TypeScript:     Yes
# ESLint:         Yes
# Tailwind CSS:   No バージョンを指定するため
# src/ directory: Yes
# App Router:     Yes
# Turbopack:      Yes
# import alias:   No
```

### Tailwind CSS をインストール
参考: [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)
```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

postcss.config.mjsを作成
```mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

src/app/globals.cssの中身を全て削除して以下を追加
```css
@import "tailwindcss";
```

src/app/page.tsxの中身を全て削除して以下を追加
```tsx
export default function Home() {
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
```

### 拡張機能のインストール

[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

クラス名をホバーした時、そのクラスで適用されているTailwind CSSの詳細を確認することができる拡張機能

### フォーマッタの設定

検索: [Tailwind formatter](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

`.prettirrc.json`を作成
```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

.tsxにて、保存時に特定のルールでクラスの順序が切り替わる
