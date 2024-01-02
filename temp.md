```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// generator client {
//   provider = "prisma-client-js"
// }

// datasource db {
//   provider     = "mysql"
//   url          = env("DATABASE_URL")
//   relationMode = "prisma"
// }

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id                String   @id @default(cuid())
  email             String   @unique
  civility          String
  firstName         String
  lastName          String
  conditions        Boolean?
  privacy           Boolean?
  newsletter        Boolean?
  phoneNumber       String?
  country           String?
  addressLine1      String?
  addressLine2      String?
  city              String?
  postalCode        String?
  password          String
  role              String   @default("USER")
  emailCodeReset    String?
  passwordCodeReset String?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt // Updtate automatically when an update is made
}

model Car {
  id                String   @id @default(cuid())
  brand             String
  model             String
  year              String?
  wallpaper         String?
  shortDescription  String?
  wallpaperPublicId String?
  carImage          String?
  carImagePublicId  String?
  minAge            String?
  price             String?
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt // Updtate automatically when an update is made
}
```
