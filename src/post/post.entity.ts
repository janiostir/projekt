import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
    UpdateDateColumn, OneToMany
} from "typeorm";
import {User} from "../user/user.entity";
import {Subject} from "../subject/subject.entity";


@Entity('posts')
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(()=> User, (user) => user.posts, {eager:true})
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(()=> Subject, (subject) => subject.posts, {eager:true})
    @JoinColumn({name: 'subject_id'})
    subject: Subject;


    @Column({name: 'reply_id', nullable: true})
    replyId: number;

    @ManyToOne(() => Post, post => post.parent_posts)
    @JoinColumn({name: 'reply_id'})
    child_posts: Post;

    @OneToMany(() => Post, post => post.child_posts)
    parent_posts: Post[];

}