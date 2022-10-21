import { CoreOutput } from '@apis/common/dtos/output.dto';
import { KartUser } from '@apis/kartrider/entities/kart-user.entity';

export interface SearchKartUserByNicknameInput {
  nickname: string;
}

export interface SearchKartUserByNicknameOutput extends CoreOutput {
  user: KartUser;
}
