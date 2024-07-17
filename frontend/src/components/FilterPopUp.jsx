import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import styled from 'styled-components';

const FilterList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const FilterItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const DragHandle = styled.span`
  cursor: grab;
  margin-right: 16px;
  font-size: 20px;
`;

const FilterInfo = styled.div`
  flex-grow: 1;
`;

const FilterName = styled.span`
  font-weight: bold;
  margin-right: 16px;
`;

const FilterType = styled.span`
  color: #666;
`;

const SortableItem = ({ filter }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: filter.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <FilterItem ref={setNodeRef} style={style} {...attributes}>
      <DragHandle {...listeners}>☰</DragHandle>
      <FilterInfo>
        <FilterName>{filter.name}</FilterName>
        <FilterType>{filter.type}</FilterType>
      </FilterInfo>
    </FilterItem>
  );
};

const FilterTable = ({ filters, onReorder }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = filters.findIndex((filter) => filter.id === active.id);
      const newIndex = filters.findIndex((filter) => filter.id === over.id);
      const newFilters = arrayMove(filters, oldIndex, newIndex);
      onReorder(newFilters);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={filters} strategy={verticalListSortingStrategy}>
        <FilterList>
          {filters.map((filter) => (
            <SortableItem key={filter.id} filter={filter} />
          ))}
        </FilterList>
      </SortableContext>
    </DndContext>
  );
};

export default FilterTable;