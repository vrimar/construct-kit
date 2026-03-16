import { CheckIcon } from "lucide-react";
import React from "react";
import { Box, HStack } from "styled-system/jsx";

interface SelectListItemProps<T> {
  item: T;
  isSelected: boolean;
  renderLabel: (item: T) => React.ReactNode;
  onSelect: (item: T, e: React.MouseEvent<HTMLDivElement>) => void;
  activeItemStyle?: "checkmark" | "none";
  renderActions?: (item: T) => React.ReactNode;
}

export const SelectListItem = <T,>({
  item,
  isSelected,
  renderLabel,
  onSelect,
  activeItemStyle,
  renderActions,
}: SelectListItemProps<T>) => {
  const isCheckmarkStyle = activeItemStyle === "checkmark";

  const handleItemSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".select__actions")) return;
    onSelect(item, e);
  };

  return (
    <Box onClick={handleItemSelect}>
      <HStack
        px="2"
        py="1"
        borderRadius="sm"
        cursor="pointer"
        justifyContent="space-between"
        position="relative"
        _hover={{
          bg: "bg.subtle",
        }}
        width="100%"
        color={isSelected ? "primary" : undefined}
      >
        {isCheckmarkStyle && (
          <Box
            opacity={isSelected ? "1" : "0"}
            mt="1"
          >
            <CheckIcon />
          </Box>
        )}

        <Box
          flex="1"
          wordBreak="break-word"
          userSelect="none"
        >
          {renderLabel(item)}
        </Box>
        {renderActions && (
          <HStack
            className="select__actions"
            alignSelf="flex-start"
            gap="0"
            bg="bg"
            onClick={(e) => e.stopPropagation()}
          >
            {renderActions(item)}
          </HStack>
        )}
      </HStack>
    </Box>
  );
};
