import { Container } from 'inversify';
import { TYPES } from './types';

import { ICommand } from 'commands/command.interface';
import { SayHelloCommand } from '../commands';
import { ISomeService } from '../services/some.interface';
import { SomeService } from '../services/some.service';

export const container = new Container({ autoBindInjectable: true });

container.bind<ISomeService>(TYPES.SomeService).to(SomeService);

container
  .bind<ICommand>(TYPES.Command)
  .to(SayHelloCommand)
  .whenTargetNamed('sayHello');
