import { Injectable } from '@nestjs/common';

@Injectable()
export class PowService {
  pow2(base: number) {
    return base * base;
  }

  sum(base:number){
    return base + base;
  }
}
