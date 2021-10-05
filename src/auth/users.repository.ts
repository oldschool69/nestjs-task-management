import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;
    console.log('username', username);
    console.log('password', password);

    const user = this.create({
      username,
      password,
    });

    await this.save(user);
  }
}
