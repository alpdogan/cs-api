import { Controller, Post } from '@nestjs/common';
import { SeedsService } from './seeds.service';

@Controller('seeds')
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @Post()
  async seedDatabase() {
    try {
      await this.seedsService.seed();
      return { message: 'Database seeded successfully' };
    } catch (error) {
      return { message: 'Error seeding database', error: error.message };
    }
  }
}
