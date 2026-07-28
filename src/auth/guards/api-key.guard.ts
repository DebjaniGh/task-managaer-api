// auth/guards/api-key.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest(); // access the request object
    const apiKey = request.headers['x-api-key']; // extract the headers fromt he request

    if (apiKey !== 'secret123') {
      throw new UnauthorizedException('Invalid API key');
    }
    return true;
  }
}
