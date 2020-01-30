interface IdentifiableType {
  $key: string;
}

export function mapToEntities<T extends IdentifiableType>(
  items: T[],
  entities: { [id: string]: T },
): { [id: string]: T } {
  return items.reduce(
    (theEntities: { [id: string]: T }, t: T) => {
      return {
        ...theEntities,
        [t.$key]: t,
      };
    },
    { ...entities },
  );
}
