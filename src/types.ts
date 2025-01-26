export interface ButtonProps {
  selectedButton: SelectedButton;
  buttonType: SelectedButton;
}

export enum SelectedButton {
  First = 0,
  Second = 1,
  Third = 2
}