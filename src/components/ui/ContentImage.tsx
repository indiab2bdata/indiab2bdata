import { getImageProps, type ImageProps } from "next/image";

type ContentImageProps = Omit<ImageProps, "fill" | "style" | "placeholder" | "priority">;

/** Next.js optimized sources with dimensions and CSS styling, without generated inline styles. */
export function ContentImage({ preload = false, ...image }: ContentImageProps) {
  const optimized = getImageProps({ ...image, ...(preload ? { loading: "eager", fetchPriority: "high" } : {}) });
  const props = { ...optimized.props, style: undefined };
  return (
    <>
      {preload && <link rel="preload" as="image" imageSrcSet={props.srcSet} imageSizes={props.sizes} href={props.srcSet ? undefined : props.src} fetchPriority="high" />}
      {/* getImageProps preserves Next.js image optimization and responsive sources. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} alt={props.alt} />
    </>
  );
}
