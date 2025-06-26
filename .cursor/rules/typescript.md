# TypeScript規約

## 基本原則
- **型安全性**: すべてのコンポーネントと関数に適切な型を定義
- **strict mode**: TypeScriptのstrict modeを有効に使用
- **型推論**: 可能な限り型推論を活用
- **一貫性**: プロジェクト全体で一貫した型定義パターン

## 型定義パターン

### コンポーネントProps型
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  disabled = false,
  className = ''
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

### 関数型定義
```typescript
// 関数型の定義
type FormSubmitHandler = (data: FormData) => Promise<void>;
type ValidationFunction<T> = (value: T) => boolean;

// 関数の実装
const handleSubmit: FormSubmitHandler = async (data) => {
  try {
    await submitForm(data);
  } catch (error) {
    console.error('Form submission failed:', error);
  }
};

const validateEmail: ValidationFunction<string> = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

## 型の種類と使い分け

### interface vs type
```typescript
// interface: オブジェクト型の定義
interface User {
  id: string;
  name: string;
  email: string;
  profile?: {
    avatar?: string;
    bio?: string;
  };
}

// type: ユニオン型、交差型、その他の複雑な型
type UserRole = 'admin' | 'user' | 'guest';
type ApiResponse<T> = {
  data: T;
  error: null;
} | {
  data: null;
  error: string;
};
type UserWithRole = User & { role: UserRole };
```

### ジェネリクス
```typescript
// 汎用的なコンポーネント
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

const List = <T,>({ items, renderItem, keyExtractor }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

// 使用例
<List
  items={users}
  renderItem={(user) => <UserCard user={user} />}
  keyExtractor={(user) => user.id}
/>
```

## エラーハンドリング

### エラー型定義
```typescript
interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: Record<string, any>;
}

type ApiResult<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: ApiError;
};

// エラーハンドリング関数
const handleApiCall = async <T>(apiCall: () => Promise<T>): Promise<ApiResult<T>> => {
  try {
    const data = await apiCall();
    return { success: true, data };
  } catch (error) {
    const apiError: ApiError = {
      message: error instanceof Error ? error.message : 'Unknown error',
      code: 'UNKNOWN_ERROR',
      status: 500
    };
    return { success: false, error: apiError };
  }
};
```

## Next.js固有の型

### ページコンポーネント
```typescript
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: PageProps) {
  return (
    <div>
      <h1>Page: {params.slug}</h1>
      <p>Search: {searchParams.q}</p>
    </div>
  );
}
```

### メタデータ
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ページタイトル',
  description: 'ページの説明',
  keywords: ['キーワード1', 'キーワード2'],
  openGraph: {
    title: 'OGタイトル',
    description: 'OG説明',
  },
};
```

## 型ガードとユーティリティ

### 型ガード関数
```typescript
// 型ガード
function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'string' && typeof obj.name === 'string';
}

function isApiError(obj: any): obj is ApiError {
  return obj && typeof obj.message === 'string' && typeof obj.code === 'string';
}

// 使用例
const processData = (data: unknown) => {
  if (isUser(data)) {
    // dataはUser型として扱える
    console.log(data.name);
  } else if (isApiError(data)) {
    // dataはApiError型として扱える
    console.error(data.message);
  }
};
```

### ユーティリティ型
```typescript
// よく使うユーティリティ型
type PartialUser = Partial<User>;           // すべてのプロパティをオプショナル
type RequiredUser = Required<User>;         // すべてのプロパティを必須
type UserKeys = keyof User;                 // Userのキーのユニオン型
type UserValues = User[UserKeys];           // Userの値のユニオン型
type PickUser = Pick<User, 'id' | 'name'>;  // 特定のプロパティのみ
type OmitUser = Omit<User, 'email'>;        // 特定のプロパティを除外
```

## ベストプラクティス

### 型定義の原則
- **明確性**: 型名から意図が分かるように命名
- **再利用性**: 汎用的で再利用可能な型を設計
- **保守性**: 変更に強い型定義を心がける
- **一貫性**: プロジェクト全体で統一されたパターン

### 避けるべきパターン
```typescript
// ❌ 悪い例
const Component = (props: any) => { ... };           // any型の使用
const data: unknown = fetchData();                   // unknownのまま使用
const user = { id: 1, name: 'John' } as User;       // 型アサーションの乱用
```

### 推奨パターン
```typescript
// ✅ 良い例
const Component = (props: ComponentProps) => { ... }; // 具体的な型
const data = fetchData();                             // 型推論を活用
const user: User = { id: '1', name: 'John' };        // 明示的な型定義
```
