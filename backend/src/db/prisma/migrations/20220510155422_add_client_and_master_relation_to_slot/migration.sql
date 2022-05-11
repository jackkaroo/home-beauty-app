-- AlterTable
ALTER TABLE "User" ADD COLUMN     "slotDuration" INTEGER;

-- CreateTable
CREATE TABLE "MasterSlot" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "slotStartTime" TEXT NOT NULL,
    "slotEndTime" TEXT NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "masterId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "MasterSlot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MasterSlot" ADD CONSTRAINT "MasterSlot_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterSlot" ADD CONSTRAINT "MasterSlot_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterSlot" ADD CONSTRAINT "MasterSlot_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "MasterService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
