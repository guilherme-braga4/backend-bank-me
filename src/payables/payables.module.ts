import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PayableController } from './payables.controller';
import { PayableService } from './payables.service';
import { RmqModule } from '../rmq/rmq.module';

@Module({
  imports: [RmqModule],
  controllers: [PayableController],
  providers: [PayableService, PrismaService],
})
export class PayableModule {}
