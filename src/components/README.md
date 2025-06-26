# コンポーネントディレクトリ

このディレクトリには、再利用可能なUIコンポーネントが格納されます。

## ディレクトリ構造

```
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.stories.tsx
│   └── index.ts
├── Card/
│   ├── Card.tsx
│   ├── Card.stories.tsx
│   └── index.ts
└── Form/
    ├── Input.tsx
    ├── Select.tsx
    └── index.ts
```

## コンポーネント作成ガイドライン

1. 各コンポーネントは独立したディレクトリに配置
2. TypeScriptを使用
3. Tailwind CSSでスタイリング
4. Storybook対応（必要に応じて）
5. 適切なProps型定義
6. アクセシビリティ対応

## 使用例

```tsx
import Button from '@/components/Button';

<Button variant="primary" onClick={handleClick}>
  クリックしてください
</Button>
``` 