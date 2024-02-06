// src/app.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root2024@mongodb:27017/couchsurfing-db'),
    UsersModule,
    SeedsModule,
  ],
})
export class AppModule implements OnModuleInit {

  async onModuleInit() {
  }
}
