# インポート規約

## 基本原則
- **絶対パス**: `@/*`エイリアスを使用して相対パスを避ける
- **型インポート**: `type`キーワードで型と値を明確に分離
- **ルートエクスポート**: 各ディレクトリに`index.ts`でエクスポート集約
- **明確性**: インポートの意図が明確になるよう記述

## インポートパターン

### 絶対パスインポート
```typescript
// ✅ 推奨
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { formatDate } from '@/lib/utils';
import type { User } from '@/types/user';

// ❌ 非推奨
import { Button } from '../../../components/ui/button';
import { Header } from '../../layout/header';
```

### 型インポート
```typescript
// ✅ 推奨 - 型のみ
import type { ButtonProps } from '@/components/ui/button';
import type { User, ApiResponse } from '@/types/user';

// ✅ 推奨 - 値と型を分離
import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

// ❌ 非推奨 - 型を値としてインポート
import { ButtonProps } from '@/components/ui/button';
```

## ルートエクスポート構造

### ディレクトリ構造
```
src/components/
├── ui/
│   ├── button/
│   │   ├── Button.tsx
│   │   └── index.ts          # コンポーネントエクスポート
│   └── index.ts              # uiディレクトリエクスポート
├── layout/
│   ├── header/
│   │   ├── Header.tsx
│   │   └── index.ts
│   └── index.ts              # layoutディレクトリエクスポート
└── index.ts                  # componentsルートエクスポート
```

### index.ts実装例
```typescript
// components/ui/button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';

// components/ui/index.ts
export * from '@/components/ui/button';
export * from '@/components/ui/card';
export * from '@/components/ui/modal';

// components/layout/index.ts
export * from '@/components/layout/header';
export * from '@/components/layout/footer';
export * from '@/components/layout/navigation';

// components/index.ts
export * from '@/components/ui';
export * from '@/components/layout';
export * from '@/components/sections';
export * from '@/components/features';
```

## インポート順序

### 優先順位
1. **React関連**: `import React from 'react'`
2. **外部ライブラリ**: `import { motion } from 'framer-motion'`
3. **内部モジュール**: `import { Button } from '@/components/ui/button'`
4. **相対パス**: `import { ButtonGroup } from './ButtonGroup'`

### グループ化例
```typescript
// 1. React関連
import React, { useState, useEffect } from 'react';
import type { ComponentProps, FormEvent } from 'react';

// 2. 外部ライブラリ
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// 3. 内部モジュール
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatDate } from '@/lib/utils';
import type { User } from '@/types/user';

// 4. 相対パス
import { ButtonGroup } from './ButtonGroup';
import type { ButtonGroupProps } from './ButtonGroup';
```

## 実装ガイドライン

### コンポーネントファイル例
```typescript
// components/features/contact-form/ContactForm.tsx
import React, { useState } from 'react';
import type { FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatDate } from '@/lib/utils';
import type { ContactFormData } from '@/types/contact';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  // コンポーネント実装
};
```

### 避けるべきパターン
- **名前空間インポート**: `import * as React`
- **大量インポート**: `import { Button, Card, Modal } from '@/components'`
- **型エイリアス**: `import type { ButtonProps as Props }`
- **相対パスの多用**: 深い階層の相対パス

### 推奨パターン
- **具体的なパス**: `import { Button } from '@/components/ui/button'`
- **型分離**: `import type { ButtonProps } from '@/components/ui/button'`
- **グループ化**: 空行でグループ分け
- **アルファベット順**: グループ内でソート

## ESLint設定
```json
{
  "import/order": [
    "error",
    {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "pathGroups": [
        {
          "pattern": "react",
          "group": "external",
          "position": "before"
        },
        {
          "pattern": "@/**",
          "group": "internal",
          "position": "after"
        }
      ],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }
  ]
}
``` 