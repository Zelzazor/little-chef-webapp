import { BaseEntity } from '../../utility/types/entity';

export type Tag = BaseEntity & {
  name: string;
  tagType: TagType;
};

type TagType = BaseEntity & {
  name: string;
};
