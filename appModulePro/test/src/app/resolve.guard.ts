import { CanActivateFn, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ServerDateTimeService } from './server-date-time.service';

export const resolveGuard: ResolveFn<Object> = (route, state) => {
  return inject(ServerDateTimeService).getDateTime()
};
