import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideIndex = 0;
  imgArray: string[] = [
    '../../assets/pics/pic3.jpg',
    '../../assets/pics/pic2.jpeg',
    '../../assets/pics/pic1.jpg'
  ];
  constructor() { }

  ngOnInit(): void {
      this.currentSlide(1);
      setInterval(() => {
          this.plusSlides(this.slideIndex + 1);
          console.log('change');
        },
        8000);
  }
  showSlides(n: number): void {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute( 'style', 'display:none;');
    }
    slides[this.slideIndex - 1].setAttribute( 'style', 'display:block;');
  }
  currentSlide(n): void {
    this.showSlides(this.slideIndex = n);
  }
  plusSlides(n): void {
    this.showSlides(this.slideIndex += n);
  }
}


