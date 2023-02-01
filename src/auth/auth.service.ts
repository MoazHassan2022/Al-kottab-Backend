import { Injectable } from '@nestjs/common';
import { AuthSignupDto } from './dto/auth-signup.dto';
import { AuthDto } from './dto/auth.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { ResetForgottenPasswordDto } from './dto/reset-forgotten-password.dto';
import { ReturnedUserAndTokenSignupDto } from './dto/returned-user-and-token-signup.dto';
import { ReturnedUserAndTokenDto } from './dto/returned-user-and-token.dto';
import { returnedUserAndTokenDto } from './dummy-data/dummy-user-and-token';
import { returnedUserAndTokenSignupDto } from './dummy-data/dummy-user-and-token-signup';

@Injectable()
export class AuthService {
  login(authDto: AuthDto): ReturnedUserAndTokenDto {
    return returnedUserAndTokenDto;
  }

  signup(authSignupDto: AuthSignupDto): ReturnedUserAndTokenSignupDto {
    return returnedUserAndTokenSignupDto;
  }

  forgetPassword(forgetPasswordDto: ForgetPasswordDto): {
    status: string;
    message: string;
  } {
    return {
      status: 'success',
      message: '.تم إرسال الرابط إلى بريدك الإلكتروني بنجاح',
    };
  }

  resetForgottenPassword(
    resetToken: string,
    resetForgottenPasswordDto: ResetForgottenPasswordDto,
  ): ReturnedUserAndTokenDto {
    return returnedUserAndTokenDto;
  }

  changePassword(
    changePasswordDto: ChangePasswordDto,
  ): ReturnedUserAndTokenDto {
    return returnedUserAndTokenDto;
  }
}