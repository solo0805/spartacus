/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';
import { Converter, Occ } from '@spartacus/core';
import { B2BUnitNode } from '@spartacus/organization/administration/core';

@Injectable({
  providedIn: 'root',
})
export class OccOrgUnitNodeNormalizer
  implements Converter<Occ.B2BUnitNode, B2BUnitNode>
{
  convert(source: Occ.B2BUnitNode, target?: B2BUnitNode): B2BUnitNode {
    if (target === undefined) {
      target = { ...(source as any) } as B2BUnitNode;
    }
    return target;
  }
}
