import { AddressRepository } from './../../shared/orm/address/address.repository';
/* eslint-disable @typescript-eslint/camelcase */
import { UserRepository } from './../../shared/orm/user/user.repository';
import { User } from './../../shared/orm/user/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccountDto } from './dto/user-account.dto';
import { Address } from './../../shared/orm/address/address.entity';

import bcrypt = require('bcrypt');

/**
 * Provide all operations about Login :
 * user, address
 *
 * @export
 * @class LoginService
 */
@Injectable()
export class LoginService {
  /**
   * Creates an instance of LoginService.
   * @param {UserRepository} userRepository
   * @param {AddressRepository} addressRepository
   * @memberof LoginService
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
    @InjectRepository(Address)
    private readonly addressRepository: AddressRepository,
  ) {}

  /**
   * Create a user account &
   * Create his billing and delivery address
   *
   * @param {UserAccountDto} accountUser data sending in request
   * @returns a new user created
   * @memberof LoginService
   */
  public async createAccountUser(accountUser: UserAccountDto) {
    const user = this.userRepository.create();
    const address = this.addressRepository.create();

    user.name_user = accountUser.name_user;
    user.email_user = accountUser.email_user;
    user.photo_user = accountUser.photo_user;
    user.username_user = accountUser.username_user;
    user.tickets_user = 100;
    user.coins_user = 0;
    user.status_user = 'new';
    user.rank_user = 'Unranked';
    user.is_activated = 0;
    user.is_email_verification = 0;
    user.is_onboarding_done = 0;

    user.password_user = await bcrypt.hash(accountUser.password_user, 10);

    const newUser = await this.userRepository.save(user);

    address.street_address = accountUser.street_address;
    address.zipe_code_address = accountUser.zip_code_address;
    address.city_address = accountUser.city_address;
    address.state_address = accountUser.state_address;
    address.country_address = accountUser.country_address;
    address.tax_country_address = 0.0;

    address.userBilling = newUser;
    address.userDelivery = newUser;

    await this.addressRepository.save(address);

    return this.userRepository.selectUserById(newUser.id_user);
  }
}
