/* eslint-disable @typescript-eslint/camelcase */
import { Order } from './../order/order.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import { UserBattleRoyale } from '../user_battle_royale/user_battle_royale.entity';
import { UserGiveaway } from '../user_giveaway/user_giveaway.entity';
import { Address } from '../address/address.entity';
import { Notification } from '../notification/notification.entity';

/**
 * User entity
 *
 * @export
 * @class User
 */
@Entity()
export class User {
  /**
   * generate user id
   *
   * @type {number}
   * @memberof User
   */
  @PrimaryGeneratedColumn()
  id_user: number;

  /**
   * all sponsor for this user
   *
   * @type {User[]}
   * @memberof User
   */
  @OneToMany(
    () => User,
    user => user.sponsoredBy,
  )
  sponsor: User[];

  /**
   * the user sponsor this user
   *
   * @type {User}
   * @memberof User
   */
  @ManyToOne(
    () => User,
    user => user.sponsor,
  )
  @JoinColumn({ name: 'sponsored_by' })
  sponsoredBy: User;

  /**
   * all orders for this user
   *
   * @type {Order[]}
   * @memberof User
   */
  @OneToMany(
    () => Order,
    order => order.user,
  )
  orders: Order[];

  /**
   * all battle royale playing by this user
   *
   * @type {UserBattleRoyale[]}
   * @memberof User
   */
  @OneToMany(
    () => UserBattleRoyale,
    userBattleRoyale => userBattleRoyale.user,
  )
  battleRoyalePlayed: UserBattleRoyale[];

  /**
   * all giveaway playing by this user
   *
   * @type {UserGiveaway[]}
   * @memberof User
   */
  @OneToMany(
    () => UserGiveaway,
    userGiveaway => userGiveaway.user,
  )
  giveawayPlayed: UserGiveaway[];

  /**
   * all billing address for this user
   *
   * @type {Address[]}
   * @memberof User
   */
  @OneToMany(
    () => Address,
    address => address.userBilling,
  )
  billingAddress: Address[];

  /**
   * all notification for this user
   *
   * @type {Notification[]}
   * @memberof User
   */
  @OneToMany(
    () => Notification,
    notification => notification.user,
  )
  notifications: Notification[];

  /**
   * all delivery address for this user
   *
   * @type {Address[]}
   * @memberof User
   */
  @OneToMany(
    () => Address,
    address => address.userDelivery,
  )
  deliveryAddress: Address[];

  /**
   * user name
   *
   * @type {string}
   * @memberof User
   */
  @Column({ length: 255 })
  name_user: string;

  /**
   * user email
   *
   * @type {string}
   * @memberof User
   */
  @Column({ length: 255 })
  email_user: string;

  /**
   * user photo url
   *
   * @type {string}
   * @memberof User
   */
  @Column({ length: 255 })
  photo_user: string;

  /**
   * user pseudo
   *
   * @type {string}
   * @memberof User
   */
  @Column({ length: 255 })
  username_user: string;

  /**
   * user hashed password
   *
   * @type {string}
   * @memberof User
   */
  @Column({ length: 255 })
  password_user: string;

  /**
   * user tickets for giveaways
   *
   * @type {number}
   * @memberof User
   */
  @Column('int')
  tickets_user: number;

  /**
   * user coins for battle royale
   *
   * @type {number}
   * @memberof User
   */
  @Column('int')
  coins_user: number;

  /**
   * user status
   *
   * @type {string}
   * @memberof User
   */
  @Column({ length: 255 })
  status_user: string;

  /**
   * user rank
   *
   * @type {string}
   * @memberof User
   */
  @Column({ length: 255 })
  rank_user: string;

  /**
   * creation date of this user
   *
   * @type {Date}
   * @memberof User
   */
  @Column({ type: 'datetime' })
  created_at: Date;

  /**
   * verify date of this user
   *
   * @type {Date}
   * @memberof User
   */
  @Column({ type: 'datetime' })
  verified_at: Date;

  /**
   * if user is activate or not
   *
   * @type {number}
   * @memberof User
   */
  @Column('tinyint')
  is_activated: number;

  /**
   * if his email is already verify or not
   *
   * @type {number}
   * @memberof User
   */
  @Column('tinyint')
  is_email_verification: number;

  /**
   * if his account his fully complete
   *
   * @type {number}
   * @memberof User
   */
  @Column('tinyint')
  is_onboarding_done: number;

  /**
   * Trigger before insert user
   * the creation date of this user it's provide
   *
   * @memberof User
   */
  @BeforeInsert()
  createDate() {
    this.created_at = new Date();
  }
}
