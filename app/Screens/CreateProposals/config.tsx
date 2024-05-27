export const headerData: string[] = [
  "Cover Details",
  "Proposer Details",
  "Nominee Details",
  "Member Details",
  "Documents",
  "Protability",
  "Premium & Payment",
];

export interface ChipItemProps {
  index: number;
  title: string;
  onPress: (index: number) => void;
  isActive: boolean;
}
