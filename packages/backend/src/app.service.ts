import { Injectable } from '@nestjs/common';

import { Test } from '../../shared/src/enums/test.enum';

@Injectable()
export class AppService {
  getHello(): string {
    return `${Test.Siema} elo`
  }

  getSiema(): string {
    return 'eluwa';
  }
}
