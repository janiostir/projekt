import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { PostModule } from './post/post.module';
import { SubjectModule } from './subject/subject.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true}), // {isGlobal: true} -> da se lahko globalno uporabla
      UserModule,
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT,10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD, // postgresql je pr men doma, v šoli je postgres
      database: process.env.DB_NAME,
        autoLoadEntities: true,
      entities: [],
      synchronize: true,
    }),
      AuthModule,
      CommonModule,
      PostModule,
      SubjectModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
