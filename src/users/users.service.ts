import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async getUsers(ids: string[]): Promise<User[]> {
    return await this.userModel.find({
      _id: { $in: [ids[0], ids[1]] },
    }).exec();
  }
  
  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async getDistance(user1Id: string, user2Id: string): Promise<number> {
    const graph = await this.buildUserRelationshipGraph();
  
    if (!graph[user1Id] || !graph[user2Id]) {
      throw new Error('Invalid user ids');
    }
  
    const visited = new Set<string>();
    const queue: { userId: string; distance: number }[] = [{ userId: user1Id, distance: 0 }];
  
    while (queue.length > 0) {
      const { userId, distance } = queue.shift();
  
      if (userId === user2Id) {
        return distance; // same user
      }
  
      if (!visited.has(userId)) {
        visited.add(userId);
  
        if (graph[userId]) {
          graph[userId].forEach((friendId) => {
            if (!visited.has(friendId)) {
              queue.push({ userId: friendId, distance: distance + 1 });
            }
          });
        }
      }
    }
    //not friends
    return -1;
  }
  
  
  private async buildUserRelationshipGraph(): Promise<{ [key: string]: string[] }> {
    const users = await this.userModel.find().exec();
    const graph: { [key: string]: string[] } = {};
  
    users.forEach((user) => {
      const friendIds = user.friends.map((friend) => friend.toString());
  
      graph[user._id.toString()] = friendIds;
      friendIds.forEach((friendId) => {
        if (!graph[friendId]) {
          graph[friendId] = [];
        }
        graph[friendId].push(user._id.toString());
      });
    });
  
    return graph;
  }
  
}