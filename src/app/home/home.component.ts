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
      this.showSlides(this.slideIndex);
      setInterval(() => {
          this.plusSlides(this.slideIndex + 1);
          console.log('change');
        },
        4000);
  }
  showSlides(n: number): void {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute( 'style', 'display:none;');
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('  active', '');
    }
    slides[this.slideIndex - 1].setAttribute( 'style', 'display:block;');
    dots[this.slideIndex - 1].className += ' active';
  }
  currentSlide(n): void {
    this.showSlides(this.slideIndex = n);
  }
  plusSlides(n): void {
    this.showSlides(this.slideIndex += n);
  }
}


