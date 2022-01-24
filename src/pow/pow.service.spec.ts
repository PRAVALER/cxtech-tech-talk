import { Test, TestingModule } from '@nestjs/testing';
import { PowService } from './pow.service';

describe('PowService', () => {
  let service: PowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PowService],
    }).compile();

    service = module.get<PowService>(PowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
