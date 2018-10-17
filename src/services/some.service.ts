import { injectable } from 'inversify';

import { ISomeService } from './some.interface';

@injectable()
export class SomeService implements ISomeService {

  public helloWorld(): void {
    console.log('hello world.');
  }
}
