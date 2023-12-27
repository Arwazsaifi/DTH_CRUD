import { Entity, PrimaryColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Package } from './package.entity';

@Entity()
export class Channel {
    @PrimaryColumn('uuid', { default: () => 'uuid_generate_v4()' })
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Package)
    packages: Package[];

}

