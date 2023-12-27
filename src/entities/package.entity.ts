import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Plan } from './plan.entity';
import { Channel } from './channel.entity';

@Entity()
export class Package {
    @PrimaryColumn('uuid', { default: () => 'uuid_generate_v4()' })
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Plan, plan => plan.package)
    plans: Plan[];

    @ManyToMany(() => Channel)
    @JoinTable()
    channels: Channel[];

}