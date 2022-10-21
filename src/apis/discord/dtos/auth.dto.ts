import { CoreOutput } from '@apis/common/dtos/output.dto';

export interface DiscordAuthInput {
  code: string;
}

export interface DiscordAuthOutput extends CoreOutput {
  authUser?: {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
  };
}
