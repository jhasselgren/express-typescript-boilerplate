import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
import { RequestBody } from '../../../core/api/RequestBody';
import { EndsWithValidator } from '../../Validators/EndsWithValidator';

/**
 * This class is used for create request. Create a new instance
 * with the json body and than call .validate() to check if
 * all criteria are given
 *
 * @export
 * @class UserCreateRequest
 * @extends {RequestBody}
 */
export class UserCreateRequest extends RequestBody {

    @IsNotEmpty()
    public firstName: string;

    @IsNotEmpty()
    public lastName: string;

    @IsNotEmpty()
    @IsEmail()
    @Validate(EndsWithValidator, ['@gmail.com', '@w3tec.ch'])
    public email: string;

    public picture: string;
    public auth0UserId: string;

}

