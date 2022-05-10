-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateTable
CREATE TABLE "MasterWorkingDay" (
    "id" SERIAL NOT NULL,
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "startWorkingTime" TEXT NOT NULL,
    "endWorkingTime" TEXT NOT NULL,
    "masterId" INTEGER NOT NULL,

    CONSTRAINT "MasterWorkingDay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MasterWorkingDay" ADD CONSTRAINT "MasterWorkingDay_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
