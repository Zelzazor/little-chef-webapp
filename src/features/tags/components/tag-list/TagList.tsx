import { Pagination } from 'antd';
import Search from 'antd/es/input/Search';
import { Pagination as PaginationResponse } from '../../../utility/types/pagination';
import { TagFilters } from '../../types/get-tags';
import { Tag } from '../../types/tag';
import { SelectedTagItem } from '../selected-tag-item/SelectedTagItem';

interface TagListProps {
  tags: Partial<Tag>[];
  pagination: PaginationResponse;
  selectedTags: Partial<Tag>[];
  tagFilters: TagFilters;
  addTag: (tag: Partial<Tag>) => void;
  removeTag: (id: string) => void;
  setTagFilters: (filters: TagFilters) => void;
}

export const TagList = ({
  tags,
  selectedTags,
  addTag,
  removeTag,
  tagFilters,
  setTagFilters,
  pagination,
}: TagListProps) => {
  return (
    <>
      <p className="m-0">Tags</p>
      <div className="flex gap-2 justify-center">
        <div
          className="flex flex-col justify-between gap-2 flex-1 bg-white rounded-xl shadow-md overflow-y-scroll p-2"
          style={{ height: 500 }}
        >
          <div className="flex flex-col gap-2">
            <Search
              placeholder="Search by name"
              allowClear
              enterButton="Search"
              size="large"
              id="ingredientSearch"
              form="searchForm"
              onSearch={(value) => {
                setTagFilters({ ...tagFilters, name: value });
              }}
            />
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-2 border-2 border-[#ca3433] rounded-md cursor-pointer py-10 px-2 hover:bg-slate-100"
                onClick={() => addTag(tag)}
              >
                <div>{tag.name}</div>
              </div>
            ))}
          </div>

          <Pagination
            className="mx-auto"
            defaultPageSize={12}
            pageSizeOptions={[12, 24, 48]}
            pageSize={tagFilters.pageSize}
            showSizeChanger
            defaultCurrent={tagFilters.page ?? 1}
            total={pagination.totalItems}
            onChange={(page, pageSize) => {
              setTagFilters({ ...tagFilters, page, pageSize });
            }}
          />
        </div>
        <div
          className="flex flex-col  gap-2 flex-1 bg-white rounded-xl shadow-md overflow-y-scroll p-2"
          style={{ height: 500 }}
        >
          {selectedTags.map((tag) => (
            <SelectedTagItem key={tag.id} tag={tag} removeTag={removeTag} />
          ))}
        </div>
      </div>
    </>
  );
};
