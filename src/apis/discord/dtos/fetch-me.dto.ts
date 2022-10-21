import { CoreOutput } from '@apis/common/dtos/output.dto';

export interface FetchMeInput {
  accessToken?: string;
  tokenType?: string;
}

export interface FetchMeOutput extends CoreOutput {
  me?: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    email: string;
  };
}
