import { UnityRichTextConverter } from './UnityRichTextConverter';

export { UnityRichTextConverter } from './UnityRichTextConverter';
export { TagConverter } from './converters/TagConverter';
export { InlineTagConverter } from './converters/InlineTagConverter';
export { ColorTagConverter } from './converters/ColorTagConverter';
export { SizeTagConverter } from './converters/SizeTagConverter';
export { LinkTagConverter } from './converters/LinkTagConverter';
export { ImageTagConverter } from './converters/ImageTagConverter';
export { DefaultTagConverter } from './converters/DefaultTagConverter';
export { ConverterManager } from './converters/ConverterManager';
export { default as DefaultProcessorProcessor, InterpolationProcessor } from './interpolation';
export * from './types';


const UnityRichText = new UnityRichTextConverter();
export default UnityRichText;