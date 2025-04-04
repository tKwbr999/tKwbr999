import { ProfileInfo, NewsItem, SocialLink } from '../types';

export const profileInfo: ProfileInfo = {
  name: "桑原 崇",
  title: "フルスタックエンジニア",
  bio: "「AI"も"使えるエンジニア」をモットーに、Go言語を中心としたバックエンド開発、TypeScript/Reactを活用したフロントエンド開発の経験と、最新のAI技術を駆使した開発スキルを持つフルスタックエンジニアです。SIerからWebエンジニアとしてスタートし、メディア事業やインターネット広告の分野で経験を積み、現在はフリーランスエンジニアとして活動しています。",
  skills: [
    "Go", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Java", "Ruby(Rails)", "PostgreSQL", "MySQL", 
    "MongoDB", "GCP", "AWS", "Firebase", "Supabase",
    "クリーンアーキテクチャ", "DDD", "マイクロサービス", "OpenAPI"
  ],
  awards: [
    // 受賞歴がないため、空の配列にしておく
  ],
  experience: [
    {
      company: "フリーランスエンジニア",
      role: "バックエンド/フルスタックエンジニア",
      period: "2014年8月 - 現在",
      description: "様々な企業のプロジェクトに参画し、バックエンド開発を中心に活動。Go言語、TypeScript、React、Next.jsなどを用いたマイクロサービス開発やAPIサーバー構築、AI技術を活用したプロダクト開発を行っています。"
    },
    {
      company: "介護施設管理システム開発",
      role: "バックエンドエンジニア",
      period: "2023年9月 - 2025年1月",
      description: "介護業界の法令に準じた処理をAIにより簡略化するプロジェクト。法令に関わる部分のデータモデル設計、実装、テストを担当。OpenAPIを用いたREST API実装のサポートおよびRowLevelSecurityを満たすためのミドルウェア仕様とデータ設計を担当。"
    },
    {
      company: "共通認証マイクロサービス開発",
      role: "バックエンドエンジニア",
      period: "2022年10月 - 2023年4月",
      description: "B2B/B2Cのマッチングサービス向け共通認証マイクロサービス開発。シンプルなEmail+Pass認証に絞った設計と実装を担当。クリーンアーキテクチャとDDDを踏まえた標準的なGoプロジェクトレイアウトを採用。"
    },
    {
      company: "建築設計データ解析/API開発",
      role: "バックエンドエンジニア",
      period: "2022年7月 - 2022年12月",
      description: "Autodesk Construction Cloudデータ解析用SDKを利用したデータ解析を行うREST APIのバックエンド開発。Cognitoによるユーザー認証API実装。TerraformによるIaCの導入支援も担当。"
    }
  ]
};

export const newsItems: NewsItem[] = [
  {
    date: "2025年4月",
    title: "ポートフォリオサイトリニューアル",
    content: "「AI"も"使えるエンジニア」をテーマに、ポートフォリオサイトをリニューアルしました。"
  },
  {
    date: "2023年9月〜2025年1月",
    title: "介護施設管理システム開発プロジェクト参画",
    content: "AIを活用した介護施設管理システムの開発に参画。法令関連のデータモデル設計とAPI実装を担当。"
  },
  {
    date: "2022年10月〜2023年4月",
    title: "共通認証マイクロサービス開発",
    content: "B2B/B2Cマッチングサービス向けの共通認証マイクロサービスをGo言語で開発。"
  },
  {
    date: "2022年7月〜2022年12月",
    title: "建築設計データ解析/API開発",
    content: "Autodesk Construction Cloudデータを解析するRESTful APIをGo言語で開発。"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/tKwbr999",
    icon: "FaGithub"
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/tkwbr999",
    icon: "SiZenn"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/tkwbr999",
    icon: "FaTwitter"
  },
  {
    name: "Wantedly",
    url: "https://wantedly.com/id/tkwbr999",
    icon: "SiWantedly"
  },
  {
    name: "note",
    url: "https://note.com/tkwbr999",
    icon: "SiNote"
  }
];