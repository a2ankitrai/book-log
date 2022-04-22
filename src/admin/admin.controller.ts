import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'admin', host: 'i.am.host.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
