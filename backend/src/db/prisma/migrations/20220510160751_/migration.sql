-- DropForeignKey
ALTER TABLE "ServiceSlot" DROP CONSTRAINT "ServiceSlot_clientId_fkey";

-- AlterTable
ALTER TABLE "ServiceSlot" ALTER COLUMN "clientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ServiceSlot" ADD CONSTRAINT "ServiceSlot_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
