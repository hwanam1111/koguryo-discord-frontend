import { CoreOutput } from '@apis/common/dtos/output.dto';
import { KartUser } from '@apis/kartrider/entities/kart-user.entity';

export interface SearchKartUserByAccessIdInput {
  accessId: number;
}

export interface SearchKartUserByAccessIdOutput extends CoreOutput {
  user: KartUser;
}
