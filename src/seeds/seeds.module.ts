import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedsService } from './seeds.service';
import { User, UserSchema } from '../users/user.model'; 
import { SeedsController } from './seeds.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [SeedsController],
  providers: [SeedsService],
})
export class SeedsModule {}