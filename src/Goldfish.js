/**
 * GAS Goldfish
 * Copyright (C) 2022 Guilherme T Maeoka
 * <https://github.com/guimspace/gas-goldfish>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const _Goldfish = Object.seal({
  CachedProperties: {
    document: null,
    script: null,
    user: null
  },
  CacheService2: {
    document: null,
    script: null,
    user: null
  },
  PropertiesService2: {
    document: null,
    script: null,
    user: null
  },
  Settings: {
    document: {},
    script: {},
    user: {}
  },
  SpreadsheetApp2: {
    spreadsheet: null,
    ui: null,
    ids: {}
  }
});
