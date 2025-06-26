# スタイリング規約

## 基本原則
- **Tailwind CSS**: すべてのスタイリングはTailwind CSSを使用
- **カスタムCSS**: 必要最小限に留める
- **モバイルファースト**: レスポンシブデザインの基本方針
- **一貫性**: クラス名の順序と構造を統一

## 命名・構造
- クラス名の順序を統一
- 長いクラス名は改行して整理
- 再利用可能なパターンはコンポーネント化

## レスポンシブデザイン

### ブレークポイント
```css
/* Tailwind標準ブレークポイント */
sm: 640px   /* スマートフォン */
md: 768px   /* タブレット */
lg: 1024px  /* デスクトップ */
xl: 1280px  /* 大画面 */
2xl: 1536px /* 超大画面 */
```

### 実装例
```typescript
// モバイルファーストの例
<div className="
  text-sm          /* モバイル: 小さいフォント */
  md:text-base     /* タブレット: 標準フォント */
  lg:text-lg       /* デスクトップ: 大きいフォント */
  p-4              /* モバイル: 小さいパディング */
  md:p-6           /* タブレット: 標準パディング */
  lg:p-8           /* デスクトップ: 大きいパディング */
">
  コンテンツ
</div>
```

## レイアウトパターン

### コンテナ
```typescript
// 標準コンテナ
<div className="
  max-w-7xl        /* 最大幅制限 */
  mx-auto          /* 中央揃え */
  px-4             /* 左右パディング */
  md:px-6          /* タブレット以上でパディング増加 */
  lg:px-8          /* デスクトップでパディング増加 */
">
  コンテンツ
</div>
```

### グリッドレイアウト
```typescript
// レスポンシブグリッド
<div className="
  grid
  grid-cols-1      /* モバイル: 1列 */
  md:grid-cols-2   /* タブレット: 2列 */
  lg:grid-cols-3   /* デスクトップ: 3列 */
  gap-4            /* ギャップ */
  md:gap-6         /* タブレット以上でギャップ増加 */
">
  <div>アイテム1</div>
  <div>アイテム2</div>
  <div>アイテム3</div>
</div>
```

## アクセシビリティ

### フォーカス状態
```typescript
// フォーカス可能な要素
<button className="
  px-4 py-2
  bg-blue-500
  text-white
  rounded
  focus:outline-none      /* デフォルトアウトライン削除 */
  focus:ring-2            /* フォーカスリング追加 */
  focus:ring-blue-300     /* フォーカスリング色 */
  focus:ring-offset-2     /* フォーカスリングオフセット */
">
  ボタン
</button>
```

### コントラスト比
```typescript
// 適切なコントラスト比
<div className="
  bg-gray-900     /* 濃い背景 */
  text-white      /* 白文字 */
  dark:bg-white   /* ダークモード: 白背景 */
  dark:text-gray-900 /* ダークモード: 濃い文字 */
">
  高コントラストテキスト
</div>
```

## ダークモード対応

### 基本パターン
```typescript
// ダークモード対応
<div className="
  bg-white         /* ライトモード: 白背景 */
  dark:bg-gray-900 /* ダークモード: 濃い背景 */
  text-gray-900    /* ライトモード: 濃い文字 */
  dark:text-white  /* ダークモード: 白文字 */
  border
  border-gray-200  /* ライトモード: 薄いボーダー */
  dark:border-gray-700 /* ダークモード: 濃いボーダー */
">
  ダークモード対応コンテンツ
</div>
```

## アニメーション

### トランジション
```typescript
// スムーズなトランジション
<button className="
  px-4 py-2
  bg-blue-500
  hover:bg-blue-600    /* ホバー時の色変更 */
  active:bg-blue-700   /* アクティブ時の色変更 */
  transition-colors    /* 色のトランジション */
  duration-200         /* トランジション時間 */
  ease-in-out         /* イージング */
">
  ホバーエフェクト付きボタン
</button>
```

## カスタムCSS

### CSS変数
```css
/* globals.css */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
}

.custom-component {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
```

### Tailwind拡張
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## ベストプラクティス

### クラス名の整理
```typescript
// 長いクラス名は改行して整理
<div className={`
  flex
  items-center
  justify-between
  p-4
  bg-white
  border
  border-gray-200
  rounded-lg
  shadow-sm
  hover:shadow-md
  transition-shadow
  duration-200
`}>
  整理されたクラス名
</div>
```

### 再利用可能なパターン
```typescript
// 共通のスタイルパターンをコンポーネント化
const Card = ({ children, className = '' }) => (
  <div className={`
    bg-white
    border
    border-gray-200
    rounded-lg
    shadow-sm
    p-6
    ${className}
  `}>
    {children}
  </div>
);
```
