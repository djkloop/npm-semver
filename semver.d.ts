/**
 * Return the parsed version, or null if it's not valid.
 */
export function valid (v: string, loose?: boolean): string;

/**
 * Return the version incremented by the release type (`major`, `premajor`, `minor`, `preminor`, `patch`, `prepatch`, or `prerelease`), or null if it's not valid.
 */
export function inc (v: string, release: string, loose?: boolean): string;

/**
 * Return the major version number.
 */
export function major (v: string, loose?: boolean): number;

/**
 * Return the minor version number.
 */
export function minor (v: string, loose?: boolean): number;

/**
 * Return the patch version number.
 */
export function patch (v: string, loose?: boolean): number;

/**
 * `v1 > v2`.
 */
export function gt (v1: string, v2: string, loose?: boolean): boolean;

/**
 * `v1 >= v2`.
 */
export function gte (v1: string, v2: string, loose?: boolean): boolean;

/**
 * `v1 < v2`.
 */
export function lt (v1: string, v2: string, loose?: boolean): boolean;

/**
 * v1 <= v2
 */
export function lte (v1: string, v2: string, loose?: boolean): boolean;

/**
 * `v1 == v2`. This is true if they're logically equivalent, even if they're not the exact same string. You already know how to compare strings.
 */
export function eq (v1: string, v2: string, loose?: boolean): boolean;

/**
 * `v1 != v2`. The opposite of `eq`.
 */
export function neq (v1: string, v2: string, loose?: boolean): boolean;

/**
 * Pass in a comparison string, and it'll call the corresponding function above. `"==="` and `"!=="` do simple string comparison, but are included for completeness. Throws if an invalid comparison string is provided.
 */
export function cmp (v1: string, comparator: any, v2: string, loose?: boolean): boolean;

/**
 * Return `0` if `v1 == v2`, or `1` if `v1` is greater, or `-1` if `v2` is greater. Sorts in ascending order if passed to `Array.sort()`.
 */
export function compare (v1: string, v2: string, loose?: boolean): number;

/**
 * The reverse of compare. Sorts an array of versions in descending order when passed to `Array.sort()`.
 */
export function rcompare (v1: string, v2: string, loose?: boolean): number;

/**
 * Returns difference between two versions by the release type (`major`, `premajor`, `minor`, `preminor`, `patch`, `prepatch`, or `prerelease`), or null if the versions are the same.
 */
export function diff (v1: string, v2: string): string;

/**
 * Return the valid range or null if it's not valid
 */
export function validRange (range: string, loose?: boolean): string;

/**
 * Return true if the version satisfies the range.
 */
export function satisfies (version: string, range: string, loose?: boolean): boolean;

/**
 * Return the highest version in the list that satisfies the range, or null if none of them do.
 */
export function maxSatisfying (versions: string[], range: string, loose?: boolean): string;

/**
 * Return `true` if version is greater than all the versions possible in the range.
 */
export function gtr (version: string, range: string, loose?: boolean): boolean;

/**
 * Return `true` if version is less than all the versions possible in the range.
 */
export function ltr (version: string, range: string, loose?: boolean): boolean;

/**
 * Return `true` if the version is outside the bounds of the range in either the high or low direction. The `hilo` argument must be either the string `'>'` or `'<'`. (This is the function called by `gtr` and `ltr`.)
 */
export function outside (version: string, range: string, hilo: string, loose?: boolean): boolean;

export class SemVerBase {
  raw: string;
  loose: boolean;
  format (): string;
  inspect (): string;
  toString (): string;
}

export class SemVer extends SemVerBase {
  constructor(version: string, loose?: boolean);

  major: number;
  minor: number;
  patch: number;
  version: string;
  build: string[];
  prerelease: string[];

  compare (other: SemVer): number;
  compareMain (other: SemVer): number;
  comparePre (other: SemVer): number;
  inc (release: string): this;
}

export class Comparator extends SemVerBase {
  constructor (comp: string, loose?: boolean);

  semver: SemVer;
  operator: string;
  value: boolean;
  parse (comp: string): void;
  test (version: SemVer): boolean;
}

export class Range extends SemVerBase {
  constructor (range: string, loose?: boolean);

  set: Comparator[][];
  parseRange (range: string): Comparator[];
  test (version: SemVer): boolean;
}
