/*
  Warnings:

  - You are about to drop the `MasterSlot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MasterSlot" DROP CONSTRAINT "MasterSlot_clientId_fkey";

-- DropForeignKey
ALTER TABLE "MasterSlot" DROP CONSTRAINT "MasterSlot_masterId_fkey";

-- DropForeignKey
ALTER TABLE "MasterSlot" DROP CONSTRAINT "MasterSlot_serviceId_fkey";

-- DropTable
DROP TABLE "MasterSlot";

-- CreateTable
CREATE TABLE "ServiceSlot" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "slotStartTime" TEXT NOT NULL,
    "slotEndTime" TEXT NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "masterId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "ServiceSlot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceSlot" ADD CONSTRAINT "ServiceSlot_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSlot" ADD CONSTRAINT "ServiceSlot_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSlot" ADD CONSTRAINT "ServiceSlot_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "MasterService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
