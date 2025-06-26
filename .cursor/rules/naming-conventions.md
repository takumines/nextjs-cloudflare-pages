# 命名規約

## 基本原則
- 一貫性: プロジェクト全体で一貫した命名規則
- 可読性: 名前から意図が明確に分かる
- 簡潔性: 必要以上に長い名前は避ける

## ファイル・フォルダ命名
- コンポーネントファイル: PascalCase (`Header.tsx`)
- ディレクトリ名: kebab-case (`header/`, `contact-form/`)
- その他のファイル: camelCase (`utils.ts`)

## 変数・関数命名
- 変数: camelCase (`userName`, `isLoading`)
- 定数: UPPER_SNAKE_CASE (`API_BASE_URL`)
- 関数: camelCase (`handleSubmit`, `fetchUserData`)
- コンポーネント: PascalCase (`Header`, `ContactForm`)

## TypeScript型命名
- インターフェース: PascalCase + Props (`ButtonProps`)
- 型エイリアス: PascalCase (`ApiResponse`)
- ジェネリクス: 大文字のT, U, V... (`ApiResponse<T>`)

## CSS・API命名
- Tailwind: 標準クラス名を使用
- カスタムCSS: kebab-case (`--primary-color`)
- APIエンドポイント: kebab-case (`/api/user-profile`)
- 環境変数: UPPER_SNAKE_CASE (`NEXT_PUBLIC_API_URL`)

## 避けるべき命名
- 略語の多用 (`usr` → `user`)
- 数字から始まる名前
- 予約語の使用
- 過度に長い名前

## ファイル・フォルダ命名

### コンポーネントファイル
- **PascalCase**: `Header.tsx`, `Footer.tsx`, `ContactForm.tsx`
- **ディレクトリ名**: kebab-case: `header/`, `footer/`, `contact-form/`

### その他のファイル
- **camelCase**: `utils.ts`, `constants.ts`, `apiClient.ts`
- **kebab-case**: `api-client.ts`, `user-profile.ts`

### ディレクトリ構造
```
src/
├── components/
│   ├── ui/
│   │   ├── button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   └── card/
│   ├── layout/
│   └── sections/
├── lib/
│   ├── utils.ts
│   └── api-client.ts
├── types/
│   ├── common.ts
│   └── components.ts
└── constants/
    ├── routes.ts
    └── api-endpoints.ts
```

## 変数・関数命名

### 変数
- **camelCase**: `userName`, `isLoading`, `apiResponse`
- **定数**: `UPPER_SNAKE_CASE`: `API_BASE_URL`, `MAX_RETRY_COUNT`

### 関数
- **camelCase**: `handleSubmit`, `fetchUserData`, `validateEmail`
- **動詞から始める**: `get`, `set`, `handle`, `fetch`, `validate`

### コンポーネント
- **PascalCase**: `Header`, `Footer`, `ContactForm`
- **機能を表す名詞**: `Button`, `Modal`, `Navigation`

## TypeScript型命名

### インターフェース
- **PascalCase + Props**: `ButtonProps`, `HeaderProps`, `FormData`
- **機能を表す名詞**: `User`, `Product`, `ApiResponse`

### 型エイリアス
- **PascalCase**: `ApiResponse`, `FormState`, `UserRole`
- **ジェネリクス**: `ApiResponse<T>`, `PaginatedData<T>`

## CSSクラス命名

### Tailwind CSS
- **Tailwindの標準クラス名を使用**
- **カスタムクラス**: kebab-case: `custom-button`, `brand-header`

### カスタムCSS変数
- **kebab-case**: `--primary-color`, `--font-size-large`

## データベース・API命名

### APIエンドポイント
- **kebab-case**: `/api/user-profile`, `/api/contact-form`
- **RESTful**: `GET /api/users`, `POST /api/contacts`

### データベース
- **snake_case**: `user_profiles`, `contact_forms`
- **テーブル名**: 複数形で命名

## 環境変数
- **UPPER_SNAKE_CASE**: `NEXT_PUBLIC_API_URL`, `DATABASE_URL`

## ベストプラクティス

### 避けるべき命名
- 略語の多用（例: `usr` → `user`）
- 数字から始まる名前
- 予約語の使用
- 過度に長い名前

### 推奨する命名
- 意図が明確な名前
- 一貫したプレフィックス・サフィックス
- ドメイン用語の使用
- 英語での命名

## 例

### 良い例
```typescript
// コンポーネント
const ContactForm: React.FC<ContactFormProps> = () => {};

// 関数
const handleFormSubmit = async (formData: FormData) => {};

// 変数
const isFormValid = true;
const API_BASE_URL = 'https://api.example.com';

// 型
interface ContactFormProps {
  onSubmit: (data: ContactData) => void;
}
```

### 避けるべき例
```typescript
// 悪い例
const cf: React.FC<CFP> = () => {};
const submit = async (fd: FD) => {};
const valid = true;
const URL = 'https://api.example.com';
``` 