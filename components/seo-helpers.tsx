/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
export function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c')
      }}
    />
  );
}
