export class UserAccountDto {
    // user
    readonly name_user: string;
    readonly email_user: string;
    readonly photo_user: string;
    readonly username_user: string;
    readonly password_user: string;

    // address
    readonly street_address: string;
    readonly zip_code_address: string;
    readonly city_address: string;
    readonly state_address: string;
    readonly country_address: string;
}