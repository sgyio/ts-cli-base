import { injectable } from 'inversify';
import { container, TYPES } from '../ioc';

import { ISomeService } from '../services/some.interface';
import { ICommand } from './command.interface';

@injectable()
export class SayHelloCommand implements ICommand {
  public readonly command = ['say-hello', 'sh'];

  public readonly describe = 'Says hello world';

  public builder = {};

  public handler(): void {
    const someService = container.get<ISomeService>(TYPES.SomeService);
    someService.helloWorld();
  }
}
