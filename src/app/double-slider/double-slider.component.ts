import {Component, OnInit, AfterViewInit, Input, ElementRef,
  ViewChildren, QueryList, Output, EventEmitter} from '@angular/core';
import {Slider} from '../side-bar/side-bar';
import {SliderElements} from './double-slider';


@Component({
  selector: 'app-double-slider',
  templateUrl: './double-slider.component.html',
  styleUrls: ['./double-slider.component.scss']
})
export class DoubleSliderComponent implements OnInit, AfterViewInit {
  public sliderElements: SliderElements = {
    from: null,
    to: null,
    thumbLeft: null,
    thumbRight: null,
    slider: null,
    progress: null,
  };

  private _shift: number | null = null;

  private mouseUpEvent = this.onMouseUp.bind(this);
  private mouseMoveLeftThumbEvent = this.onMouseMoveLeftThumb.bind(this);
  private mouseMoveRightThumbEvent = this.onMouseMoveRightThumb.bind(this);

  @Input() public slider : Slider = {
    min: 100,
    max: 200,
    formatValue: value =>  value.toString(),
    selected: {
      from: 100,
      to: 200
    },
    precision: 0,
    filterName: ''
  };

  @Output() sliderChange = new EventEmitter<Slider>();

  @ViewChildren('from,to,thumbLeft,thumbRight,doubleSlider,progress') children! : QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.children.forEach(child => {
      const key = <keyof SliderElements>child.nativeElement.dataset.element;
      this.sliderElements[key] = child.nativeElement;
    });

    const {selected, min, max} = this.slider;
    const {thumbLeft, thumbRight,slider, progress} = this.sliderElements;

    thumbLeft!.style.left =  progress!.style.left =(selected.from - min)/(max - min) * slider!.offsetWidth + 'px';
    thumbRight!.style.right = progress!.style.right = -(selected.to - max)/(max - min) * slider!.offsetWidth + 'px';
  }

  onMouseDown(event : MouseEvent){
    this._shift = event.clientX;

    if((<HTMLSpanElement>event.target).dataset.element === 'thumbLeft'){
      document.addEventListener("mousemove", this.mouseMoveLeftThumbEvent);
    }

    if((<HTMLSpanElement>event.target).dataset.element === 'thumbRight'){
      document.addEventListener("mousemove",this.mouseMoveRightThumbEvent);
    }

    document.addEventListener("mouseup", this.mouseUpEvent);
  }

    onMouseMoveLeftThumb(event : MouseEvent){
      const {slider, thumbLeft,thumbRight, progress} = this.sliderElements;
      const {selected, min, max, precision} = this.slider;
      const shift = this._shift!;

      const rightEdge = thumbRight!.offsetLeft;
      let newLeft = ((selected.from - min)/(max - min)) * slider!.offsetWidth + event.clientX - shift;

      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumbLeft!.style.left =   newLeft + 'px';
      progress!.style.left =   newLeft + 'px';

      const from = Math.round((newLeft / slider!.offsetWidth * (max - min) + min) * Math.pow(10,precision)) / Math.pow(10,precision);
      const to = Math.round((rightEdge / slider!.offsetWidth * (max - min) + min) * Math.pow(10,precision)) /Math.pow(10,precision);

      this.updateRange(from, to);
    };

  onMouseMoveRightThumb(event : MouseEvent){
    const {slider, thumbLeft, thumbRight, progress} = this.sliderElements;
    const {selected, min, max, precision} = this.slider;
    const shift = this._shift!;

    const leftEdge = thumbLeft!.offsetLeft;
    const thumbWidth = thumbLeft!.offsetWidth;

    let newRight = ((max - selected.to)/(max - min)) * slider!.offsetWidth - event.clientX + shift;

    if (newRight <= 0) {
      newRight = 0;
    }

    if (slider!.offsetWidth - newRight < leftEdge + thumbWidth) {
      newRight = slider!.offsetWidth - leftEdge - thumbWidth ;
    }

    thumbRight!.style.right =   newRight + 'px';
    progress!.style.right =   newRight + 'px';

    const from = Math.round(((leftEdge + thumbWidth) / slider!.offsetWidth * (max - min) + min)
      * Math.pow(10,precision)) / Math.pow(10,precision);
    const to = Math.round((newRight / slider!.offsetWidth * ( min - max) + max)
      * Math.pow(10,precision)) / Math.pow(10,precision);

    this.updateRange(from, to);
  }

  onMouseUp(){
    const {from, to} = this.sliderElements;
    document.removeEventListener('mouseup',this.mouseUpEvent);
    document.removeEventListener('mousemove',this.mouseMoveLeftThumbEvent);
    document.removeEventListener('mousemove',this.mouseMoveRightThumbEvent);

    const fromRange = from!.innerText.slice(0, from!.innerText.length - 1);
    const toRange = to!.innerText.slice(0, to!.innerText.length - 1);

    this.sliderChange.emit({
      ...this.slider,
      selected: {
        from: +fromRange,
        to: +toRange,
      }
    });

    this._shift = null;
  }

  updateRange(from: number,to: number){
    this.sliderElements.from!.innerHTML = this.slider.formatValue(from);
    this.sliderElements.to!.innerHTML = this.slider.formatValue(to);
  };

  }

