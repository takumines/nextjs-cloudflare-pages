# コンポーネント設計規約

## 設計原則
- **単一責務**: 各コンポーネントは1つの明確な責務を持つ
- **再利用性**: 汎用的で再利用可能なコンポーネントを優先
- **分割**: 機能ごとに小さなコンポーネントに分割

## ディレクトリ構造
```
src/components/
├── ui/                    # 汎用UIコンポーネント
│   ├── button/           # Button, ButtonGroup
│   ├── card/             # Card, CardHeader, CardBody
│   ├── modal/            # Modal, ModalTrigger
│   └── input/            # Input, TextArea, Select
├── layout/               # レイアウトコンポーネント
│   ├── header/           # Header, Navigation
│   ├── footer/           # Footer, FooterLinks
│   └── sidebar/          # Sidebar, SidebarItem
├── sections/             # ページセクション
│   ├── hero/             # Hero, HeroContent
│   ├── about/            # About, AboutSection
│   └── contact/          # Contact, ContactInfo
└── features/             # 機能別コンポーネント
    ├── contact-form/     # ContactForm, FormField
    └── newsletter/       # Newsletter, NewsletterSignup
```

## 命名規則
- **ファイル名**: PascalCase (`Header.tsx`, `ContactForm.tsx`)
- **ディレクトリ名**: kebab-case (`header/`, `contact-form/`)
- **コンポーネント名**: PascalCase (`Header`, `ContactForm`)
- **Props型**: PascalCase + Props (`HeaderProps`, `ButtonProps`)

## コンポーネント実装ガイドライン

### 基本構造
```typescript
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  // その他のprops
}

export const Component: React.FC<ComponentProps> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`component ${className}`} {...props}>
      {children}
    </div>
  );
};
```

### 必須実装項目
- **型定義**: interfaceでProps型を定義
- **デフォルト値**: 適切なデフォルト値を設定
- **エラーハンドリング**: エラー状態の考慮
- **アクセシビリティ**: ARIA属性、キーボード操作対応
- **レスポンシブ**: モバイルファーストの設計

### コンポーネント種類別ガイドライン

#### UIコンポーネント (`ui/`)
- 最も汎用的で再利用可能
- 最小限の依存関係
- 明確なAPI設計

#### レイアウトコンポーネント (`layout/`)
- ページ構造を定義
- ナビゲーション関連
- グローバルな状態管理

#### セクションコンポーネント (`sections/`)
- 特定のページセクション
- コンテンツに特化
- SEO対応

#### 機能コンポーネント (`features/`)
- 特定の機能を提供
- ビジネスロジックを含む
- 状態管理が必要
