/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import { PaginationOptions } from '../pagination.model';

@Injectable({
  providedIn: 'root',
  useExisting: Config,
})
export abstract class PaginationConfig {
  pagination?: PaginationOptions;
}

declare module '@spartacus/core' {
  interface Config extends PaginationConfig {}
}
