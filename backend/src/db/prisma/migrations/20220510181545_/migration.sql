-- DropForeignKey
ALTER TABLE "ServiceSlot" DROP CONSTRAINT "ServiceSlot_serviceId_fkey";

-- AlterTable
ALTER TABLE "ServiceSlot" ALTER COLUMN "serviceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ServiceSlot" ADD CONSTRAINT "ServiceSlot_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "MasterService"("id") ON DELETE SET NULL ON UPDATE CASCADE;
