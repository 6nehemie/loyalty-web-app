-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Pending', 'Processing', 'Completed', 'Failed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "civility" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "conditions" BOOLEAN,
    "privacy" BOOLEAN,
    "newsletter" BOOLEAN,
    "phoneNumber" TEXT,
    "country" TEXT,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "city" TEXT,
    "postalCode" TEXT,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "emailCodeReset" TEXT,
    "passwordCodeReset" TEXT,
    "currentReservation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT,
    "wallpaper" TEXT,
    "shortDescription" TEXT,
    "wallpaperPublicId" TEXT,
    "carImage" TEXT,
    "carImagePublicId" TEXT,
    "minAge" TEXT,
    "price" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "embeddedVideo" TEXT,
    "carImage" TEXT NOT NULL,
    "carImagePublicId" TEXT NOT NULL,
    "wallpaper" TEXT NOT NULL,
    "wallpaperPublicId" TEXT NOT NULL,
    "dailyPrice" INTEGER NOT NULL,
    "weeklyPrice" INTEGER,
    "weekendPrice" INTEGER,
    "monthlyPrice" INTEGER,
    "caution" INTEGER NOT NULL,
    "minimumAge" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vehiculeId" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "checkoutSessionId" TEXT,
    "rentalDays" INTEGER,
    "rentalPrice" INTEGER,
    "additionalDriverPrice" INTEGER,
    "additionalDriver" BOOLEAN NOT NULL DEFAULT false,
    "fufilled" BOOLEAN NOT NULL DEFAULT false,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'Pending',
    "identityCard" TEXT,
    "identityCardPublicId" TEXT,
    "driverLicense" TEXT,
    "driverLicensePublicId" TEXT,
    "totalPrice" INTEGER,
    "homeCertificate" TEXT,
    "homeCertificatePublicId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "carId" TEXT,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Reservation_userId_vehiculeId_idx" ON "Reservation"("userId", "vehiculeId");
