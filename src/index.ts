import type { Rule } from "eslint";
import type { ESLintUtils } from "@typescript-eslint/utils";
import type { ESLintConfig, Rules } from "eslint-define-config";
import type { TypeScriptRules } from "eslint-define-config/src/rules/typescript-eslint";

const a: TypeScriptRules = {} as any;
a;

type _A = "error" | "warn" | "off" | 0 | 1 | 2;
type _B<Options> = _A | [_A, Partial<Options>];

export interface _C {
  c: _B<unknown>;
  a: _B<{ allow: string[] }>;
  b: _B<unknown>;
}

export type _D = Rules & Partial<_C>;

export interface _E {
  a: () => Promise<{
    a: Rule.RuleModule | ESLintUtils.RuleModule<string, unknown[]>;
  }>;
  b?: _A;
}

export type _F = Omit<ESLintConfig, "rules"> & {
  a?: _D;
  b?: string | string[];
};

export function g(a: _F = {}): ESLintConfig {
  return {};
}
