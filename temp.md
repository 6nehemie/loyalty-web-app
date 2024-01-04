```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id                String        @id @default(cuid())
  email             String        @unique
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
  role              String        @default("USER")
  emailCodeReset    String?
  passwordCodeReset String?
  reservations      Reservation[]
  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt // Updtate automatically when an update is made

  Document Document?
}

model Car {
  id                String        @id @default(cuid())
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
  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt // Updtate automatically when an update is made
  Reservation       Reservation[]
}

model Reservation {
  id                    String    @id @default(cuid())
  user                  User      @relation(fields: [userId], references: [id])
  userId                String
  car                   Car?      @relation(fields: [carId], references: [id])
  carId                 String?
  startDate             DateTime?
  endDate               DateTime?
  rentalDays            Int?
  rentalPrice           Int?
  additionalDriverPrice Int?
  additionalDriver      Boolean   @default(false)
  fufilled              Boolean   @default(false)
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt // Updtate automatically when an update is made

  @@unique([carId])
  @@index([userId])
}

model Document {
  id     String @id @default(cuid())
  author User   @relation(fields: [userId], references: [id])
  userId String

  @@unique([userId])
}

```
