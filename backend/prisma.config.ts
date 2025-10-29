// import { defineConfig, env } from "prisma/config";

// export default defineConfig({
//   schema: "prisma/schema.prisma",
//   migrations: {
//     path: "prisma/migrations",
//   },
//   engine: "classic",
//   datasource: {
//     url: env("DATABASE_URL"),
//   },
// });

import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "prisma/config";

// 타입 안전한 환경 변수 접근을 위해 타입 정의
type Env = {
  DATABASE_URL: string;
};

export default defineConfig({
  // 사용할 Prisma 엔진
  engine: "classic",

  // 스키마 파일 경로 (절대경로로 지정하면 더 안전함)
  schema: path.join(__dirname, "prisma", "schema.prisma"),

  // 마이그레이션 폴더 경로
  migrations: {
    path: path.join(__dirname, "prisma", "migrations"),
  },

  // 데이터베이스 연결 설정
  datasource: {
    url: env<Env>("DATABASE_URL"),
  },
});
