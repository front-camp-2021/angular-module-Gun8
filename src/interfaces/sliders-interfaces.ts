export interface Sliders{
  price: Slider
}

export interface Slider {
  min: number,
  max: number,
  formatValue: (value: number) => string,
  selected: Selected,
  precision: number,
  filterName: string
}

interface Selected{
  from: number,
  to: number
}
