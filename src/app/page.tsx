"use client";

import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm border-b fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">
              株式会社サンプル
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">
                ホーム
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                サービス
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                会社概要
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
              </a>
            </nav>
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleMobileMenu}
              aria-label="メニューを開く"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* モバイルメニュー */}
          {isMobileMenuOpen && (
            <div 
              id="mobile-menu" 
              className="md:hidden border-t border-gray-200 bg-white"
              role="navigation"
              aria-label="モバイルナビゲーション"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a 
                  href="#home" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ホーム
                </a>
                <a 
                  href="#services" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  サービス
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  会社概要
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ヒーローセクション */}
      <section id="home" className="pt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              イノベーションで
              <br />
              未来を創造
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              最新技術を活用し、お客様のビジネスに革新的なソリューションを提供します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                サービスを見る
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              サービス
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              お客様のニーズに合わせた多様なサービスを提供しています
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Web開発
              </h4>
              <p className="text-gray-600">
                最新技術を活用した高品質なWebサイト・Webアプリケーションの開発
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                モバイルアプリ
              </h4>
              <p className="text-gray-600">
                iOS・Android対応のネイティブアプリ・クロスプラットフォームアプリ開発
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                データ分析
              </h4>
              <p className="text-gray-600">
                ビッグデータの分析・可視化によるビジネスインサイトの提供
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                会社概要
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                株式会社サンプルは、2010年の設立以来、最新技術を活用した革新的なソリューションを提供し続けています。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 w-24">設立</span>
                  <span className="text-gray-600">2010年4月</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 w-24">資本金</span>
                  <span className="text-gray-600">1,000万円</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 w-24">従業員数</span>
                  <span className="text-gray-600">50名</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 w-24">事業内容</span>
                  <span className="text-gray-600">システム開発、Web制作、コンサルティング</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                ミッション
              </h4>
              <p className="text-gray-600 mb-6">
                テクノロジーの力で、人々の生活をより豊かにし、社会の発展に貢献する
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                ビジョン
              </h4>
              <p className="text-gray-600">
                業界をリードするイノベーティブな企業として、持続可能な未来を創造する
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              お問い合わせ
            </h3>
            <p className="text-xl text-gray-600">
              ご質問やご相談がございましたら、お気軽にお問い合わせください
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  連絡先情報
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">東京都渋谷区○○○○</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">03-1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">info@sample-company.co.jp</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  お問い合わせフォーム
                </h4>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="お名前"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="お問い合わせ内容"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    送信する
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">株式会社サンプル</h5>
              <p className="text-gray-400 text-sm">
                イノベーションで未来を創造する
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">サービス</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Web開発</a></li>
                <li><a href="#" className="hover:text-white">モバイルアプリ</a></li>
                <li><a href="#" className="hover:text-white">データ分析</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">会社情報</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">会社概要</a></li>
                <li><a href="#" className="hover:text-white">採用情報</a></li>
                <li><a href="#" className="hover:text-white">プライバシーポリシー</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">お問い合わせ</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>03-1234-5678</li>
                <li>info@sample-company.co.jp</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 株式会社サンプル. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
