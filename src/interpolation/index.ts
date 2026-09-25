import { DefaultProcessor } from "./DefaultProcessor";
import type { ParseDiagnostic } from "../types";

export interface SourceProcessingContext {
  reportDiagnostic: (diagnostic: ParseDiagnostic) => void;
}


export interface InterpolationProcessor {
  process(text: string, data?: Record<string, any>): string | HTMLElement;
  /** Takes precedence over process(): runs once, before normalization/ANTLR. */
  processSource?(text: string, data?: any, context?: SourceProcessingContext): string;
}


export default new DefaultProcessor();
