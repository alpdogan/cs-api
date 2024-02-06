import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as Chance from 'chance';
import { User, UserDocument } from '../users/user.model';

const chance = new Chance();

@Injectable()
export class SeedsService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  generateRandomUserData(): Partial<User>[] {
    const users: Partial<User>[] = [];

    for (let i = 0; i < 100; i++) {
      const user: Partial<User> = {
        name: `${chance.first()} ${chance.last()}`,
        friends: [],
      };
      users.push(user);
    }

    return users;
  }

  async seed() {
    const users = this.generateRandomUserData();

    await this.userModel.deleteMany({}).exec(); // Clear 

    const createdUsers = await this.userModel.create(users);

    for (const user of createdUsers) {

      const numberOfFriends = chance.integer({ min: 1, max: 10 });

      for (let j = 0; j < numberOfFriends; j++) {
        let randomFriendIndex: number;

        do {
          randomFriendIndex = chance.integer({ min: 0, max: 99 });
        } while (randomFriendIndex === createdUsers.indexOf(user)); //except my index

        const randomFriend = createdUsers[randomFriendIndex];

        if (randomFriend._id.toString() !== user._id.toString()) {
          user.friends.push(randomFriend._id);
          randomFriend.friends.push(user._id);

          await this.userModel.findByIdAndUpdate(randomFriend._id, { friends: randomFriend.friends });
        }
      }

      await this.userModel.findByIdAndUpdate(user._id, { friends: user.friends });
    }

    return createdUsers;
  }
}
