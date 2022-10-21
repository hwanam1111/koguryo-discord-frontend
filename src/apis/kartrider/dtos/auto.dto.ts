import { CoreOutput } from '@apis/common/dtos/output.dto';

export interface KartriderAuthInput {
  discordId: string;
  discordUsername: string;
  kartriderAccessId: number;
  kartriderNickname: string;
}

export interface KartriderAuthOutput extends CoreOutput {}
