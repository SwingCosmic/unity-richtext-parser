import { UnityRichTextSerializer } from './UnityRichTextSerializer';

export { UnityRichTextSerializer } from './UnityRichTextSerializer';
export { TagConverter } from './converters/TagConverter';
export { InlineTagConverter } from './converters/InlineTagConverter';
export { ColorTagConverter } from './converters/ColorTagConverter';
export { SizeTagConverter } from './converters/SizeTagConverter';
export { LinkTagConverter } from './converters/LinkTagConverter';
export { ImageTagConverter } from './converters/ImageTagConverter';
export { DefaultTagConverter } from './converters/DefaultTagConverter';
export { ConverterManager } from './converters/ConverterManager';
export { InterpolationProcessor } from './utils/InterpolationProcessor';
export * from './types';


const UnityRichText = new UnityRichTextSerializer();
export default UnityRichText;